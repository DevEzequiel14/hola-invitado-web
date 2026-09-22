import { gsap } from 'gsap';
import {
  quince,
  mailtoUrl,
  whatsappUrl,
  type RsvpMemory,
} from '../data/quince';

const audioKey = quince.music.storageKey;
const rsvpKey = quince.rsvpStorageKey;
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

function setDigit(el: Element | null, next: string): void {
  if (!el || el.textContent === next) return;
  el.textContent = next;
  if (prefersReduced) return;
  el.classList.remove('is-tick');
  requestAnimationFrame(() => {
    el.classList.add('is-tick');
  });
}

function initOverlayAndAudio(): void {
  const overlay = document.querySelector<HTMLElement>('#entrada');
  const enter = document.querySelector<HTMLButtonElement>('[data-enter]');
  const toggle = document.querySelector<HTMLButtonElement>('[data-audio-toggle]');
  const audio = document.querySelector<HTMLAudioElement>('#bloom');
  const available = document.body.dataset.audioAvailable === 'true' && Boolean(audio);

  const setMuted = (muted: boolean) => {
    if (!toggle) return;
    toggle.dataset.muted = muted ? 'true' : 'false';
    toggle.setAttribute('aria-label', muted ? 'Escuchar Bloom' : 'Silenciar música');
    if (available) sessionStorage.setItem(audioKey, muted ? 'off' : 'on');
  };

  const playIfAllowed = async () => {
    if (!available || !audio) return;
    const pref = sessionStorage.getItem(audioKey);
    if (pref === 'off') {
      audio.pause();
      setMuted(true);
      return;
    }
    try {
      audio.currentTime = 0;
      await audio.play();
      setMuted(false);
    } catch {
      setMuted(true);
    }
  };

  toggle?.addEventListener('click', async () => {
    if (!available || !audio) return;
    if (audio.paused) {
      try {
        await audio.play();
        setMuted(false);
      } catch {
        setMuted(true);
      }
      return;
    }
    audio.pause();
    setMuted(true);
  });

  enter?.addEventListener('click', async () => {
    overlay?.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('locked');
    document.body.classList.add('is-alive');
    const playing = playIfAllowed();
    if (overlay && !prefersReduced) {
      overlay.dataset.open = 'leaving';
      await gsap.to(overlay, {
        opacity: 0,
        duration: 0.78,
        ease: 'power2.inOut',
      });
    }
    overlay?.setAttribute('data-open', 'false');
    await playing;
  });

  enter?.focus();
}

function initCountdown(): void {
  const root = document.querySelector<HTMLElement>('[data-countdown]');
  if (!root) return;

  const start = new Date(root.dataset.start ?? quince.startIso).getTime();
  const end = new Date(root.dataset.end ?? quince.endIso).getTime();
  const day = new Date(root.dataset.day ?? quince.eventDayStartIso).getTime();
  const dd = root.querySelector('[data-dd]');
  const hh = root.querySelector('[data-hh]');
  const mm = root.querySelector('[data-mm]');
  const ss = root.querySelector('[data-ss]');
  const msg = root.querySelector('[data-countdown-msg]');
  const live = root.querySelector('[data-countdown-live]');
  let lastLive = '';

  const showMessage = (text: string) => {
    root.dataset.mode = 'message';
    if (msg) msg.textContent = text;
    if (live && lastLive !== text) {
      live.textContent = text;
      lastLive = text;
    }
  };

  const tick = () => {
    const now = Date.now();
    if (now > end) {
      showMessage(quince.copy.after);
      return;
    }
    if (now >= day) {
      showMessage(quince.copy.today);
      return;
    }

    root.dataset.mode = 'clock';
    const diff = Math.max(0, start - now);
    const days = Math.floor(diff / 86_400_000);
    const hours = Math.floor((diff % 86_400_000) / 3_600_000);
    const mins = Math.floor((diff % 3_600_000) / 60_000);
    const secs = Math.floor((diff % 60_000) / 1000);
    setDigit(dd, pad(days));
    setDigit(hh, pad(hours));
    setDigit(mm, pad(mins));
    setDigit(ss, pad(secs));

    const spoken = `Faltan ${days} días, ${hours} horas y ${mins} minutos.`;
    if (live && spoken !== lastLive) {
      live.textContent = spoken;
      lastLive = spoken;
    }
  };

  tick();
  window.setInterval(tick, prefersReduced ? 30_000 : 1000);
}

