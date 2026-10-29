const mapsQuery = encodeURIComponent(
	'Quincho El Tata, Calle Los Lapachos 1240, Yala, Jujuy, Argentina',
);

export const party = {
	slug: 'nicolas60-r1v3',
	brand: 'HolaInvitado',
	locale: 'es-AR',
	kicker: '60 años',
	headline: 'Nicolás',
	phrase: 'Sesenta años de banda, una noche para abrirle la puerta',
	closing: 'Gracias por venir a brindar con él. Su familia.',
	hashtag: '#Nicolas60',
	invitedBy: 'Su familia',
	honoree: {
		name: 'Nicolás',
		firstName: 'Nicolás',
		monogram: 'N·60',
		short: 'Nicolás',
	},
	date: {
		iso: '2027-03-06T21:00:00-03:00',
		label: 'Sábado 6 de marzo de 2027',
		short: '6 · 03 · 2027',
	},
	rsvp: {
		closesIso: '2027-02-20T23:59:59-03:00',
		closesLabel: '20 de febrero de 2027',
	},
	contact: {
		whatsapp: '5493884555123',
		email: 'nicolas60@example.com',
	},
	gifts: {
		intro: 'Su presencia es el mejor regalo.',
		alias: 'nicolas.sesenta',
		cbu: '0000003100098765432102',
		holder: 'Familia de Nicolás',
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
			'Una noche de quincho, mesa larga y banda blanca y roja. Recepción desde las 21:00; la fiesta sigue hasta que el cuerpo (y la música) aguanten.',
	},
	dressCode: {
		title: 'Dress code',
		name: 'Elegante',
		text: 'Elegante, con espíritu de noche especial. El blanco y el rojo son bienvenidos: un traje, un pañuelo, un vestido o un detalle en la solapa.',
		note: 'La camiseta se queda en casa: esta noche se viene de saco.',
		swatches: [
			{ name: 'Noche', hex: '#140A0C' },
			{ name: 'Rojo', hex: '#C8102E' },
			{ name: 'Blanco', hex: '#F5F2ED' },
			{ name: 'Piedra', hex: '#8A8680' },
			{ name: 'Carbón', hex: '#2A2426' },
		],
	},
	music: {
		src: '/events/nicolas60-r1v3/red-and-white.mp3',
		filename: 'red-and-white.mp3',
		storageKey: 'nicolas60-r1v3-audio',
	},
	story: [
		{
			title: 'La primera vez',
			text: 'Tenía nueve años cuando lo llevaron por primera vez a la cancha. Volvió con la voz rota, el pecho en blanco y rojo, y una certeza: el domingo ya no iba a ser igual.',
		},
		{
			title: 'Domingos de radio y mate',
			text: 'Radio a todo volumen, mate en la mano y toda la familia en el living. Aprendimos a sufrir juntos, a festejar juntos y a abrazarnos fuerte, partido tras partido.',
		},
		{
			title: 'Sesenta',
			text: 'Seis décadas de pasión, de familia y de amigos que siempre quedan cerca. El 6 de marzo abrimos el quincho para brindarle la noche que se merece, a su manera.',
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
			alt: 'Escudo estilizado en rojo y blanco, inspirado en la pasión millonaria',
		},
		{
			id: 'cancha',
			src: '02-cancha.webp',
			alt: 'Fachada de estadio de noche con arcos y banderas rojas y blancas',
		},
		{
			id: 'rayas',
			src: '03-rayas.webp',
			alt: 'Tela de camiseta a rayas blancas y rojas',
		},
		{
			id: 'mesa',
			src: '04-mesa.webp',
			alt: 'Mesa de fiesta con camino rojo y blanco y detalles elegantes',
		},
		{
			id: 'tribuna',
			src: '05-tribuna.webp',
			alt: 'Tribuna de estadio de noche, luces y atmósfera de partido',
		},
	],
	heroAlt:
		'Entrada monumental de estadio de noche, arcos de piedra y banderas rojas y blancas',
	menus: ['Asado', 'Vegetariano', 'Sin TACC'] as const,
	storage: {
		audio: 'nicolas60-r1v3-audio',
		rsvp: 'nicolas60-r1v3-rsvp',
	},
} as const;

export type PartyMenu = (typeof party.menus)[number];

export function whatsappHref(text: string) {
	return `https://wa.me/${party.contact.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function mailtoHref(subject: string, body: string) {
	return `mailto:${party.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
