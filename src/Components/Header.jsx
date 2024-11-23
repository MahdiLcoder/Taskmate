import React from 'react';
import logo from '../assets/logo.jpeg';

export default function Header() {
	const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'white');

	React.useEffect(() => {
		// Remove existing theme classes
		document.body.className = '';
		// Add the selected theme class
		document.body.classList.add(theme);
		// Store the selected theme in localStorage
		localStorage.setItem('theme', theme);
	}, [theme]);

	return (
		<header className="container">
			<section className="logo">
				<img src={logo} alt="Taskmate logo" />
				<div className="title">Taskmate</div>
			</section>
			<section className="theme-switch">
				<div className="circle white" onClick={() => setTheme('white')}></div>
				<div className="circle black" onClick={() => setTheme('black')}></div>
				<div className="circle blue" onClick={() => setTheme('blue')}></div>
				<div className="circle purple" onClick={() => setTheme('purple')}></div>
				<div className="circle pink" onClick={() => setTheme('pink')}></div>
			</section>
		</header>
	);
}