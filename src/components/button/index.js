import React from 'react';
import {
	Button as ButtonItem
} from './styled/button.styled.js';
import PropTypes from 'prop-types';

const Button = ({ wording, disabled, variant, onClick }) =>
	<ButtonItem
		disabled={disabled}
		variant={variant}
		onClick={onClick}
	>
		{wording}
	</ButtonItem>

  Button.propTypes = {
    disabled: PropTypes.bool,
    wording: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired
  }

export default Button;