const mapsUrl =
	'https://maps.google.com/?cid=17936997607172484694&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF';

export const shower = {
	slug: 'matildabb-m7w2',
	brand: 'HolaInvitado',
	locale: 'es-AR',
	kicker: 'Baby shower',
	headline: 'Matilda',
	phrase: 'Una tarde de té para celebrarla, entre mariposas y risas.',
	closing: 'Los esperamos con el corazón abierto. Marcos, Natalia y la familia.',
	invitedBy: 'Marcos y Natalia, con la familia',
	honoree: {
		name: 'Matilda Solis',
		firstName: 'Matilda',
		monogram: 'M',
		short: 'Matilda',
	},
	hosts: {
		parents: ['Marcos', 'Natalia'],
		parentsLine: 'Marcos y Natalia',
		inviteLine: 'Marcos y Natalia, con la familia, los invitan',
	},
	date: {
		iso: '2027-06-12T16:00:00-03:00',
		label: 'Sábado 12 de junio de 2027',
		short: '12 · 06 · 2027',
	},
	rsvp: {
		closesIso: '2027-06-05T23:59:59-03:00',
		closesLabel: '5 de junio de 2027',
	},
	contact: {
		whatsapp: '5493884849767',
		email: 'matilda.shower@example.com',
	},
	gifts: {
		intro: 'Habrá mesa de regalos en el quincho.',
		detail:
			'Si quieren traer un detalle para Matilda, la mesa de regalos los espera. Su presencia es lo más importante.',
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
		kind: 'Baby shower · tarde de té',
		time: '16:00',
		place: 'Quincho El Tata',
		detail:
			'Recepción desde las 16:00. Té, pastelitos, juegos con sorpresas y una mesa para celebrar a Matilda con calma y cariño.',
	},
	dressCode: {
		title: 'Dress code',
		name: 'Pastel suave',
		text: 'Pasteles, flores suaves, blanco roto o un toque de lila. Vengan cómodos, como para una tarde de té al aire libre.',
		note: 'El quincho tiene techo; igual conviene un abrigo liviano por si refresca.',
		swatches: [
			{ name: 'Blush', hex: '#FFB7C5' },
			{ name: 'Lila', hex: '#C9B6E4' },
			{ name: 'Menta', hex: '#A8E0D0' },
			{ name: 'Crema', hex: '#FFF8F5' },
			{ name: 'Oro suave', hex: '#F5E6A8' },
		],
	},
	music: {
		src: '/events/matildabb-m7w2/butterfly-tea.mp3',
		filename: 'butterfly-tea.mp3',
		storageKey: 'matildabb-m7w2-audio',
	},
	story: [
		{
			title: 'Marcos y Natalia',
			text: 'Esperan a Matilda con la familia cerca. Quieren compartir esta tarde antes de que llegue: té, abrazos y la mesa larga del quincho.',
		},
		{
			title: 'Una tarde de té',
			text: 'No es una fiesta de revelación: ya saben que viene una nena. Es un rato para jugar, reír y dejarle un detalle en la mesa de regalos.',
		},
		{
			title: 'Mariposas',
			text: 'El clima es suave y colorido. Mariposas, pasteles y sorpresas para quien se anime a los juegos.',
		},
	],
	timeline: [
		{ time: '16:00', label: 'Recepción y té', icon: 'cup' as const },
		{ time: '16:40', label: 'Juegos con premios', icon: 'spark' as const },
		{ time: '17:30', label: 'Mesa de regalos', icon: 'gift' as const },
		{ time: '18:15', label: 'Torta', icon: 'cake' as const },
		{ time: '19:00', label: 'Cierre', icon: 'butterfly' as const },
	],
	games: [
		{
			title: 'Bingo de baby shower',
			text: 'Cartones listos. Quien completa primero se lleva una sorpresa.',
		},
		{
			title: 'Adiviná el tamaño',
			text: '¿Cuánto mide la pancita? El más cerca gana un detalle.',
		},
		{
			title: 'Predicciones para Matilda',
			text: 'Escribí un deseo o una predicción. Se guardan para cuando ella crezca.',
		},
		{
			title: 'Pasa el paquete',
			text: 'Música, risas y un regalito escondido. Cuando para, abrís.',
		},
	],
	practical: [
		{
			title: 'Estacionamiento',
			text: 'Hay lugar dentro del predio. Entrá con calma y dejá el auto cerca del quincho.',
		},
		{
			title: 'Si llueve',
			text: 'El quincho tiene techo y costados cerrados. La tarde sigue igual.',
		},
		{
			title: 'Peques',
			text: 'Los chicos son bienvenidos. Anótenlos en la confirmación para preparar la mesa.',
		},
	],
	gallery: [
		{
			id: 'mariposas',
			src: '01-mariposas.webp',
			alt: 'Mariposas acuarela sobre papel crema, muestra ilustrativa',
		},
		{
			id: 'te',
			src: '02-te.webp',
			alt: 'Taza de té y flores pastel sobre mantel, muestra ilustrativa',
		},
		{
			id: 'mesa',
			src: '03-mesa.webp',
			alt: 'Mesa de té con pastelitos y lazo blush, muestra ilustrativa',
		},
		{
			id: 'regalos',
			src: '04-regalos.webp',
			alt: 'Mesa de regalos con cajas pastel y lazos, muestra ilustrativa',
		},
		{
			id: 'juegos',
			src: '05-juegos.webp',
			alt: 'Cartones de bingo y confeti suave, muestra ilustrativa',
		},
		{
			id: 'quincho',
			src: '06-quincho.webp',
			alt: 'Quincho iluminado de tarde con decoración pastel, muestra ilustrativa',
		},
	],
	heroAlt:
		'Tarjeta pastel con mariposas acuarela y nombre Matilda, muestra ilustrativa del baby shower',
	menus: ['Té completo', 'Vegetariano', 'Sin TACC'] as const,
	storage: {
		audio: 'matildabb-m7w2-audio',
		rsvp: 'matildabb-m7w2-rsvp',
	},
} as const;

export type ShowerMenu = (typeof shower.menus)[number];

export function whatsappHref(text: string) {
	return `https://wa.me/${shower.contact.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function mailtoHref(subject: string, body: string) {
	return `mailto:${shower.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
