import React from 'react';
import {
	Response as Message
} from './styled/response.styled.js';
import PropTypes from 'prop-types';

const Response = ({wording}) =>
	<Message>
		{wording}
	</Message>

  Response.propTypes = {
    wording: PropTypes.string.isRequired
  }

export default Response;