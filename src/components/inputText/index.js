import React from 'react';
import {
	Input,
	Label
} from './styled/input.styled.js';
import PropTypes from 'prop-types';

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

  InputText.propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

export default InputText;