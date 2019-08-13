import styled from 'styled-components'

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export const Button = styled.button`
	${props => props.theme.button};
	padding: 1rem 4rem;
	pointer-events: ${props=> props.disabled ? 'not-allowed' : 'pointer'};
	opacity: ${props=> props.disabled ? '0.6' : '1'};
	cursor: ${props=> props.disabled ? 'not-allowed' : 'pointer'};
	margin-top: 1rem;
	transition: all .2s ease-in-out;

	${props=> props.variant === 'fill' ?
		props.theme.button.fill.normal : props.theme.button.clear.normal
	};

	&:hover {
		${props=> props.variant === 'fill' ?
			props.theme.button.fill.hover : props.theme.button.clear.hover
		};
	}

	&:focus {
		outline: none;
	}

	@media only screen and (max-width: 600px) {
  	width: 100%;
	}
`;
