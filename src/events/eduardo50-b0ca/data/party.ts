const mapsQuery = encodeURIComponent(
	'Quincho El Tata, Calle Los Lapachos 1240, Yala, Jujuy, Argentina',
);

export const party = {
	slug: 'eduardo50-b0ca',
	brand: 'HolaInvitado',
	locale: 'es-AR',
	kicker: '50 años',
	headline: 'Eduardo',
	phrase: 'Cincuenta años de pasión, una noche para celebrarlo',
	closing: 'Gracias por venir a brindar con él. Sus hijos y toda la familia.',
	hashtag: '#Eduardo50',
	invitedBy: 'Sus hijos y su familia',
	honoree: {
		name: 'Eduardo',
		firstName: 'Eduardo',
		monogram: 'E·50',
		short: 'Eduardo',
	},
	date: {
		iso: '2027-02-13T21:00:00-03:00',
		label: 'Sábado 13 de febrero de 2027',
		short: '13 · 02 · 2027',
	},
	rsvp: {
		closesIso: '2027-02-01T23:59:59-03:00',
		closesLabel: '1 de febrero de 2027',
	},
	contact: {
		whatsapp: '5493884555123',
		email: 'eduardo50@example.com',
	},
	gifts: {
		intro: 'Su presencia es el mejor regalo.',
		alias: 'eduardo.cincuenta',
		cbu: '0000003100098765432101',
		holder: 'Familia de Eduardo',
		cbuHint: 'CBU de ejemplo, no operar.',
	},
	venue: {
		name: 'Quincho El Tata',
		address: 'Calle Los Lapachos 1240, Yala, Jujuy',
		maps: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
	},
	event: {
		title: 'El lugar',
		kind: 'Fiesta de cumpleaños',
		time: '21:00',
		place: 'Quincho El Tata',
		detail:
			'Una noche de quincho, mesa larga y luces cálidas. Recepción desde las 21:00; la fiesta sigue hasta que el cuerpo (y la música) aguanten.',
	},
	dressCode: {
		title: 'Dress code',
		name: 'Elegante',
		text: 'Elegante, con espíritu de noche de gala. El azul y el amarillo son bienvenidos: un traje, un pañuelo, un vestido o un detalle dorado.',
		note: 'La camiseta se queda en casa: esta noche se viene de saco.',
		swatches: [
			{ name: 'Noche', hex: '#0A1F4D' },
			{ name: 'Azul rey', hex: '#003087' },
			{ name: 'Oro', hex: '#F9B000' },
			{ name: 'Champagne', hex: '#E8C547' },
			{ name: 'Marfil', hex: '#F4EDDA' },
		],
	},
	music: {
		src: '/events/eduardo50-b0ca/blue-and-gold.mp3',
		filename: 'blue-and-gold.mp3',
		storageKey: 'eduardo50-b0ca-audio',
	},
	story: [
		{
			title: 'La primera vez',
			text: 'Tenía ocho años cuando su viejo lo llevó por primera vez a la cancha. Volvió con la voz ronca, el corazón azul y una promesa: nunca más iba a faltar el domingo.',
		},
		{
			title: 'Domingos de radio y mate',
			text: 'Radio a todo volumen, mate en la mano y toda la familia en el living. Aprendimos a sufrir, a festejar y a abrazarnos fuerte, partido tras partido.',
		},
		{
			title: 'Cincuenta',
			text: 'Medio siglo de pasión, de familia y de amigos que siempre quedan cerca. El 13 de febrero abrimos el quincho para brindar con él, a su manera.',
		},
	],
	timeline: [
		{ time: '21:00', label: 'Recepción', icon: 'ticket' },
		{ time: '22:00', label: 'Brindis', icon: 'glass' },
		{ time: '22:30', label: 'Cena', icon: 'plate' },
		{ time: '00:00', label: 'Baile', icon: 'music' },
		{ time: '04:00', label: 'Cierre', icon: 'moon' },
	],
	practical: [
		{
			title: 'Estacionamiento',
			text: 'Hay lugar dentro del predio. Entran con calma y dejan el auto a metros del quincho.',
		},
		{
			title: 'Si llueve',
			text: 'El quincho tiene techo y costados cerrados. La fiesta sigue igual: mismo lugar, mismo horario.',
		},
		{
			title: 'Fiesta de adultos',
			text: 'Si hay peques en la familia, anótenlos en la confirmación. Si no figuran, es una noche de grandes.',
		},
	],
	gallery: [
		{
			id: 'escudo',
			src: '01-escudo.webp',
			alt: 'Escudo de Boca Juniors sobre fondo azul noche',
		},
		{
			id: 'atardecer',
			src: '02-atardecer.webp',
			alt: 'La Bombonera al atardecer, iluminada, vista aérea',
		},
		{
			id: 'fachada',
			src: '03-fachada.webp',
			alt: 'Fachada curva de La Bombonera en azul y amarillo',
		},
		{
			id: 'entrada',
			src: '04-entrada.webp',
			alt: 'Entrada de La Bombonera con el escudo sobre el acceso',
		},
		{
			id: 'escudo-tribuna',
			src: '05-escudo-tribuna.webp',
			alt: 'Escudo de Boca frente a la tribuna llena de banderas',
		},
	],
	heroAlt:
		'Hinchada en la tribuna ondeando banderas azules y amarillas, con bengala azul',
	menus: ['Asado', 'Vegetariano', 'Sin TACC'] as const,
	storage: {
		audio: 'eduardo50-b0ca-audio',
		rsvp: 'eduardo50-b0ca-rsvp',
	},
} as const;

export type PartyMenu = (typeof party.menus)[number];

export function whatsappHref(text: string) {
	return `https://wa.me/${party.contact.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function mailtoHref(subject: string, body: string) {
	return `mailto:${party.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
