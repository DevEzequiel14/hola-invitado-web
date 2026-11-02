const mapsUrl =
	'https://maps.google.com/?cid=17936997607172484694&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF';

export const party = {
	slug: 'candela30-l4p9',
	brand: 'HolaInvitado',
	locale: 'es-AR',
	kicker: '30 años',
	headline: 'Candela',
	phrase: 'Treinta años de fuego. Una noche para brillar.',
	closing: 'Gracias por venir a celebrarla. Candela, sus amigas y su familia.',
	hashtag: '#Candela30',
	invitedBy: 'Candela, sus amigas y su familia',
	honoree: {
		name: 'Candela',
		firstName: 'Candela',
		monogram: 'C·30',
		short: 'Candela',
	},
	date: {
		iso: '2027-03-30T21:00:00-03:00',
		label: 'Martes 30 de marzo de 2027',
		short: '30 · 03 · 2027',
	},
	rsvp: {
		closesIso: '2027-03-15T23:59:59-03:00',
		closesLabel: '15 de marzo de 2027',
	},
	contact: {
		whatsapp: '5493884849767',
		email: 'candela30@example.com',
	},
	gifts: {
		intro: 'Su presencia es el mejor regalo.',
		alias: 'candela.treinta',
		cbu: '',
		holder: 'Candela',
		cbuHint: 'Alias de muestra, no operar.',
	},
	venue: {
		name: 'Quincho El Tata',
		address: 'Calle Los Lapachos 1240, Yala, Jujuy',
		maps: mapsUrl,
	},
	event: {
		title: 'El lugar',
		kind: 'Fiesta de cumpleaños',
		time: '21:00',
		place: 'Quincho El Tata',
		detail:
			'Una noche de quincho con vibe de pasarela. Recepción desde las 21:00; luces bajas, print en la mesa y baile hasta que diga basta.',
	},
	dressCode: {
		title: 'Dress code',
		name: 'A la moda',
		text: 'Venite a la moda. Negro, print, un flash de oro: lo que te haga sentir espectacular. Animal print más que bienvenido.',
		note: 'No hay uniforme: hay actitud. Si brillás, entrás.',
		swatches: [
			{ name: 'Negro', hex: '#1A120C' },
			{ name: 'Ocre print', hex: '#C9A56A' },
			{ name: 'Taupe', hex: '#6B5340' },
			{ name: 'Oro', hex: '#D4AF37' },
			{ name: 'Champagne', hex: '#F5E6C8' },
		],
	},
	music: {
		src: '/events/candela30-l4p9/runway-night.mp3',
		filename: 'runway-night.mp3',
		storageKey: 'candela30-l4p9-audio',
	},
	story: [
		{
			title: 'La que prende el cuarto',
			text: 'Desde chica Candela entra a un lugar y la energía cambia. No pide permiso: prende la luz, pone la playlist y de pronto todos están bailando.',
		},
		{
			title: 'Amigas de verdad',
			text: 'Las mismas risas, los mismos secretos, las mismas noches eternas. A los 30 las amigas no son decorado: son el equipo.',
		},
		{
			title: 'Treinta',
			text: 'No es un número quieto. Es el momento de celebrar con fuego, print y gente que la quiere. El 30 de marzo el quincho es su pasarela.',
		},
	],
	timeline: [
		{ time: '21:00', label: 'Recepción', icon: 'ticket' },
		{ time: '21:45', label: 'Brindis', icon: 'glass' },
		{ time: '22:30', label: 'Cena', icon: 'plate' },
		{ time: '00:00', label: 'Baile', icon: 'music' },
		{ time: '04:00', label: 'After', icon: 'moon' },
	],
	practical: [
		{
			title: 'Estacionamiento',
			text: 'Hay lugar dentro del predio. Entrá con calma y dejá el auto a metros del quincho.',
		},
		{
			title: 'Si llueve',
			text: 'El quincho tiene techo y costados cerrados. La fiesta sigue igual: mismo lugar, mismo look.',
		},
		{
			title: 'Peques',
			text: 'Si vienen con peques, anótenlos en la confirmación. Si no figuran, asumimos noche de grandes.',
		},
	],
	gallery: [
		{
			id: 'swirl',
			src: '01-swirl.webp',
			alt: 'Tela satén animal print con pliegue en V',
		},
		{
			id: 'rolls',
			src: '02-rolls.webp',
			alt: 'Terciopelo animal print en rollos con luz cálida',
		},
		{
			id: 'flat',
			src: '03-flat.webp',
			alt: 'Print animal plano, close-up del patrón',
		},
		{
			id: 'wave',
			src: '04-wave.webp',
			alt: 'Tela animal print ondulada con brillo suave',
		},
		{
			id: 'satin',
			src: '05-satin.webp',
			alt: 'Satén animal print con pliegues profundos',
		},
	],
	heroAlt: 'Rollos de tela animal print apilados, clima de pasarela',
	menus: ['Asado', 'Vegetariano', 'Sin TACC'] as const,
	storage: {
		audio: 'candela30-l4p9-audio',
		rsvp: 'candela30-l4p9-rsvp',
	},
} as const;

export type PartyMenu = (typeof party.menus)[number];

export function whatsappHref(text: string) {
	return `https://wa.me/${party.contact.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function mailtoHref(subject: string, body: string) {
	return `mailto:${party.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
