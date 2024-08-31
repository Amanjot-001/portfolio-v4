import React from 'react';
import PropTypes from 'prop-types';
import {
	IconExternal,
	IconGitHub,
	IconHome,
	IconTwitter,
	IconLinkedin,
	IconLeetcode,
	IconCodeforces
} from './index';

const Icon = ({ name }) => {
	switch (name) {
		case 'External':
			return <IconExternal />;
		case 'GitHub':
			return <IconGitHub />;
		case 'Home':
			return <IconHome />;
		case 'Twitter':
			return <IconTwitter />;
		case 'LinkedIn':
			return <IconLinkedin />;
		case 'Leetcode':
			return <IconLeetcode />;
		case 'Codeforces':
			return <IconCodeforces />;
		default:
			return <IconExternal />;
	}
};

Icon.propTypes = {
	name: PropTypes.string.isRequired,
};

export default Icon;
