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

	gsap.set('.curtain-left', { xPercent: 0 });
	gsap.set('.curtain-right', { xPercent: 0 });
	overlay.classList.add('is-ready');

	const tl = gsap.timeline({
		defaults: { ease: 'power3.out' },
		onComplete: () => {
			gsap.set(card.children, { clearProps: 'opacity,transform' });
		},
	});

	tl.fromTo(
		'.curtain-left, .curtain-right',
		{ filter: 'brightness(0.55)' },
		{ filter: 'brightness(1)', duration: 1.1, clearProps: 'filter' },
		0,
	)
		.from(
			'.overlay .monogram',
			{ opacity: 0, scale: 0.86, duration: 0.95 },
			0.18,
		)
		.from('.overlay-kicker', { opacity: 0, y: 16, duration: 0.5 }, '-=0.45')
		.from('.overlay .script', { opacity: 0, y: 16, duration: 0.8 }, '-=0.3')
		.from(
			'.overlay .gold-line',
			{ opacity: 0, scaleX: 0, duration: 0.7, ease: 'power2.inOut' },
			'-=0.45',
		)
		.from('.overlay-copy', { opacity: 0, y: 14, duration: 0.55 }, '-=0.35')
		.from('.overlay-welcome', { opacity: 0, y: 14, duration: 0.55 }, '-=0.35')
		.from('.overlay-actions', { opacity: 0, y: 14, duration: 0.55 }, '-=0.28');

	gsap.fromTo(
		'.runway-spot',
		{ opacity: 0.2, scale: 0.85 },
		{ opacity: 1, scale: 1, duration: 1.4, ease: 'power2.out' },
	);
}

export function playPageMotion() {
	if (!canMotion()) return;

	const photo = document.querySelector('.hero-photo');
	if (photo) {
		gsap.fromTo(
			photo,
			{ scale: 1.12 },
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

	let revealed = false;
	const revealOnce = () => {
		if (revealed) return;
		revealed = true;
		onReveal();
	};

	// Cortinas parten al centro y salen hacia afuera; la invitación aparece en el medio.
	overlay.classList.add('is-opening');
	window.setTimeout(revealOnce, 380);
	window.setTimeout(finish, 1500);
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
