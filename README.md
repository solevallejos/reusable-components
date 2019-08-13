# Test a palindrome!
Using the component <b>InputText</b> and <b>Button</b>, we will check wether your string is a palindrome or not. Remember, a <b>palindrome</b> is a word (it can be a number as well) which reads the same backward as forward.

## Installation

To clone and run this application, you'll need Git and Node.js (which comes with npm) installed on your computer. From your command line:

```bash
# Clone the repository
$ git clone git@github.com:solevallejos/reusable-components.git

# Go into the repository
$ cd reusable-components

# Install dependencies
$ npm install

## Available Scripts
In the project directory, you can run:

### npm start
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
```

## Components

### Input text
Input of type text.

|PROPERTY		 |TYPE                           |REQUIRED                      |DEFAULT                      |
|----------------|-------------------------------|-----------------------------|-----------------------------|
|VALUE			|Object            |true            |{}            |
|LABEL          |String            |false            |-            |
|PLACEHOLDER    |String			   |true            |-            |
|ONCHANGE       |Function		   |true            |{}            |


### Button
Input of type text.

|PROPERTY		 |TYPE                           |REQUIRED                      |DEFAULT                      |
|----------------|-------------------------------|-----------------------------|-----------------------------|
|VARIANT          |String            |true            |fill            |
|WORDING    |String			   |true            |-            |
|ONCLICK       |Function		   |true            |{}            |
|DISABLED       |Boolean		   |false            |-            |

## Dependencies

This project uses:
<ul>
	<li><a href="https://reactjs.org/">React.JS</a></li>
	<li><a href="https://www.styled-components.com">Styled-components</a></li>
</ul>