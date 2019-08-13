import styled from 'styled-components'

export const Input = styled.input`
	padding: 1rem;
	width: 100%;
	box-sizing: border-box;
	${props => props.theme.input.input};
	transition: all .2s ease-in-out;

	&:focus {
		outline: none;
		${props => props.theme.input.input.focus};
	}
`;

export const Label = styled.label`
	${props => props.theme.input.label};
	display: block;
	margin-bottom: 0.5rem;
`;
