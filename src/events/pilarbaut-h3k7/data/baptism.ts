const churchMaps = encodeURIComponent(
	'Iglesia de Río Blanco, Palpalá, Jujuy, Argentina',
);
const quinchoMaps = encodeURIComponent(
	'Quincho El Tata, Calle Los Lapachos 1240, Yala, Jujuy, Argentina',
);

export const baptism = {
	slug: 'pilarbaut-h3k7',
	brand: 'HolaInvitado',
	locale: 'es-AR',
	kicker: 'Mi bautismo',
	headline: 'Pilar',
	phrase: 'Con la bendición de Dios y el amor de nuestra familia',
	closing: 'Los esperamos con fe y alegría. María, Alberto y Pilar',
	hashtag: '#PilarBautismo2027',
	honoree: {
		name: 'Pilar Fernández',
		firstName: 'Pilar',
		short: 'Pilar',
	},
	hosts: {
		parents: ['María', 'Alberto'],
		parentsLine: 'María y Alberto',
		godparents: ['Fernanda', 'César'],
		godparentsLine: 'Fernanda y César',
		inviteLine: 'María y Alberto, junto a los padrinos Fernanda y César, los invitan',
	},
	date: {
		iso: '2027-05-15T09:00:00-03:00',
		label: 'Sábado 15 de mayo de 2027',
		short: '15 · 05 · 2027',
	},
	rsvp: {
		closesIso: '2027-05-01T23:59:59-03:00',
		closesLabel: '1 de mayo de 2027',
	},
	contact: {
		whatsapp: '5493884555123',
		email: 'pilar.bautismo@example.com',
	},
	gifts: {
		intro: 'Su presencia es el regalo.',
		alias: '',
		cbu: '',
		holder: '',
		cbuHint: '',
	},
	ceremony: {
		title: 'Ceremonia',
		kind: 'Misa de bautismo',
		time: '09:00',
		place: 'Iglesia de Río Blanco',
		address: 'Río Blanco, Palpalá, Jujuy',
		maps: `https://www.google.com/maps/search/?api=1&query=${churchMaps}`,
		detail:
			'Nos encontramos en la Iglesia de Río Blanco para recibir la bendición. Lleguen con tiempo: hay un rato para abrazarse antes de la misa.',
	},
	reception: {
		title: 'Celebración',
		time: '12:00',
		place: 'Quincho El Tata',
		address: 'Calle Los Lapachos 1240, Yala, Jujuy',
		maps: `https://www.google.com/maps/search/?api=1&query=${quinchoMaps}`,
		summary: '12:00 · Quincho El Tata',
		detail:
			'Después de la misa pasamos al quincho. Mesa larga, brindis y la torta con la familia y los amigos.',
	},
	dressCode: {
		title: 'Dress code',
		name: 'Formal',
		text: 'Formal, en tonos claros. Blanco, amarillo suave, champagne y dorado acompañan el día.',
		note: 'El quincho tiene techo; igual conviene un abrigo liviano por la tarde.',
		swatches: [
			{ name: 'Ivory', hex: '#FFFEF8' },
			{ name: 'Amarillo', hex: '#F5E6A3' },
			{ name: 'Oro', hex: '#C9A227' },
			{ name: 'Champán', hex: '#C9B8A0' },
			{ name: 'Sage', hex: '#9CAF88' },
		],
	},
	music: {
		src: '/events/pilarbaut-h3k7/blessing.mp3',
		filename: 'blessing.mp3',
		storageKey: 'pilarbaut-h3k7-audio',
	},
	story: [
		{
			title: 'La familia',
			text: 'María y Alberto dan gracias por Pilar. Con Fernanda y César como padrinos, abren este día para compartir la fe y el cariño.',
		},
		{
			title: 'La bendición',
			text: 'En la Iglesia de Río Blanco pedimos la bendición de Dios. Un momento quieto, con el corazón abierto.',
		},
		{
			title: 'La mesa',
			text: 'Al mediodía el Quincho El Tata se llena de abrazos, brindis y la alegría de estar juntos.',
		},
	],
	timeline: [
		{ time: '09:00', label: 'Misa', icon: 'rings' },
		{ time: '12:00', label: 'Brindis', icon: 'glass' },
		{ time: '13:30', label: 'Torta', icon: 'plate' },
		{ time: '16:00', label: 'Cierre', icon: 'moon' },
	],
	practical: [
		{
			title: 'Estacionamiento',
			text: 'En el quincho hay lugar dentro del predio. Entrá con calma y dejá el auto cerca.',
		},
		{
			title: 'Si llueve',
			text: 'El quincho tiene techo y costados cerrados. La celebración sigue igual.',
		},
		{
			title: 'De la iglesia al quincho',
			text: 'Son lugares distintos: misa en Río Blanco (Palpalá) y después el Quincho El Tata en Yala.',
		},
	],
	gallery: [
		{
			id: 'flores',
			src: '01-flores.webp',
			alt: 'Ramo ilustrativo de flores blancas y amarillas, muestra',
		},
		{
			id: 'cruz',
			src: '02-cruz.webp',
			alt: 'Detalle ilustrativo de cruz suave y cinta champagne, muestra',
		},
		{
			id: 'paloma',
			src: '03-paloma.webp',
			alt: 'Ilustración suave de paloma sobre fondo ivory, muestra',
		},
		{
			id: 'mesa',
			src: '04-mesa.webp',
			alt: 'Mesa de celebración ilustrativa con lino y flores, muestra',
		},
		{
			id: 'quincho',
			src: '05-quincho.webp',
			alt: 'Quincho iluminado de día, muestra ilustrativa',
		},
	],
	heroAlt:
		'Sobre crema sellado con lacre dorado sobre lino, vela y encaje, muestra ilustrativa del bautismo de Pilar',
	menus: ['Menú completo', 'Vegetariano', 'Sin TACC'] as const,
	storage: {
		audio: 'pilarbaut-h3k7-audio',
		rsvp: 'pilarbaut-h3k7-rsvp',
	},
	stillLife: '/events/pilarbaut-h3k7/still-life.webp',
} as const;

export type BaptismMenu = (typeof baptism.menus)[number];

export function whatsappHref(text: string) {
	return `https://wa.me/${baptism.contact.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function mailtoHref(subject: string, body: string) {
	return `mailto:${baptism.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
