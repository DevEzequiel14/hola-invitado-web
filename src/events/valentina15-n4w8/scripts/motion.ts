import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function canMotion() {
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function playOverlayIntro() {
  const overlay = document.querySelector<HTMLElement>('[data-overlay]');
  const copy = document.querySelector('[data-overlay-copy]');
  if (!overlay || !copy) return;

  if (!canMotion()) {
    overlay.classList.add('is-ready');
    return;
  }

  const pieces = copy.children;
  gsap.set(pieces, { opacity: 0, y: 18 });
  gsap.set('[data-overlay-lights]', { y: -18, opacity: 0 });
  gsap.set('[data-overlay-meadow]', { y: 28, opacity: 0 });
  gsap.set('.overlay .bulb', { opacity: 0.12 });
  overlay.classList.add('is-ready');

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  tl.to('[data-overlay-lights]', { y: 0, opacity: 1, duration: 1.05 }, 0.08)
    .to('.overlay .bulb', { opacity: 1, duration: 0.7, stagger: 0.05, ease: 'power2.out' }, 0.28)
    .to('[data-overlay-meadow]', { y: 0, opacity: 1, duration: 0.85 }, 0.22)
    .to(pieces, { opacity: 1, y: 0, duration: 0.7, stagger: 0.09 }, 0.38);
}

export function playOverlayExit(overlay: HTMLElement, onReveal: () => void) {
  const finish = () => {
    overlay.classList.add('is-gone');
    overlay.setAttribute('aria-hidden', 'true');
    overlay.inert = true;
  };

  if (!canMotion()) {
    finish();
    onReveal();
    return;
  }

  const lights = overlay.querySelector('[data-overlay-lights]');
  const meadow = overlay.querySelector('[data-overlay-meadow]');
  const copy = overlay.querySelector('[data-overlay-copy]');
  const tl = gsap.timeline({ onComplete: finish });

  if (lights) {
    tl.to(lights, { y: -72, opacity: 0, duration: 0.85, ease: 'power2.inOut' }, 0);
  }
  if (meadow) {
    tl.to(meadow, { y: 36, opacity: 0, duration: 0.7, ease: 'power2.in' }, 0.04);
  }
  if (copy) {
    tl.to(copy, { y: -22, opacity: 0, filter: 'blur(8px)', duration: 0.7, ease: 'power2.in' }, 0.08);
  }
  tl.to(overlay, { opacity: 0, duration: 1.05, ease: 'power2.inOut' }, 0.16);
  tl.call(onReveal, undefined, 0.42);
}

export function playPageMotion() {
  if (!canMotion()) return;

  const photo = document.querySelector('.hero-photo');
  if (photo) {
    gsap.fromTo(
      photo,
      { scale: 1.08 },
      { scale: 1, duration: 5.8, ease: 'power1.out' },
    );
  }

  const heroBits = document.querySelectorAll('[data-hero-copy] > *');
  if (heroBits.length) {
    gsap.fromTo(
      heroBits,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.06,
      },
    );
  }

  gsap.fromTo(
    '.audio-toggle',
    { opacity: 0, scale: 0.86 },
    { opacity: 1, scale: 1, duration: 0.5, delay: 0.32, ease: 'power2.out' },
  );

  const letter = document.querySelector('.letter');
  if (letter) {
    gsap.from(letter, {
      y: 20,
      opacity: 0,
      filter: 'blur(10px)',
      duration: 1,
      ease: 'power3.out',
      clearProps: 'filter',
      scrollTrigger: { trigger: letter, start: 'top 82%', once: true },
    });
  }

  gsap.from('.night li', {
    x: -16,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.night', start: 'top 84%', once: true },
  });

  gsap.utils.toArray<HTMLElement>('.section-title').forEach((title) => {
    gsap.from(title, {
      y: 18,
      opacity: 0,
      duration: 0.75,
      ease: 'power3.out',
      scrollTrigger: { trigger: title, start: 'top 88%', once: true },
    });
  });

  gsap.from('.site-footer .hashtag, .site-footer .closing, .site-footer .brand', {
    y: 16,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.site-footer', start: 'top 90%', once: true },
  });

  gsap.utils.toArray<SVGPathElement>('.divider path').forEach((path) => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = String(length);
    path.style.strokeDashoffset = String(length);
    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 1.1,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: path.closest('.divider') ?? path,
        start: 'top 90%',
        once: true,
      },
    });
  });

  ScrollTrigger.refresh();
}

export function playThanksMotion(root: HTMLElement) {
  if (!canMotion()) return;
  gsap.from(root.children, {
    y: 16,
    opacity: 0,
    duration: 0.65,
    stagger: 0.1,
    ease: 'power3.out',
  });
}

export function pulseCopied(button: HTMLElement) {
  if (!canMotion()) return;
  gsap.fromTo(
    button,
    { scale: 1 },
    { scale: 1.05, duration: 0.14, yoyo: true, repeat: 1, ease: 'power2.out' },
  );
}
