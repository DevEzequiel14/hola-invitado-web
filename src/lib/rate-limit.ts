import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { getSecret } from "astro:env/server";

export type RateLimitResult = {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
};

let ipLimiter: Ratelimit | null | undefined;
let slugLimiter: Ratelimit | null | undefined;

function redisOrNull(): Redis | null {
  const url = (getSecret("UPSTASH_REDIS_REST_URL") ?? "").trim();
  const token = (getSecret("UPSTASH_REDIS_REST_TOKEN") ?? "").trim();
  if (!url || !token) return null;
  return new Redis({ url, token });
}

function getIpLimiter(): Ratelimit | null {
  if (ipLimiter !== undefined) return ipLimiter;
  const redis = redisOrNull();
  if (!redis) {
    ipLimiter = null;
    return null;
  }
  // Suave: anti script / doble-click. Familias en mismo Wi‑Fi siguen pudiendo confirmar.
  ipLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(8, "10 m"),
    prefix: "rsvp:ip",
    analytics: false,
  });
  return ipLimiter;
}

function getSlugLimiter(): Ratelimit | null {
  if (slugLimiter !== undefined) return slugLimiter;
  const redis = redisOrNull();
  if (!redis) {
    slugLimiter = null;
    return null;
  }
  // Tope diario por evento: un flood no llena la planilla entera.
  slugLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(300, "1 d"),
    prefix: "rsvp:slug",
    analytics: false,
  });
  return slugLimiter;
}

const allowAll: RateLimitResult = {
  success: true,
  limit: 0,
  remaining: 0,
  reset: 0,
};

/**
 * Sin Redis configurado (dev local) deja pasar.
 * Con Redis, falla cerrado solo si el limitador responde; si Redis timeout, fail-open.
 */
export async function enforceRsvpRateLimits(
  ip: string,
  slug: string,
): Promise<RateLimitResult> {
  const ipRatelimit = getIpLimiter();
  const slugRatelimit = getSlugLimiter();
  if (!ipRatelimit || !slugRatelimit) return allowAll;

  try {
    const ipResult = await ipRatelimit.limit(ip || "unknown");
    if (!ipResult.success) {
      return {
        success: false,
        limit: ipResult.limit,
        remaining: ipResult.remaining,
        reset: ipResult.reset,
      };
    }

    const slugResult = await slugRatelimit.limit(slug || "unknown");
    if (!slugResult.success) {
      return {
        success: false,
        limit: slugResult.limit,
        remaining: slugResult.remaining,
        reset: slugResult.reset,
      };
    }

    return {
      success: true,
      limit: Math.min(ipResult.limit, slugResult.limit),
      remaining: Math.min(ipResult.remaining, slugResult.remaining),
      reset: Math.max(ipResult.reset, slugResult.reset),
    };
  } catch (error) {
    console.warn("Rate limit no disponible; se deja pasar el RSVP", error);
    return allowAll;
  }
}
