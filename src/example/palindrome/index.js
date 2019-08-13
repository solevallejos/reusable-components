import React, { useState } from 'react';
import Button from '../../components/button/index.js';
import { ButtonContainer } from '../../components/button/styled/button.styled.js';
import InputText from '../../components/inputText/index.js';
import Response from '../../components/response/index.js';
import {
	H1,
  H2,
  Description,
  Highlighter
} from '../../styled/global.styled.js';
import MESSAGES from '../../components/response/messages/index.js';

const Palindrome = props => {

  const [palindrome, setPalindrome] = useState('');
 	const [response, setResponse] = useState('');

	/**
	* Checks wheter the entered string is a palindrome or not.
	*/
  const checkPalindrome = () => {

  	let auxPalindrome = palindrome.toLowerCase().trim().replace(/\s/g, '');;
  	let reversePalindrome = auxPalindrome.split("").reverse("").join("");

  	let res = auxPalindrome === reversePalindrome ? MESSAGES.CORRECT : MESSAGES.WRONG
  	
  	setResponse(res);
	}

	/**
	* Clear the content of the input and the response object.
	*/
  const clear = () => {
  	setPalindrome('');
  	setResponse('');
  }

  return (
  	<React.Fragment>
			<H1><Highlighter>Input Text && Buttons</Highlighter></H1>
      <H2>Example: Palindrome!</H2>
      <Description>
        <p>Let's write a <b>palindrome</b> and check if it's correct!.</p>
        <p>Here's an example: <Highlighter>Mr Owl Ate My Metal Worm</Highlighter></p> 
        <p>Remember, a <b>palindrome</b> is a word (it can be a number aswell) which reads the same backward as forward.</p>
      </Description>
      <InputText
        label='Write something'
        placeholder="Let's write a palindrome!"
        onChange={setPalindrome}
        value={palindrome}
      />
      {response && (
    		<Response wording={response}/>
    	)}
	    <ButtonContainer>
		    <Button
		    	onClick={checkPalindrome}
		    	wording='Check!'
		    	variant='fill'
		    	disabled={!palindrome}
		    >
		    </Button>
				<Button
					onClick={clear}
					wording='Clear'
					variant='clear'
				>
				</Button>
			</ButtonContainer>
    </React.Fragment>
  );
};

export default Palindrome;
