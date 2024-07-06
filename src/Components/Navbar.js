import React from 'react';
import { useEffect, useState } from "react";
import '../Styles/Navbar.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CodeHistory } from './CodeHistory/CodeHistory';


const Navbar = ({ userLang, setUserLang, userTheme,
	setUserTheme, fontSize, setFontSize }) => {

	const [show, setShow] = useState(false);
	const navigate = useNavigate();
	const { id } = useParams();
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
	//  	 rzpPaymentForm.appendChild(script);x
	//  }
	//  });

	const [showCodeHistoryModal, setShowCodeHistoryModal] = useState(false);

	const renderShowCodeHistoryModal = () => {
		if (showCodeHistoryModal) {
			return (
				<CodeHistory
					closeModal={() => setShowCodeHistoryModal(false)}
				/>
			)
		}
	}


	return (
		<div className="navbar d0f">
			<div className='logo'>
				<img src="logo192.png" alt="logo" />
				<h1>ForeverJava</h1>
			</div>
			<ul className='nav-links'>
				<li><Link className="Link" to="/">Compiler</Link></li>
				<li
					onClick={() => {
						if(id){
							let url = "/:id"
							navigate(url.replace(":id" , id))
						}
						setShowCodeHistoryModal(true);
					}}
					className=' Link'
				>
					<Link className="Link" to="/">
						Code History
					</Link>
				</li>
			</ul>
			<div className='sign-up'>Signup/Log in &rarr; </div>
			{!show ? <i className='fa-solid fa-bars toggle' onClick={toggleMenu}></i> :
				<i className='fa-solid fa-x toggle' onClick={toggleMenu}></i>}
			{show && <div className='side-bar'>
				<ul className='nav-links mb-0'>
					<li><Link className="Link" to="/">Compiler</Link></li>
					<li
					onClick={() => {
						if(id){
							let url = "/:id"
							navigate(url.replace(":id" , id))
						}	
						setShowCodeHistoryModal(true);
					}}
					className=' Link'
				>
					<Link className="Link" to="/">
						Code History
					</Link>
				</li>
					{/* <li><Link className="Link" to="/">Code History</Link></li> */}
				</ul>
				<div className='sign-up'>Signup/Log in &rarr; </div>
			</div>}
			{renderShowCodeHistoryModal()}
		</div>
	)
}

export default Navbar
