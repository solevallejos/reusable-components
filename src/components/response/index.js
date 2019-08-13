import React from 'react';
import {
	Response as Message
} from './styled/response.styled.js';

const Response = ({wording}) =>
	<Message>
		{wording}
	</Message>

export default Response;