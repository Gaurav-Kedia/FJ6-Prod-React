import { useState } from 'react';
import React from 'react';
import Navbar from './Navbar';
import "../Styles/Tnc.css";


function Privacy(){
    

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
                <div className="h1">Privacy Policy</div>
                <div className="b1">
                    This privacy policy sets out how Forever Java uses and protects any information 
                    that you give Forever Java when you use this website.
                    
                    Forever Java is committed to ensuring that your privacy is protected. 
                    Should we ask you to provide certain information by which you can be identified when 
                    using this website, and then you can be assured that it will only be used in accordance 
                    with this privacy statement. 
                    <br /> <br />
                    Forever Java may change this policy from time to time by updating this page. 
                    You should check this page from time to time to ensure that you are happy with any changes.
                    
                    We may collect the following information:
                    
                        Name and job title
                        Contact information including email address
                        Demographic information such as postcode, preferences and interests
                    
                    Other information relevant to customer surveys and/or offers
                    What we do with the information we gather
                    We require this information to understand your needs and 
                    provide you with a better service, and in particular for the following reasons:
                    Internal record keeping.
                    We may use the information to improve our products and services.
                    
                    We may periodically send promotional emails about new products, 
                    special offers or other information which we think you may find interesting
                    using the email address which you have provided.
                    <br /> <br />
                    From time to time, we may also use your information to contact you 
                    for market research purposes. We may contact you by email, phone, fax or mail.
                    We may use the information to customise the website according to your interests.
                    <br /> <br />
                    We are committed to ensuring that your information is secure.
                    In order to prevent unauthorised access or disclosure we have put in suitable measures.
                    
                    How we use cookies
                    A cookie is a small file which asks permission to be placed on your computer's hard drive.
                    Once you agree, the file is added and the cookie helps analyses web traffic or
                    lets you know when you visit a particular site. Cookies allow web applications
                    to respond to you as an individual.
                    <br /> <br />
                    The web application can tailor its operations
                    to your needs, likes and dislikes by gathering and remembering information about your preferences.
                    
                    We use traffic log cookies to identify which pages are being used.
                    This helps us analyses data about webpage traffic and improve our
                    website in order to tailor it to customer needs.
                    We only use this information for statistical analysis purposes
                    and then the data is removed from the system.
                    <br /> <br />
                    Overall, cookies help us provide you with a better website,
                    by enabling us to monitor which pages you find useful and which you do not.
                    A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.
                    
                    You can choose to accept or decline cookies.
                    Most web browsers automatically accept cookies,
                    but you can usually modify your browser setting to decline cookies if you prefer.
                    This may prevent you from taking full advantage of the website.
                    <br /> <br />
                    Controlling your personal information
                    You may choose to restrict the collection or use of your personal information
                    in the following ways:
                    whenever you are asked to fill in a form on the website,
                    look for the box that you can click to indicate that you do not want
                    the information to be used by anybody for direct marketing purposes
                    if you have previously agreed to us using your personal information
                    for direct marketing purposes,
                    you may change your mind at any time by writing to or emailing us at <b>Gaurav@foreverjava.com</b>  
                      We will not sell, distribute or lease your personal information
                    to third parties unless we have your permission or are required by law to do so.
                    We may use your personal information to send you promotional information
                    about third parties which we think you may find interesting if you tell us that you wish this to happen.
                    If you believe that any information we are holding on you is incorrect or incomplete,
                    please write to or email us as soon as possible, at the above address.
                    We will promptly correct any information found to be incorrect.
                </div>
            </div>
        </div>
        </div>
    );
}
  
  export default Privacy;