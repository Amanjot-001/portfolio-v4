interface NavLink {
	name: string;
	url: string;
}

interface SrConfig {
	origin: string;
	distance: string;
	duration: number;
	delay: number;
	rotate: { x: number; y: number; z: number };
	opacity: number;
	scale: number;
	easing: string;
	mobile: boolean;
	reset: boolean;
	useDelay: string;
	viewFactor: number;
	viewOffset: { top: number; right: number; bottom: number; left: number };
}

interface Config {
	email: string;
	navLinks: NavLink[];
	colors: {
		green: string;
		navy: string;
		darkNavy: string;
	};
	srConfig: (delay?: number, viewFactor?: number) => SrConfig;
}

const config: Config = {
	email: 'amanjotsingh2309@gmail.com',

	navLinks: [
		{
			name: 'About',
			url: '/#about',
		},
		{
			name: 'Experience',
			url: '/#jobs',
		},
		{
			name: 'Work',
			url: '/#projects',
		},
		{
			name: 'Contact',
			url: '/#contact',
		},
	],

	colors: {
		green: '#64ffda',
		navy: '#0a192f',
		darkNavy: '#020c1b',
	},

	srConfig: (delay = 200, viewFactor = 0.25) => ({
		origin: 'bottom',
		distance: '20px',
		duration: 500,
		delay,
		rotate: { x: 0, y: 0, z: 0 },
		opacity: 0,
		scale: 1,
		easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
		mobile: true,
		reset: false,
		useDelay: 'always',
		viewFactor,
		viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
	}),
};

export default config;