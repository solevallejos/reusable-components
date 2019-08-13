import React, { useState } from 'react';
import {
  Container,
  Wrapper
} from './styled/global.styled.js'
import Palindrome from './example/palindrome/index.js';
import Themes from './components/themeSelection/index.js';
//	themes
import spaceTheme from './components/themeSelection/themes/space/space.json'
import royalTheme from './components/themeSelection/themes/royal/royal.json'
import teaTheme from './components/themeSelection/themes/tea/tea.json'
import materialTheme from './components/themeSelection/themes/material/material.json'
//	Theme Provider
import { ThemeProvider } from 'styled-components';

const themes = {
  spaceTheme,
  royalTheme,
  teaTheme,
  materialTheme,
}

function App() {

	const [theme, setTheme] = useState('spaceTheme');

  return (
		<ThemeProvider theme={themes[theme]}>
			<Wrapper>
				<Themes
					setTheme={t => setTheme(t)}
					activeTheme={theme}
				/>
				<Container>
					<Palindrome />
				</Container>
			</Wrapper>
		</ThemeProvider>
  );
}

export default App;