// export default App;
import { useState } from 'react';
import React from 'react';
import './App.css';
import Editor from "@monaco-editor/react";
import Navbar from './Components/Navbar';
import Axios from 'axios';
import Footer from './Components/Footer';
import {useRef} from 'react';
//import spinner from './spinner.svg';

function App() {

// State variable to set users source code
const [userCode, setUserCode] = useState(``);

// State variable to set editors default language
const [userLang, setUserLang] = useState("java");

// State variable to set editors default theme
const [userTheme, setUserTheme] = useState("vs-dark");

// State variable to set editors default font size
const [fontSize, setFontSize] = useState(17);

const [fontSizef, setFontSizef] = useState(10);

// State variable to set users input
const [userInput, setUserInput] = useState("");

// State variable to set users output
const [userOutput, setUserOutput] = useState("");

// Loading state variable to show spinner
// while fetching data
const [loading, setLoading] = useState(false);

const options = {
	fontSize: fontSize
}

const ref = useRef(null);

// Function to call the compile endpoint
function compile() {
	if (userCode === ``) {
		return
		}
	ref.current?.scrollIntoView({behavior: 'smooth'});
	setUserOutput("Loading \nRequesting to APIs . . . .");
	setLoading(false);

  var code = userCode;
  var input = userInput;
	// Post request to compile endpoint
	//http://97.74.80.156:9010/java
	//http://54.169.150.188:9010/java
	//https://54.255.84.68:9010/java
	//https://www.foreverjava.com:9010/java
	//http://54.255.84.68:9010/java
	//https://foreverjava.com:9010/java
	//https://apis.foreverjava.com/home/javaa
	Axios.post('https://apis.foreverjava.com/send/req', {
	code,input
}).then((res) => {
	setUserOutput(res.data);
	}).then(() => {
	setLoading(false);
	})
}

// Function to clear the output screen
function clearOutput() {
	setUserOutput("");
}

return (
	<div className="App">
	<Navbar
		userLang={userLang} setUserLang={setUserLang}
		userTheme={userTheme} setUserTheme={setUserTheme}
		fontSize={fontSize} setFontSize={setFontSize}
	/>
	<div className="main">
		<div className="top-container"> 
		   <div className='buttons'> 
			<button className='theme-change btn'>
				<span class="material-symbols-outlined light-mode">
   					light_mode
			    </span> 
			</button>
			<button className='settings btn'><i class="fa-solid fa-gear"></i></button>
			
			<select class="language-select btn"
					name="language" 
					id="language">
				<option value="java">Java</option>
				<option value="cpp">C++</option>
				<option value="python">Python</option>
			</select>
			
			<button className="run-btn btn" onClick={() => compile()}>
			<i class="fa-solid fa-circle-play"></i>
				Compile
			</button>
		</div> 
		<div className='editor-container'>
		<Editor
			options={options}
			theme={userTheme}
			language={userLang}
			defaultLanguage="java"
			defaultValue="// Enter your code here"
			onChange={(value) => { setUserCode(value) }}
		/> 
		<div className='extend-editor'>
			<span class="material-symbols-outlined">
			open_in_full
			</span>
		</div>
		</div>
		
		</div>
			<textarea  className="input-box"
			placeholder= 'Enter input to program here'
			id="code-inp" 
			onChange= {(e) => setUserInput(e.target.value)}>
			</textarea>
		{loading ? (
			<div className="spinner-box">
			</div>
		) : (
			<div ref={ref} className="output-box"> 
			<div className='title'>Output</div>
			<pre>{userOutput}</pre>
			{/* <button onClick={() => { clearOutput() }}
				className="clear-btn">
				Clear
			</button> */}
			</div>
		)}
        <div className='extra'> 
			<ul>
				<li>We are proud to announce that we are registered under the Udyam Registration scheme, implemented by the Government of India.</li>
				<li>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimli</li>
				<li>veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
			</ul>
		
	</div>
	</div>
	{/* <div class="fbar">
		<h1>fotter texts</h1>
	</div> */} 
	
	<Footer
		userTheme={userTheme} setUserTheme={setUserTheme}
		fontSize={fontSizef} setFontSize={setFontSizef}
	/>
	</div>
);
}

export default App;
