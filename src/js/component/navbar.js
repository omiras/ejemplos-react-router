import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			{/** las <a> quedan relegadas para acceder a páginas externas a nuestra app */}
			<a href="https://www.google.es">a Google</a>
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<Link to="/about">
				<span className="navbar-brand mb-0 h1">About Us</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
