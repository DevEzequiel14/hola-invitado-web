import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function canMotion() {
	return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function playOverlayIntro() {
	const card = document.querySelector('.overlay-card');
	const overlay = document.querySelector('[data-overlay]');
	if (!card || !overlay) return;

	if (!canMotion()) {
		overlay.classList.add('is-ready');
		return;
	}

	const pieces = card.children;
	gsap.set(pieces, { opacity: 0, y: 16 });
	gsap.set('.overlay .gold-line', { scaleX: 0, y: 0 });
	gsap.set('.overlay .monogram', { scale: 0.88, y: 0 });
	overlay.classList.add('is-ready');

	const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
	tl.to('.overlay .monogram', { opacity: 1, scale: 1, y: 0, duration: 0.95 }, 0.12)
		.to('.overlay-kicker', { opacity: 1, y: 0, duration: 0.5 }, '-=0.45')
		.to('.overlay .script', { opacity: 1, y: 0, duration: 0.75 }, '-=0.32')
		.to('.overlay .gold-line', { opacity: 1, scaleX: 1, duration: 0.7, ease: 'power2.inOut' }, '-=0.45')
		.to('.overlay-copy', { opacity: 1, y: 0, duration: 0.55 }, '-=0.35')
		.to('.overlay-welcome', { opacity: 1, y: 0, duration: 0.55 }, '-=0.35')
		.to('.overlay-actions', { opacity: 1, y: 0, duration: 0.55 }, '-=0.28');

	gsap.from('.envelope-flap-wrap', {
		y: -36,
		opacity: 0,
		duration: 1.1,
		ease: 'power3.out',
	});
	gsap.from('.envelope-pocket', {
		y: 24,
		opacity: 0,
		duration: 1,
		ease: 'power3.out',
	});
}

export function playPageMotion() {
	if (!canMotion()) return;

	const photo = document.querySelector('.hero-photo');
	if (photo) {
		gsap.fromTo(
			photo,
			{ scale: 1.1 },
			{ scale: 1, duration: 6.5, ease: 'power1.out' },
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
			{ y: 28, opacity: 0 },
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
			'.section-title, .lede, .story-card, .timeline-item, .place-card, .dress-card, .gift-box, .practical-card, .rsvp-card, .gallery-track, .dots',
		);
		if (!items.length) return;
		gsap.from(items, {
			y: 28,
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
		y: 18,
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
		overlay.classList.add('is-gone');
		overlay.setAttribute('aria-hidden', 'true');
		overlay.inert = true;
	};

	if (!canMotion()) {
		finish();
		onReveal();
		return;
	}

	const flap = overlay.querySelector<HTMLElement>('[data-envelope-flap]');
	const card = overlay.querySelector<HTMLElement>('.overlay-card');
	const pocket = overlay.querySelector<HTMLElement>('.envelope-pocket');
	const tl = gsap.timeline({
		onComplete: finish,
	});

	if (flap) {
		tl.to(flap, { rotateX: -128, duration: 0.9, ease: 'power2.inOut' }, 0);
	}
	if (pocket) {
		tl.to(pocket, { y: 40, opacity: 0, duration: 0.7, ease: 'power2.in' }, 0.05);
	}
	if (card) {
		tl.to(card, { y: -26, opacity: 0, duration: 0.7, ease: 'power2.in' }, 0.12);
	}
	tl.to(overlay, { opacity: 0, duration: 1.15, ease: 'power2.inOut' }, 0.18);
	tl.call(onReveal, undefined, 0.48);
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

export function pulseCopied(button: HTMLElement) {
	if (!canMotion()) return;
	gsap.fromTo(
		button,
		{ scale: 1 },
		{ scale: 1.05, duration: 0.14, yoyo: true, repeat: 1, ease: 'power2.out' },
	);
}
