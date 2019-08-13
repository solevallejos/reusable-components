import React from 'react';
import {
	Button as ButtonItem
} from './styled/button.styled.js';

const Button = ({ wording, disabledButton, variant, onClick }) =>
	<ButtonItem
		disabled={disabledButton}
		variant={variant}
		onClick={onClick}
	>
		{wording}
	</ButtonItem>

export default Button;