import React from 'react';
import { useEffect, useState } from "react";
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = ({userLang, setUserLang, userTheme,
				setUserTheme, fontSize, setFontSize}) => { 
   
	const [show, setShow] = useState(false);
	const toggleMenu = () => {
		setShow(!show);
	  }; 

	useEffect(() => {
    // if the sidebar nav is open and we resize it will hide automatically.
    const updateShowState = () => {
      if (window.innerWidth > 640) {
        setShow(false); 
      }
    };

    // Initial update
    updateShowState();

    // Listen for window resize events and update 'show' state
    window.addEventListener('resize', updateShowState);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateShowState);
    };
  }, [show]);
	// useEffect(() => {
    // 	const rzpPaymentForm = document.getElementById("rzp_payment_form");
    // 	if (!rzpPaymentForm.hasChildNodes()) {
    //  	 const script = document.createElement("script");
    //  	 script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    //  	 script.async = true;
    //  	 script.dataset.payment_button_id = "pl_LqFM2KBAdrQYd7";
    //  	 rzpPaymentForm.appendChild(script);
   	//  }
 	//  });
	return (
		<div className="navbar">
			<div className='logo'>
				<img src="logo192.png" alt="logo" />
			 <h1>ForeverJava</h1>
			</div> 
			<ul className='nav-links'>
			    <li><Link className="Link" to="/">Compiler</Link></li>
				<li><Link className="Link" to="/">Home</Link></li>
				<li><Link className="Link" to="/support">Contact Us</Link></li>
				<li><Link className="Link" to="/Privacy">Privacy Policy</Link></li>
			</ul> 
			<div className='sign-up'>Signup/Log in &rarr; </div>
			{!show ? <i className='fa-solid fa-bars toggle' onClick={toggleMenu}></i> :
<i className='fa-solid fa-x toggle' onClick={toggleMenu}></i>}
			{show && <div className='side-bar'>
				<ul className='nav-links'>
					<li><Link className="Link" to="/">Compiler</Link></li>
					<li><Link className="Link" to="/">Home</Link></li>
					<li><Link className="Link" to="/support">Contact Us</Link></li>
					<li><Link className="Link" to="/Privacy">Privacy Policy</Link></li>
				</ul> 
				<div className='sign-up'>Signup/Log in &rarr; </div>
			</div>}
		</div>
	)
}

export default Navbar
