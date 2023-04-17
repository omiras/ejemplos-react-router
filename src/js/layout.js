import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { About } from "./views/about";
import { Pokemon } from "./views/pokemon";

import injectContext from "./store/appContext";

// En React puedes importar los componentes con extensión .js. No hace siquiera falta poner la extensión cuando los importamos
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					{/** Los componentes Navbar y Footer los vamos a ver en cualquier vista  */}

					<Navbar />
					<Routes>
						{/**  Cuando accedas al directorio raiz, renderizame el componente home.js */}
						<Route path="/" element={<Home />} />
						{/**  Cuando accedas a /demo, renderizame el componente demo.js */}
						<Route path="/about" element={<About />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/pokemon/:pokemonId" element={<Pokemon />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
