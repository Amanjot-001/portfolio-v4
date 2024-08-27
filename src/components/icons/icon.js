import React from 'react';
import PropTypes from 'prop-types';
import {
  IconExternal,
  IconGitHub,
} from './index';

const Icon = ({ name }) => {
  switch (name) {
    case 'External':
      return <IconExternal />;
    case 'GitHub':
      return <IconGitHub />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
