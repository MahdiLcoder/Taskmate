import React from 'react';
import logo from '../assets/logo.jpeg';

export default function Header() {
	return (
		<header className="container">
			<section className="logo">
				<img src={logo} alt="Taskmate logo" />
				<div className="title">Taskmate</div>
			</section>
			<section className="theme-switch">
				<div className="circle white"></div>
				<div className="circle black"></div>
				<div className="circle blue"></div>
				<div className="circle purple"></div>
				<div className="circle pink"></div>
			</section>
		</header>
	);
}
