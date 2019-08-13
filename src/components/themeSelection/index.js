import React from 'react';
import {
	Container,
	Title,
	Theme
} from './styled/theme.styled.js';

const Themes = ({ setTheme, activeTheme }) =>

	<Container>
		<Title>Wanna change themes?</Title>
		<div>
			<Theme
				themeColor='#fa0775'
				onClick={() => setTheme('spaceTheme')}
				active={activeTheme === 'spaceTheme'}
			/>
			<Theme
				themeColor='#162e5a'
				onClick={() => setTheme('royalTheme')}
				active={activeTheme === 'royalTheme'}
			/>
			<Theme
				themeColor='#30584a'
				onClick={() => setTheme('teaTheme')}
				active={activeTheme === 'teaTheme'}
			/>
			<Theme
				themeColor='#ee7d84'
				onClick={() => setTheme('materialTheme')}
				active={activeTheme === 'materialTheme'}
			/>
		</div>
	</Container>

export default Themes;
