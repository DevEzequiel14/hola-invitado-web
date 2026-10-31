import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function canMotion() {
	return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Mariposas del overlay: aleteo suave en loop. Se guardan para frenarlas al abrir. */
let overlayFloats: gsap.core.Tween[] = [];

export function playOverlayIntro() {
	const card = document.querySelector('.overlay-card');
	const overlay = document.querySelector('[data-overlay]');
	if (!card || !overlay) return;

	if (!canMotion()) {
		overlay.classList.add('is-ready');
		return;
	}

	overlay.classList.add('is-ready');

	const tl = gsap.timeline({
		defaults: { ease: 'power3.out' },
		onComplete: () => {
			// Limpia estilos inline para que la salida suave de CSS (.is-opening) pueda actuar.
			gsap.set([card, ...Array.from(card.children)], { clearProps: 'opacity,transform' });
		},
	});

	tl.from(card, { opacity: 0, y: 28, scale: 0.97, duration: 0.9 }, 0)
		.from('.overlay .monogram', { opacity: 0, scale: 0.86, rotate: -6, duration: 0.85 }, 0.2)
		.from('.overlay .script', { opacity: 0, y: 14, duration: 0.8 }, '-=0.45')
		.from('.overlay-secondary', { opacity: 0, y: 10, duration: 0.45 }, '-=0.45')
		.from(
			'.overlay .gold-line',
			{ opacity: 0, scaleX: 0, duration: 0.7, ease: 'power2.inOut' },
			'-=0.45',
		)
		.from('.overlay-copy', { opacity: 0, y: 12, duration: 0.55 }, '-=0.35')
		.from('.overlay-welcome', { opacity: 0, y: 12, duration: 0.55 }, '-=0.35')
		.from('.overlay-actions', { opacity: 0, y: 12, duration: 0.55 }, '-=0.28');

	gsap.from('.overlay-wash', {
		opacity: 0,
		scale: 0.9,
		duration: 1.2,
		stagger: 0.12,
		ease: 'power2.out',
	});

	const butterflies = gsap.utils.toArray<HTMLElement>('.overlay-bf');
	gsap.from(butterflies, {
		opacity: 0,
		scale: 0.4,
		duration: 0.9,
		stagger: 0.12,
		delay: 0.3,
		ease: 'back.out(1.6)',
	});
	overlayFloats = butterflies.map((el, i) =>
		gsap.to(el, {
			y: i % 2 === 0 ? -14 : 12,
			x: i % 2 === 0 ? 8 : -10,
			rotate: i % 2 === 0 ? 6 : -6,
			duration: 2.6 + i * 0.4,
			repeat: -1,
			yoyo: true,
			ease: 'sine.inOut',
			delay: 1.1,
		}),
	);
}

export function playPageMotion() {
	if (!canMotion()) return;

	const photo = document.querySelector('.hero-photo');
	if (photo) {
		gsap.fromTo(
			photo,
			{ scale: 1.1 },
			{ scale: 1, duration: 6.8, ease: 'power1.out' },
		);
		gsap.to(photo, {
			yPercent: 8,
			ease: 'none',
			scrollTrigger: {
				trigger: '.hero',
				start: 'top top',
				end: 'bottom top',
				scrub: true,
			},
		});
	}

	const heroBits = document.querySelectorAll('.hero-reveal');
	if (heroBits.length) {
		gsap.fromTo(
			heroBits,
			{ y: 24, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 0.95,
				stagger: 0.1,
				ease: 'power3.out',
				delay: 0.08,
			},
		);
	}

	gsap.from('.hero-bf', {
		opacity: 0,
		scale: 0.5,
		duration: 1,
		stagger: 0.18,
		delay: 0.4,
		ease: 'back.out(1.5)',
	});

	gsap.fromTo(
		'.mute, .audio-hint',
		{ opacity: 0, scale: 0.86 },
		{
			opacity: 1,
			scale: 1,
			duration: 0.5,
			delay: 0.35,
			stagger: 0.08,
			ease: 'power2.out',
		},
	);

	gsap.utils.toArray<HTMLElement>('.section').forEach((section) => {
		const items = section.querySelectorAll(
			'.section-title, .lede, .story-card, .timeline-item, .game-card, .place-card, .dress-card, .gift-box, .practical-card, .rsvp-card, .gallery-track, .dots',
		);
		if (!items.length) return;
		gsap.from(items, {
			y: 24,
			opacity: 0,
			duration: 0.8,
			stagger: 0.07,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: section,
				start: 'top 84%',
				once: true,
			},
		});
	});

	gsap.from('.footer .hashtag, .footer .closing, .footer .brand', {
		y: 16,
		opacity: 0,
		duration: 0.85,
		stagger: 0.1,
		ease: 'power3.out',
		scrollTrigger: {
			trigger: '.footer',
			start: 'top 88%',
			once: true,
		},
	});

	gsap.utils.toArray<SVGPathElement>('.divider svg path').forEach((path) => {
		const length = path.getTotalLength();
		path.style.strokeDasharray = String(length);
		path.style.strokeDashoffset = String(length);
		gsap.to(path, {
			strokeDashoffset: 0,
			duration: 1.15,
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: path.closest('.divider') ?? path,
				start: 'top 90%',
				once: true,
			},
		});
	});

	gsap.utils.toArray<SVGCircleElement>('.divider svg circle').forEach((dot) => {
		gsap.from(dot, {
			scale: 0,
			transformOrigin: 'center',
			duration: 0.4,
			ease: 'back.out(1.6)',
			scrollTrigger: {
				trigger: dot.closest('.divider') ?? dot,
				start: 'top 90%',
				once: true,
			},
		});
	});

	ScrollTrigger.refresh();
}

export function playOverlayExit(overlay: HTMLElement, onReveal: () => void) {
	const finish = () => {
		overlayFloats.forEach((tween) => tween.kill());
		overlayFloats = [];
		overlay.classList.add('is-gone');
		overlay.setAttribute('aria-hidden', 'true');
		overlay.inert = true;
	};

	if (!canMotion()) {
		finish();
		onReveal();
		return;
	}

	let revealed = false;
	const revealOnce = () => {
		if (revealed) return;
		revealed = true;
		onReveal();
	};

	// La tarjeta se eleva y se desvanece (CSS .is-opening); las mariposas salen volando.
	overlayFloats.forEach((tween) => tween.kill());
	overlayFloats = [];
	overlay.classList.add('is-opening');

	gsap.to('.overlay-bf', {
		y: -140,
		x: (i: number) => (i % 2 === 0 ? 50 : -50),
		rotate: (i: number) => (i % 2 === 0 ? 14 : -14),
		opacity: 0,
		scale: 1.15,
		duration: 0.95,
		stagger: 0.06,
		ease: 'power2.in',
	});

	window.setTimeout(revealOnce, 360);
	window.setTimeout(finish, 1200);
}

export function playPaneMotion(pane: HTMLElement) {
	if (!canMotion()) return;
	gsap.fromTo(
		pane,
		{ y: 14, opacity: 0 },
		{ y: 0, opacity: 1, duration: 0.45, ease: 'power3.out' },
	);
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
