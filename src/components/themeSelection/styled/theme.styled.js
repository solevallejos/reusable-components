import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 2rem;
	left: 2rem;
	font-weight: bold;

	div {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}	

	@media only screen and (max-width: 600px) {
    position: relative;
    top: auto;
    left: auto;
    padding: 2rem;
    text-align: center;
    width: 85%;
    margin: 0 auto;
    ${props => props.theme.theme};
    box-sizing: border-box;
	}
`;

export const Theme = styled.button`
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	background-color: ${props => props.themeColor};
	margin-top: 1rem;
	border: 2px solid #fff;
	cursor: pointer;
	opacity: ${props => props.active ? '1' : '0.4'};
`;

export const Title = styled.span`
	${props => props.theme.text.description};
	text-transform: uppercase;
`;