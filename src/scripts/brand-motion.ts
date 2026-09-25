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
}
