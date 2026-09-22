const mapsQuery = encodeURIComponent(
	'Quinta Los Olivos, Ruta 1 km 12, Palpalá, Jujuy, Argentina',
);

export const wedding = {
	slug: 'sofiamateo-m4q7',
	brand: 'HolaInvitado',
	locale: 'es-AR',
	kicker: 'Nos casamos',
	headline: 'Sofía & Mateo',
	phrase: 'Con el corazón tranquilo y las manos juntas',
	closing: 'Los esperamos con el alma en calma. Sofi y Mateo',
	hashtag: '#SofiYMateo2027',
	couple: {
		partnerA: 'Sofía',
		partnerB: 'Mateo',
		fullA: 'Sofía Herrera',
		fullB: 'Mateo Álvarez',
		monogram: 'S&M',
		short: 'Sofi y Mateo',
	},
	date: {
		iso: '2027-03-21T17:00:00-03:00',
		label: 'Sábado 21 de marzo de 2027',
		short: '21 · 03 · 2027',
	},
	rsvp: {
		closesIso: '2027-03-01T23:59:59-03:00',
		closesLabel: '1 de marzo de 2027',
	},
	contact: {
		whatsapp: '5493884555123',
		email: 'sofia.y.mateo@example.com',
	},
	gifts: {
		intro: 'Su presencia es el regalo.',
		alias: 'sofi.mateo.casamiento',
		cbu: '0000003100012345678901',
		holder: 'Sofía Herrera',
		cbuHint: 'CBU de ejemplo, no operar.',
	},
	venue: {
		name: 'Quinta Los Olivos',
		address: 'Ruta 1 km 12, Palpalá, Jujuy',
		maps: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
		waze: `https://waze.com/ul?q=${mapsQuery}&navigate=yes`,
	},
	ceremony: {
		title: 'Ceremonia',
		kind: 'Civil al aire libre',
		time: '17:00',
		place: 'Quinta Los Olivos',
		detail:
			'Nos vemos bajo los olivos. Lleguen con tiempo: hay césped, sombra y un rato para abrazarse antes de empezar.',
	},
	reception: {
		title: 'Recepción',
		place: 'Mismo predio, salón de la quinta',
		cocktail: '18:00',
		dinner: '21:00',
		party: '04',
		summary: 'Cóctel 18:00 · Cena 21:00 · Fiesta hasta las 04',
		detail:
			'Del jardín al salón sin mudarnos de quinta. Brindamos afuera y después la mesa larga, el vals y lo que siga.',
	},
	dressCode: {
		title: 'Dress code',
		name: 'Formal garden',
		text: 'Tonos tierra, sage e ivory. El blanco y el ivory muy claro son de la novia: déjenselos a ella.',
		note: 'Zapatos cómodos: hay césped.',
		swatches: [
			{ name: 'Sage', hex: '#9CAF88' },
			{ name: 'Oliva', hex: '#6B7F5A' },
			{ name: 'Beige', hex: '#E8DFD0' },
			{ name: 'Champagne', hex: '#D4C4A8' },
			{ name: 'Forest', hex: '#3F5346' },
		],
	},
	music: {
		title: 'Photograph',
		artist: 'Ed Sheeran',
		credit: 'Photograph — Ed Sheeran',
		src: '/events/sofiamateo-m4q7/photograph.mp3',
		filename: 'photograph.mp3',
		storageKey: 'sofiamateo-m4q7-audio',
	},
	story: [
		{
			title: 'Nos conocimos',
			text: 'Un domingo de asado en Palpalá un amigo nos sentó juntos. El mate se enfrió. Nosotros no paramos de hablar.',
		},
		{
			title: 'El sí',
			text: 'Mateo esperó a que el sol se recostara entre los olivos. No hubo discurso largo. Hubo un sí que ya veníamos diciendo sin decirlo.',
		},
		{
			title: 'El día',
			text: 'El 21 de marzo abrimos la quinta y la mesa larga. Los queremos cerca, sin apuro, con el corazón quieto.',
		},
	],
	timeline: [
		{ time: '17:00', label: 'Ceremonia', icon: 'rings' },
		{ time: '18:00', label: 'Cóctel', icon: 'glass' },
		{ time: '21:00', label: 'Cena', icon: 'plate' },
		{ time: '23:00', label: 'Vals', icon: 'music' },
		{ time: '04:00', label: 'Cierre', icon: 'moon' },
	],
	practical: [
		{
			title: 'Estacionamiento',
			text: 'Hay lugar dentro de la quinta. Entran con calma y dejan el auto a metros del jardín.',
		},
		{
			title: 'Si llueve',
			text: 'La ceremonia es al aire libre. Si el cielo no ayuda, nos mudamos al salón: mismo predio, mismo horario.',
		},
		{
			title: 'Fiesta de adultos',
			text: 'Los peques invitados figuran en el RSVP. Si no están nominados, es una noche de grandes.',
		},
	],
	gallery: [
		{
			id: 'eucalipto',
			src: '01-eucalipto.webp',
			alt: 'Ramas de eucalipto y olivo apoyadas sobre lino claro',
		},
		{
			id: 'mesa',
			src: '02-mesa.webp',
			alt: 'Mesa de recepción con camino de follaje, platos ivory y servilletas sage',
		},
		{
			id: 'camino',
			src: '03-camino.webp',
			alt: 'Camino de tierra en la quinta al atardecer, entre árboles',
		},
		{
			id: 'alianzas',
			src: '04-alianzas.webp',
			alt: 'Alianzas de oro sobre lino ivory, con una hoja de olivo',
		},
		{
			id: 'salon',
			src: '05-salon.webp',
			alt: 'Salón de la quinta de noche, con luces cálidas y velas',
		},
	],
	heroAlt:
		'Sofía y Mateo de espaldas, tomados de la mano en un camino entre olivos',
	menus: ['Carne', 'Vegetariano', 'Sin TACC'] as const,
	storage: {
		audio: 'sofiamateo-m4q7-audio',
		rsvp: 'sofiamateo-m4q7-rsvp',
	},
} as const;

export type WeddingMenu = (typeof wedding.menus)[number];

export function whatsappHref(text: string) {
	return `https://wa.me/${wedding.contact.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function mailtoHref(subject: string, body: string) {
	return `mailto:${wedding.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
