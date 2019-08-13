import React from 'react';
import {
	Input,
	Label
} from './styled/input.styled.js';

const InputText = ({ value, label, placeholder, onChange }) =>
	<React.Fragment>
  	<Label>{label}</Label>
    <Input
    	value={value}
    	onChange={(e) => onChange(e.target.value)}
	    type='text'
	    placeholder={placeholder}
    />
  </React.Fragment>

export default InputText;