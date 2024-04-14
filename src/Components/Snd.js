import { useState } from 'react';
import React from 'react';
import Navbar from './Navbar';


function Cnr(){
    

    const [userLang, setUserLang] = useState("java");

    // State variable to set editors default theme
    const [userTheme, setUserTheme] = useState("vs-dark");
    
    // State variable to set editors default font size
    const [fontSize, setFontSize] = useState(10);

    return(
        <div className="Appb">
	        <Navbar
                userLang={userLang} setUserLang={setUserLang}
                userTheme={userTheme} setUserTheme={setUserTheme}
                fontSize={fontSize} setFontSize={setFontSize}
            />
        <div className="mainb">
            <div>
                <div className="h1">Shipping and Delivery Policy</div>
                <div className="b1">
                    Shipping is not applicable to business.
                </div>
            </div>
        </div>
        </div>
    );
}
  
  export default Cnr;