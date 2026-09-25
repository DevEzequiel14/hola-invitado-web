import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const EASE = "power3.out";

function canMotion() {
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function markReady() {
  document.documentElement.classList.add("is-ready");
}

function playHero() {
  const stub = document.querySelector<HTMLElement>(".hero-stub");
  const body = document.querySelector<HTMLElement>(".hero .ticket-body");
  const title = document.querySelector<HTMLElement>('.hero [data-hand="title"]');
  const lead = document.querySelector<HTMLElement>('.hero [data-hand="lead"]');
  const stamps = document.querySelector<HTMLElement>('.hero [data-hand="stamps"]');
  const phone = document.querySelector<HTMLElement>(".phone-hero");
  const screen = document.querySelector<HTMLElement>(".phone-hero img");
  const perfX = document.querySelector<HTMLElement>(".hero .ticket-perf-x");
  const perfY = document.querySelector<HTMLElement>(".hero .ticket-perf-y");
  const fab = document.querySelector<HTMLElement>(".wa-fab");

  if (!stub || !body || !title || !lead || !stamps || !phone) {
    markReady();
    return;
  }

  gsap.set([title, lead, stamps], { opacity: 0, y: 18, willChange: "transform, opacity" });
  gsap.set([stub, body], { opacity: 0, y: 16, willChange: "transform, opacity" });
  gsap.set(stub, { y: -14 });
  gsap.set([perfX, perfY].filter(Boolean), { opacity: 0 });
  gsap.set(phone, { opacity: 0, y: 22, willChange: "transform, opacity" });
  if (screen) gsap.set(screen, { filter: "brightness(0.42)" });
  if (fab) gsap.set(fab, { opacity: 0, scale: 0.86 });

  markReady();

  const animated = [stub, body, title, lead, stamps, phone, screen, perfX, perfY, fab].filter(Boolean);

  const tl = gsap.timeline({
    defaults: { ease: EASE },
    onComplete() {
      gsap.set(animated, { clearProps: "transform,opacity,filter,willChange" });
      ScrollTrigger.refresh();
    },
  });

  tl.to([stub, perfX].filter(Boolean), { opacity: 1, y: 0, duration: 0.34 }, 0)
    .to(body, { opacity: 1, y: 0, duration: 0.3 }, 0.08)
    .to(title, { opacity: 1, y: 0, duration: 0.32 }, 0.12)
    .to(lead, { opacity: 1, y: 0, duration: 0.24 }, 0.2)
    .to(stamps, { opacity: 1, y: 0, duration: 0.26 }, 0.3)
    .to([phone, perfY].filter(Boolean), { opacity: 1, y: 0, duration: 0.38 }, 0.42);

  if (screen) {
    tl.to(screen, { filter: "brightness(1)", duration: 0.36, ease: "power2.out" }, 0.46);
  }

  if (fab) {
    tl.to(fab, { opacity: 1, scale: 1, duration: 0.3 }, 0.62);
  }
}

function playPhoneBridge() {
  const from = document.querySelector<HTMLElement>(".phone-bridge-from");
  const to = document.querySelector<HTMLElement>(".phone-bridge-to");
  const fromShell = from?.querySelector<HTMLElement>(".phone-shell");
  const toShell = to?.querySelector<HTMLElement>(".phone-shell");
  const line = document.querySelector<HTMLElement>(".phone-line");
  const enters = gsap.utils.toArray<HTMLElement>(".phone-bridge-in");

  if (!from || !to || !fromShell || !toShell || !line) return;

  const fromMeta = from.querySelector<HTMLElement>(".phone-meta");
  const flyer = fromShell.cloneNode(true) as HTMLElement;
  flyer.classList.add("phone-bridge-flyer");
  flyer.setAttribute("aria-hidden", "true");
  document.body.appendChild(flyer);

  gsap.set(flyer, { opacity: 0, pointerEvents: "none" });
  gsap.set(to, { opacity: 0, pointerEvents: "none" });
  gsap.set(enters, { opacity: 0, y: 28 });

  const apply = (progress: number) => {
    const p = progress;
    const a = fromShell.getBoundingClientRect();
    const b = toShell.getBoundingClientRect();

    gsap.set(flyer, {
      position: "fixed",
      top: 0,
      left: 0,
      x: a.left + (b.left - a.left) * p,
      y: a.top + (b.top - a.top) * p,
      width: a.width + (b.width - a.width) * p,
      height: a.height + (b.height - a.height) * p,
      margin: 0,
      maxWidth: "none",
      zIndex: 40,
      opacity: p <= 0.02 ? 0 : p >= 0.93 ? 1 - (p - 0.93) / 0.07 : 1,
    });

    gsap.set(fromShell, { visibility: p > 0.02 ? "hidden" : "visible" });
    if (fromMeta) gsap.set(fromMeta, { opacity: Math.max(0, 1 - p * 2.4) });
    gsap.set(from, {
      backgroundColor: p > 0.14 ? "transparent" : "",
      boxShadow: p > 0.14 ? "none" : "",
    });

    enters.forEach((el, i) => {
      const local = gsap.utils.clamp(0, 1, (p - (0.5 + i * 0.08)) / 0.24);
      gsap.set(el, { opacity: local, y: 28 * (1 - local) });
    });

    const land = gsap.utils.clamp(0, 1, (p - 0.86) / 0.1);
    gsap.set(to, { opacity: land, pointerEvents: land > 0.65 ? "auto" : "none" });
    from.style.pointerEvents = p > 0.88 ? "none" : "";
  };

  const hero = document.querySelector<HTMLElement>(".hero") ?? from;

  ScrollTrigger.create({
    trigger: hero,
    start: "top top",
    endTrigger: line,
    end: "top 66%",
    scrub: 0.45,
    invalidateOnRefresh: true,
    onRefresh(self) {
      apply(self.progress);
    },
    onUpdate(self) {
      apply(self.progress);
    },
  });
}

function playTears() {
  const list = document.querySelector<HTMLElement>(".tears");
  if (!list) return;

  const tears = list.querySelectorAll<HTMLElement>(".tear");
  if (!tears.length) return;

  gsap.set(tears, { x: 16, opacity: 0 });
  gsap.to(tears, {
    x: 0,
    opacity: 1,
    duration: 0.5,
    stagger: 0.08,
    ease: EASE,
    scrollTrigger: {
      trigger: list,
      start: "top 82%",
      once: true,
    },
    onComplete() {
      gsap.set(tears, { clearProps: "transform,opacity" });
    },
  });
}

export function playBrandMotion() {
  if (!canMotion()) {
    markReady();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  playHero();
  playTears();
  playPhoneBridge();
}
