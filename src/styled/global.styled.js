import styled from 'styled-components';

export const H1 = styled.h1`
	margin-bottom: 1.5rem;
	margin-top: 0;
	${props => props.theme.text.h1};
`;

export const H2 = styled.h2`
	margin-bottom: 0.8rem;
	${props => props.theme.text.h2};
`;

export const H3 = styled.h3`
	margin-bottom: 1rem;
	${props => props.theme.text.h3};
`;

export const Block = styled.span`
	padding: 1rem 0;
	display: block;
`;

export const Description = styled.div`
	line-height: 1.6;
	margin-bottom: 1.5rem;

	p {
		margin-top: 0;
		margin-bottom: 0;
		${props => props.theme.text.description};
		
		&:last-child {
			margin-top: auto;
			margin-bottom: auto;
		}
	}
`;

export const Wrapper = styled.div`
	${props => props.theme.wrapper};
	height: 100vh;
	display: flex;

	@media only screen and (max-width: 600px) {
  	background-image: none;
  	display: block;
	}
`;

export const Container = styled.div`
	max-width: 600px;
	padding: 2rem;
	margin: 0 auto;
	${props => props.theme.container};
	align-self: center;

	@media only screen and (max-width: 600px) {
  	border: 0;
  	box-shadow: none;
  	background-image: none;
	}
`;

export const Highlighter = styled.span`
	position: relative;
	font-weight: 700;

	&::after {
		top: 50%;
		right: 0;
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: -1;
		content: '';
    ${props => props.theme.text.highlight};
    display: inline-block;

		@media only screen and (max-width: 600px) {
			display: none;
		}
	}
`;
