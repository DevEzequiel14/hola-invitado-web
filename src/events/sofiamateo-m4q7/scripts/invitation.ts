import { playOverlayIntro, playOverlayExit, playPageMotion, playPaneMotion, playThanksMotion, pulseCopied } from './motion';
import { wedding } from '../data/wedding';

const AUDIO_KEY = wedding.storage.audio;
const RSVP_KEY = wedding.storage.rsvp;

function pad(n: number) {
	return String(Math.max(0, n)).padStart(2, '0');
}

function setupAudio() {
	const audio = document.querySelector<HTMLAudioElement>('[data-audio]');
	const mute = document.querySelector<HTMLButtonElement>('[data-mute]');
	if (!audio || !mute) return { playFromGesture: () => undefined };

	let available = Boolean(audio.dataset.src);

	const applyMuted = (muted: boolean) => {
		audio.muted = muted;
		mute.classList.toggle('is-muted', muted);
		mute.setAttribute('aria-pressed', String(muted));
		mute.setAttribute(
			'aria-label',
			muted ? 'Escuchar Photograph de Ed Sheeran' : 'Silenciar Photograph de Ed Sheeran',
		);
		sessionStorage.setItem(AUDIO_KEY, muted ? 'off' : 'on');
	};

	if (!available) {
		mute.disabled = true;
		mute.setAttribute('aria-label', 'Agregá photograph.mp3 para escuchar la canción');
	} else {
		audio.src = audio.dataset.src ?? '';
		mute.disabled = false;
		applyMuted(sessionStorage.getItem(AUDIO_KEY) === 'off');
	}

	mute.addEventListener('click', () => {
		if (!available) return;
		const next = !audio.muted;
		applyMuted(next);
		if (!next) {
			void audio.play().catch(() => undefined);
		}
	});

	return {
		playFromGesture: () => {
			if (!available) return;
			if (sessionStorage.getItem(AUDIO_KEY) === 'off') {
				applyMuted(true);
				return;
			}
			applyMuted(false);
			void audio.play().catch(() => undefined);
		},
	};
}

function setupOverlay(onOpen: () => void) {
	const overlay = document.querySelector<HTMLElement>('[data-overlay]');
	if (!overlay) return;

	const blockScroll = (event: Event) => {
		event.preventDefault();
	};
	overlay.addEventListener('touchmove', blockScroll, { passive: false });
	overlay.addEventListener('wheel', blockScroll, { passive: false });

	overlay.querySelectorAll('[data-open-invite]').forEach((btn) => {
		btn.addEventListener('click', () => {
			overlay.removeEventListener('touchmove', blockScroll);
			overlay.removeEventListener('wheel', blockScroll);
			window.scrollTo(0, 0);
			onOpen();
			playOverlayExit(overlay, () => {
				playPageMotion();
			});
		});
	});
}

function setupCountdown() {
	const root = document.querySelector<HTMLElement>('[data-countdown]');
	if (!root) return;
	const target = new Date(root.dataset.target ?? '').getTime();
	const daysEl = root.querySelector('[data-days]');
	const hoursEl = root.querySelector('[data-hours]');
	const minutesEl = root.querySelector('[data-minutes]');
	const live = root.querySelector('[data-countdown-live]');
	if (!Number.isFinite(target) || !daysEl || !hoursEl || !minutesEl) return;

	const tick = () => {
		const diff = Math.max(0, target - Date.now());
		const days = Math.floor(diff / 86_400_000);
		const hours = Math.floor((diff % 86_400_000) / 3_600_000);
		const minutes = Math.floor((diff % 3_600_000) / 60_000);
		daysEl.textContent = pad(days);
		hoursEl.textContent = pad(hours);
		minutesEl.textContent = pad(minutes);
		if (live) {
			live.textContent =
				diff === 0
					? 'Ya es el día.'
					: `Faltan ${days} días, ${hours} horas y ${minutes} minutos.`;
		}
	};

	tick();
	window.setInterval(tick, 30_000);
}

