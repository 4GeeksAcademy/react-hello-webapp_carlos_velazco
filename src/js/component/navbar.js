import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const Navbar = () => {

	const { actions, store } = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3  ">
			<div className="d-flex justify-content-around flex-row w-100">
				<Link to="/">
					<img className="col-xl-2 col-lg-2 col-md-4 col-6 ms-3 " src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png" />

				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
							favorites
						</button>
						<ul className="dropdown-menu d-flex justify-content-between flex-column">
							{store.listFavorites.map((item, index) => (<li className="ms-3" key={index}>{item} <i onClick={(e) => { actions.deleteFavoritos(item) }} className="fa fa-trash"></i> </li>))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