function initGallery(): void {
  const root = document.querySelector<HTMLElement>('[data-gallery]');
  const track = document.querySelector<HTMLElement>('[data-gallery-track]');
  if (!root || !track) return;

  const slides = Array.from(track.querySelectorAll<HTMLElement>('.gallery-slide'));
  const dots = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-gallery-dots] button'));
  const prev = root.querySelector<HTMLButtonElement>('[data-gallery-prev]');
  const next = root.querySelector<HTMLButtonElement>('[data-gallery-next]');

  const currentIndex = () => {
    const left = track.scrollLeft;
    let best = 0;
    let dist = Infinity;
    slides.forEach((slide, i) => {
      const d = Math.abs(slide.offsetLeft - left);
      if (d < dist) {
        dist = d;
        best = i;
      }
    });
    return best;
  };

  const go = (index: number) => {
    const i = (index + slides.length) % slides.length;
    slides[i]?.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', inline: 'center', block: 'nearest' });
  };

  const sync = () => {
    const i = currentIndex();
    dots.forEach((dot, idx) => {
      dot.setAttribute('aria-current', idx === i ? 'true' : 'false');
    });
    slides.forEach((slide, idx) => {
      slide.classList.toggle('is-active', idx === i);
    });
  };

  prev?.addEventListener('click', () => go(currentIndex() - 1));
  next?.addEventListener('click', () => go(currentIndex() + 1));
  dots.forEach((dot, idx) => dot.addEventListener('click', () => go(idx)));
  track.addEventListener('scroll', () => sync(), { passive: true });
  sync();
}

function initReveals(): void {
  if (prefersReduced) return;
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    },
    { threshold: 0.16, rootMargin: '0px 0px -10% 0px' },
  );

  document.querySelectorAll('.section, .divider, .site-footer').forEach((el) => io.observe(el));
}

function readField(fd: FormData, key: string): string {
  const value = fd.get(key);
  return typeof value === 'string' ? value : '';
}

function showThanks(root: HTMLElement, data: RsvpMemory): void {
  const form = root.querySelector<HTMLFormElement>('[data-rsvp]');
  const thanks = root.querySelector<HTMLElement>('[data-rsvp-thanks]');
  const title = root.querySelector('[data-thanks-title]');
  const body = root.querySelector('[data-thanks-body]');
  const wa = root.querySelector<HTMLAnchorElement>('[data-wa-link]');
  const mail = root.querySelector<HTMLAnchorElement>('[data-mail-link]');
  form?.setAttribute('hidden', '');
  if (thanks) thanks.hidden = false;
  if (title) title.textContent = data.asiste ? 'Nos vemos en el jardín' : 'Gracias por avisarnos';
  if (body) {
    body.textContent = data.asiste ? quince.copy.rsvpThanksYes : quince.copy.rsvpThanksNo;
  }
  if (wa) wa.href = whatsappUrl(data);
  if (mail) mail.href = mailtoUrl(data);
}

function initRsvp(): void {
  const section = document.querySelector<HTMLElement>('#confirmar');
  const form = document.querySelector<HTMLFormElement>('[data-rsvp]');
  if (!section || !form) return;

  const error = form.querySelector<HTMLElement>('[data-rsvp-error]');
  const submit = form.querySelector<HTMLButtonElement>('[data-rsvp-submit]');

  const saved = sessionStorage.getItem(rsvpKey);
  if (saved) {
    try {
      showThanks(section, JSON.parse(saved) as RsvpMemory);
    } catch {
      sessionStorage.removeItem(rsvpKey);
    }
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (error) {
      error.hidden = true;
      error.textContent = '';
    }

    const fd = new FormData(form);
    const asiste = readField(fd, 'asiste') === 'true';
    const payload = {
      slug: quince.slug,
      nombre: readField(fd, 'nombre'),
      asiste,
      cantidad: asiste ? Number(readField(fd, 'cantidad') || '1') : 0,
      comentario: readField(fd, 'comentario'),
      website: readField(fd, 'website'),
    };

    if (submit) submit.disabled = true;
    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(json.error || 'No se pudo guardar la confirmación.');
      }
      const memory: RsvpMemory = {
        nombre: payload.nombre.trim(),
        asiste: payload.asiste,
        cantidad: payload.cantidad,
        comentario: payload.comentario.trim(),
      };
      sessionStorage.setItem(rsvpKey, JSON.stringify(memory));
      showThanks(section, memory);
    } catch (err) {
      if (error) {
        error.hidden = false;
        error.textContent =
          err instanceof Error
            ? err.message
            : 'No se pudo guardar la confirmación.';
      }
    } finally {
      if (submit) submit.disabled = false;
    }
  });
}

export function bootInvitation() {
  initOverlayAndAudio();
  initCountdown();
  initGallery();
  initReveals();
  initRsvp();
}