function setupGallery() {
	const track = document.querySelector<HTMLElement>('[data-gallery]');
	const dots = document.querySelectorAll<HTMLButtonElement>('[data-dot]');
	if (!track || !dots.length) return;
	const slides = [...track.querySelectorAll('.slide')];

	const sync = () => {
		const index = slides.findIndex((slide) => {
			const rect = slide.getBoundingClientRect();
			const parent = track.getBoundingClientRect();
			return Math.abs(rect.left - parent.left) < parent.width * 0.35;
		});
		const current = index < 0 ? 0 : index;
		dots.forEach((dot, i) => dot.classList.toggle('is-on', i === current));
	};

	track.addEventListener('scroll', () => sync(), { passive: true });
	dots.forEach((dot, i) => {
		dot.addEventListener('click', () => {
			slides[i]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
		});
	});
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

function firstName(nombre: string) {
	return nombre.split(' ')[0] || nombre;
}

function rsvpMessage(data: {
	nombre: string;
	asiste: boolean;
	cantidad: number;
	menu: string;
}) {
	if (!data.asiste) {
		return `Hola, soy ${data.nombre}. No voy a poder estar en el casamiento de Sofía y Mateo. Gracias por avisarme.`;
	}
	return `Hola, soy ${data.nombre}. Confirmo para Sofía y Mateo: sí, somos ${data.cantidad}. Menú: ${data.menu}.`;
}

function setRsvpStep(step: 1 | 2 | 3) {
	const card = document.querySelector('[data-rsvp-card]');
	if (!card) return;
	const form = card.querySelector<HTMLElement>('[data-rsvp-form]');
	const thanks = card.querySelector<HTMLElement>('[data-rsvp-thanks]');
	const pane1 = card.querySelector<HTMLElement>('[data-pane="1"]');
	const pane2 = card.querySelector<HTMLElement>('[data-pane="2"]');

	if (step === 3) {
		form?.setAttribute('hidden', '');
		thanks?.classList.remove('is-hidden');
	} else {
		form?.removeAttribute('hidden');
		thanks?.classList.add('is-hidden');
		pane1?.toggleAttribute('hidden', step !== 1);
		pane2?.toggleAttribute('hidden', step !== 2);
		const active = step === 1 ? pane1 : pane2;
		if (active) playPaneMotion(active);
	}

	card.querySelectorAll<HTMLElement>('[data-progress]').forEach((mark) => {
		const n = Number(mark.dataset.progress);
		mark.classList.toggle('is-on', n === step);
		mark.classList.toggle('is-done', n < step);
	});
}

function showThanks(data: {
	nombre: string;
	asiste: boolean;
	cantidad: number;
	menu: string;
}) {
	const thanks = document.querySelector<HTMLElement>('[data-rsvp-thanks]');
	const script = document.querySelector('[data-thanks-script]');
	const copy = document.querySelector('[data-thanks-copy]');
	const wa = document.querySelector<HTMLAnchorElement>('[data-wa-link]');
	const mail = document.querySelector<HTMLAnchorElement>('[data-mail-link]');
	if (!thanks || !copy) return;
	setRsvpStep(3);
	const name = firstName(data.nombre);
	if (script) {
		script.textContent = data.asiste ? `Los anotamos, ${name}` : `Te extrañamos, ${name}`;
	}
	copy.textContent = data.asiste
		? 'Si cambia algo, escribinos. Los esperamos con calma.'
		: 'Gracias por avisarnos. Igual los queremos cerca.';
	const text = rsvpMessage(data);
	if (wa) {
		wa.href = `https://wa.me/5493884555123?text=${encodeURIComponent(text)}`;
	}
	if (mail) {
		mail.href = `mailto:sofia.y.mateo@example.com?subject=${encodeURIComponent('Confirmación Sofía y Mateo')}&body=${encodeURIComponent(text)}`;
	}
	playThanksMotion(thanks);
}

function setupRsvp() {
	const form = document.querySelector<HTMLFormElement>('[data-rsvp-form]');
	if (!form) return;

	const yesBlock = form.querySelector<HTMLElement>('[data-if-yes]');
	const noNote = form.querySelector<HTMLElement>('[data-if-no]');
	const menusExtra = form.querySelector<HTMLElement>('[data-menus-extra]');
	const status = form.querySelector<HTMLElement>('[data-rsvp-status]');
	const next = form.querySelector<HTMLButtonElement>('[data-rsvp-next]');
	const back = form.querySelector<HTMLButtonElement>('[data-rsvp-back]');
	const saved = sessionStorage.getItem(RSVP_KEY);
	if (saved) {
		try {
			showThanks(JSON.parse(saved));
			return;
		} catch {
			sessionStorage.removeItem(RSVP_KEY);
		}
	}

	const syncYes = () => {
		const asiste = form.querySelector<HTMLInputElement>('input[name="asiste"]:checked')?.value === 'si';
		const declined = form.querySelector<HTMLInputElement>('input[name="asiste"]:checked')?.value === 'no';
		yesBlock?.classList.toggle('is-hidden', !asiste);
		noNote?.classList.toggle('is-hidden', !declined);
		const cantidad = Number(form.querySelector<HTMLInputElement>('input[name="cantidad"]')?.value ?? 1);
		menusExtra?.classList.toggle('is-hidden', !asiste || cantidad <= 1);
	};

	form.addEventListener('change', syncYes);
	syncYes();

	next?.addEventListener('click', () => {
		if (status) {
			status.textContent = '';
			status.classList.remove('is-error');
		}
		const data = new FormData(form);
		const nombre = String(data.get('nombre') ?? '').trim();
		if (nombre.length < 2) {
			if (status) {
				status.textContent = 'Poné tu nombre y apellido.';
				status.classList.add('is-error');
			}
			return;
		}
		if (data.get('asiste') == null) {
			if (status) {
				status.textContent = 'Contanos si vas a venir.';
				status.classList.add('is-error');
			}
			return;
		}
		syncYes();
		setRsvpStep(2);
	});

	back?.addEventListener('click', () => {
		if (status) {
			status.textContent = '';
			status.classList.remove('is-error');
		}
		setRsvpStep(1);
	});

	form.addEventListener('submit', async (event) => {
		event.preventDefault();
		if (status) {
			status.textContent = '';
			status.classList.remove('is-error');
		}
		const data = new FormData(form);
		const nombre = String(data.get('nombre') ?? '').trim();
		const asiste = String(data.get('asiste') ?? '') === 'si';
		const cantidad = asiste ? Number(data.get('cantidad') ?? 1) : 0;
		const menus = String(data.get('menus') ?? '').trim();
		const menuSelect = String(data.get('menu') ?? '');
		const menu = asiste ? menus || menuSelect : '';

		if (nombre.length < 2 || data.get('asiste') == null) {
			setRsvpStep(1);
			if (status) {
				status.textContent = 'Falta el primer paso.';
				status.classList.add('is-error');
			}
			return;
		}

		const payload = {
			slug: wedding.slug,
			nombre,
			asiste,
			cantidad,
			menu,
			dieta: String(data.get('dieta') ?? '').trim(),
			cancion: String(data.get('cancion') ?? '').trim(),
			comentario: String(data.get('comentario') ?? '').trim(),
			company: String(data.get('company') ?? ''),
		};

		try {
			const res = await fetch('/api/rsvp', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			});
			const json = (await res.json()) as { ok?: boolean; error?: string };
			if (!res.ok || !json.ok) {
				throw new Error(json.error ?? 'No se pudo guardar.');
			}
			sessionStorage.setItem(RSVP_KEY, JSON.stringify({ nombre, asiste, cantidad, menu }));
			showThanks({ nombre, asiste, cantidad, menu });
		} catch (error) {
			if (status) {
				status.classList.add('is-error');
				status.textContent =
					error instanceof Error
						? error.message
						: 'No se pudo guardar la confirmación.';
			}
		}
	});
}

export function bootInvitation() {
	const audio = setupAudio();
	playOverlayIntro();
	setupOverlay(() => {
		void audio.playFromGesture();
	});
	setupCountdown();
	setupGallery();
	setupCopy();
	setupRsvp();
}
