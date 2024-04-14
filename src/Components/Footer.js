import React from 'react';
import '../Styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer(){
    return (
		<div className="footer">   
      <div className='p-div'>  
        <h4 >ForeverJava.com</h4>
          <div className='icons'>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-google-plus-g"></i>
          <i class="fa-brands fa-linkedin-in"></i>
          </div>
     </div>
          <div class='footer-links'> 
            <Link className= "Link" to="/support">Contact Us</Link> <span className='bar'>|</span>
            <Link className= "Link" to="/Privacy">Privacy Policy</Link> <span className='bar'>|</span>
            <Link className= "Link" to="/Tnc">Terms & Condition</Link> <span className='bar'>|</span>
            <Link className= "Link" to="/Snd">Shipping and Delivery <br /> Policy</Link> <span className='bar'>|</span>
            <Link className= "Link" to="/Cnr">Cancellation and Refund <br /> Policy</Link>
          </div>  
          <p className='copyright'>ForeverJava © 2023 All Rights Reserved</p>
    </div>
	)
}

export default Footer
