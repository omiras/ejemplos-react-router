import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
	return (<div className="text-center mt-5">
			<Link to="/pokemon/1"> {/** /pokemon/1 */}
				<p>Bulbasur</p>
			</Link>
			
			<Link to="/pokemon/4">
				<p>Charmander</p>
			</Link>
	</div>);
};
