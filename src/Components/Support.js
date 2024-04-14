import { useState } from 'react';
import React from 'react';
import Navbar from './Navbar';
import "../Styles/Tnc.css";


function Support(){
    

    const [userLang, setUserLang] = useState("java");

    // State variable to set editors default theme
    const [userTheme, setUserTheme] = useState("vs-dark");
    
    // State variable to set editors default font size
    const [fontSize, setFontSize] = useState(20);

    return(
        <div className="Appb">
	        <Navbar
                userLang={userLang} setUserLang={setUserLang}
                userTheme={userTheme} setUserTheme={setUserTheme}
                fontSize={fontSize} setFontSize={setFontSize}
            />
        <div className="mainb">
            <div>
                <div className="h1">Contact Us :</div>
                <div className="b1">
                    For any issues please contact <br/>
                    Company Name: Forever Java <br/>
                    Phone: 9078162515 <br/>
                    Email: Gaurav@foreverjava.com <br/>
		    Address: Basanti Colony, Rourkela, Odisha <br/>
		    Pincode: 769012
                </div>
            </div>
        </div>
        </div>
    );
}
  
  export default Support;
