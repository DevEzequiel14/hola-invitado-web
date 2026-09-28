import {
  playOverlayIntro,
  playOverlayExit,
  playPageMotion,
  playThanksMotion,
  pulseCopied,
} from './motion';
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

function firstName(nombre: string) {
  return nombre.split(' ')[0] || nombre;
}

function setupAudio() {
  const toggle = document.querySelector<HTMLButtonElement>('[data-audio-toggle]');
  const audio = document.querySelector<HTMLAudioElement>('#bloom');
  const available = document.body.dataset.audioAvailable === 'true' && Boolean(audio);

  const setMuted = (muted: boolean) => {
    if (!toggle) return;
    toggle.dataset.muted = muted ? 'true' : 'false';
    toggle.setAttribute('aria-label', muted ? 'Escuchar música' : 'Silenciar música');
    if (available) sessionStorage.setItem(audioKey, muted ? 'off' : 'on');
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

  return {
    playFromGesture: async () => {
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
    },
  };
}

function setupOverlay(onOpen: () => void) {
  const overlay = document.querySelector<HTMLElement>('[data-overlay]');
  const enter = overlay?.querySelector<HTMLButtonElement>('[data-enter]');
  if (!overlay || !enter) return;

  const blockScroll = (event: Event) => {
    event.preventDefault();
  };
  overlay.addEventListener('touchmove', blockScroll, { passive: false });
  overlay.addEventListener('wheel', blockScroll, { passive: false });

  enter.addEventListener('click', () => {
    overlay.removeEventListener('touchmove', blockScroll);
    overlay.removeEventListener('wheel', blockScroll);
    window.scrollTo(0, 0);
    document.body.classList.add('is-alive');
    onOpen();
    playOverlayExit(overlay, () => {
      playPageMotion();
    });
  });

  enter.focus();
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
    setDigit(dd, pad(days));
    setDigit(hh, pad(hours));
    setDigit(mm, pad(mins));

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
  const wide = window.matchMedia('(min-width: 900px)');

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
    if (wide.matches) return;
    const i = (index + slides.length) % slides.length;
    slides[i]?.scrollIntoView({
      behavior: prefersReduced ? 'auto' : 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  };

  const sync = () => {
    if (wide.matches) {
      slides.forEach((slide) => slide.classList.add('is-active'));
      return;
    }
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
  wide.addEventListener('change', sync);
  sync();
}

function setupCopy() {
  document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const value = btn.parentElement?.querySelector('[data-copy-value]')?.textContent?.trim();
      if (!value) return;
      try {
        await navigator.clipboard.writeText(value);
      } catch {
        const input = document.createElement('textarea');
        input.value = value;
        document.body.append(input);
        input.select();
        document.execCommand('copy');
        input.remove();
      }
      const previous = btn.textContent;
      btn.textContent = 'Copiado';
      pulseCopied(btn);
      window.setTimeout(() => {
        btn.textContent = previous;
      }, 1600);
    });
  });
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
  const name = firstName(data.nombre);
  if (title) {
    title.textContent = data.asiste ? `Te esperamos, ${name}` : `Te extrañamos, ${name}`;
  }
  if (body) {
    body.textContent = data.asiste ? quince.copy.rsvpThanksYes : quince.copy.rsvpThanksNo;
  }
  if (wa) wa.href = whatsappUrl(data);
  if (mail) mail.href = mailtoUrl(data);
  if (thanks) playThanksMotion(thanks);
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
      cancion: readField(fd, 'cancion'),
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
        cancion: payload.cancion.trim(),
      };
      sessionStorage.setItem(rsvpKey, JSON.stringify(memory));
      showThanks(section, memory);
    } catch (err) {
      if (error) {
        error.hidden = false;
        error.textContent =
          err instanceof Error ? err.message : 'No se pudo guardar la confirmación.';
      }
    } finally {
      if (submit) submit.disabled = false;
    }
  });
}

export function bootInvitation() {
  const audio = setupAudio();
  playOverlayIntro();
  setupOverlay(() => {
    void audio.playFromGesture();
  });
  initCountdown();
  initGallery();
  setupCopy();
  initRsvp();
}
