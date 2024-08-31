import React from 'react';

const IconHome = () => (
	<svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
		<title>Home Logo</title>
		<g transform="translate(-8.000000, -2.000000)">
			<g transform="translate(11.000000, 5.000000)">
				{/* Hexagon container */}
				<polygon
					id="Shape"
					stroke="currentColor"
					strokeWidth="5"
					strokeLinecap="round"
					strokeLinejoin="round"
					points="39 0 0 22 0 67 39 90 78 68 78 23"
				/>
				{/* Scaled and translated Home logo inside the hexagon */}
				<g transform="scale(0.020) translate(350, 450)">
					<path
						d="M1600,259.375l-71.875,68.75l-1300,1300l143.75,143.75l128.125,-128.125v1156.25h900v-1000h400v1000h900v-1156.25l128.125,128.125l143.75,-143.75l-1300,-1300zM1600,543.75l900,900v1156.25h-500v-1000h-800v1000h-500v-1156.25z"
						fill="currentColor"
					/>
				</g>
			</g>
		</g>
	</svg>
);

export default IconHome;
