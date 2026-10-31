const mapsUrl =
	'https://maps.google.com/?cid=17936997607172484694&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF';

export const party = {
	slug: 'luna5-s7t2',
	brand: 'HolaInvitado',
	locale: 'es-AR',
	kicker: '5 años',
	headline: 'Luna',
	phrase: 'Ohana significa familia. Y la familia nunca te deja atrás.',
	closing: 'Los esperamos con abrazos, torta y mucha playa imaginaria. Mamá, papá y Luna.',
	invitedBy: 'Mamá y papá, con Luna',
	honoree: {
		name: 'Luna',
		firstName: 'Luna',
		monogram: 'L·5',
		short: 'Luna',
	},
	hosts: {
		parents: ['Mamá', 'Papá'],
		parentsLine: 'Mamá y papá',
		inviteLine: 'Mamá y papá, con Luna, los invitan',
	},
	date: {
		iso: '2027-04-18T16:00:00-03:00',
		label: 'Domingo 18 de abril de 2027',
		short: '18 · 04 · 2027',
	},
	rsvp: {
		closesIso: '2027-04-11T23:59:59-03:00',
		closesLabel: '11 de abril de 2027',
	},
	contact: {
		whatsapp: '5493884849767',
		email: 'luna5@example.com',
	},
	gifts: {
		intro: 'Su presencia es el mejor regalo.',
		detail:
			'Si quieren traer un detalle para Luna, una mesa de regalos los espera en el quincho. Lo más importante es que estén.',
		alias: '',
		cbu: '',
		holder: '',
		cbuHint: '',
	},
	venue: {
		name: 'Quincho El Tata',
		address: 'Calle Los Lapachos 1240, Yala, Jujuy',
		maps: mapsUrl,
	},
	event: {
		title: 'El lugar',
		kind: 'Cumpleaños · fiesta tropical',
		time: '16:00',
		place: 'Quincho El Tata',
		detail:
			'Recepción desde las 16:00. Juegos, snack, baile corto y torta con vibe de playa… aunque estemos en el quincho.',
	},
	dressCode: {
		title: 'Dress code',
		name: 'Tropical cute',
		text: 'Azul, rosa, blanco, flores o un toque playero. Vengan cómodos para correr, saltar y abrazar.',
		note: 'El quincho tiene techo; igual conviene un abrigo liviano por si refresca al atardecer.',
		swatches: [
			{ name: 'Azul', hex: '#3D8FD1' },
			{ name: 'Rosa', hex: '#FF6B9D' },
			{ name: 'Celeste', hex: '#A8D8F0' },
			{ name: 'Arena', hex: '#FFF5E6' },
			{ name: 'Hibisco', hex: '#E85A7A' },
		],
	},
	music: {
		src: '/events/luna5-s7t2/ohana-breeze.mp3',
		filename: 'ohana-breeze.mp3',
		storageKey: 'luna5-s7t2-audio',
	},
	story: [
		{
			title: 'Luna cumple 5',
			text: 'Cinco vueltas al sol y un corazón enorme. Quiere festejar con su gente: peques, primas, amigos y la familia grande.',
		},
		{
			title: 'Ohana en el quincho',
			text: 'No hace falta ir a Hawái. El quincho se pone azul y rosa, con stickers, música suave y una mesa lista para la torta.',
		},
		{
			title: 'El experimento 5',
			text: 'Habrá juegos, snacks y un brindis de jugo. Si venís, formás parte de la manada por un rato.',
		},
	],
	timeline: [
		{ time: '16:00', label: 'Recepción', icon: 'spark' as const },
		{ time: '16:30', label: 'Juegos', icon: 'wave' as const },
		{ time: '17:30', label: 'Snack', icon: 'cup' as const },
		{ time: '18:15', label: 'Torta', icon: 'cake' as const },
		{ time: '19:00', label: 'Cierre', icon: 'heart' as const },
	],
	games: [
		{
			title: 'Carrera de hibiscos',
			text: 'Llevá la flor (de papel) sin que se caiga. Quien llega primero gana un sticker.',
		},
		{
			title: 'Congelado musical',
			text: 'Cuando para la música, ¡congelados como en el espacio!',
		},
		{
			title: 'Buscá el corazón',
			text: 'Corazones escondidos por el quincho. Cada uno vale un punto.',
		},
		{
			title: 'Baile ohana',
			text: 'Todos juntos, peques y grandes. El que más se ríe gana.',
		},
	],
	practical: [
		{
			title: 'Estacionamiento',
			text: 'Hay lugar dentro del predio. Entrá con calma y dejá el auto cerca del quincho.',
		},
		{
			title: 'Si llueve',
			text: 'El quincho tiene techo y costados. La fiesta sigue igual.',
		},
		{
			title: 'Peques',
			text: 'La fiesta es para chicos. Anotá cuántos vienen en la confirmación.',
		},
	],
	gallery: [
		{
			id: 'hearts',
			src: '01-hearts.webp',
			alt: 'Stitch entre corazones celestes, muestra ilustrativa',
		},
		{
			id: 'cute',
			src: '02-cute.webp',
			alt: 'Stitch con corazones rosa, muestra ilustrativa',
		},
		{
			id: 'hello',
			src: '03-hello.webp',
			alt: 'Stitch saludando entre papel rasgado, muestra ilustrativa',
		},
		{
			id: 'splash',
			src: '04-splash.webp',
			alt: 'Stitch sobre acuarela azul, muestra ilustrativa',
		},
		{
			id: 'heart',
			src: '05-heart.webp',
			alt: 'Stitch formando un corazón con las manos, muestra ilustrativa',
		},
	],
	heroAlt:
		'Stitch sentado entre corazones azules, muestra ilustrativa del cumple de Luna',
	menus: ['Infantil', 'Vegetariano', 'Sin TACC'] as const,
	storage: {
		audio: 'luna5-s7t2-audio',
		rsvp: 'luna5-s7t2-rsvp',
	},
} as const;

export type PartyMenu = (typeof party.menus)[number];

export function whatsappHref(text: string) {
	return `https://wa.me/${party.contact.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function mailtoHref(subject: string, body: string) {
	return `mailto:${party.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
