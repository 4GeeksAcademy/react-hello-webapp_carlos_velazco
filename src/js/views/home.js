import React, { useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/Card";
import { Context } from "../store/appContext";

export const Home = () => {
	const { actions, store } = useContext(Context)
	useEffect(() => {
		actions.getCharacters()
		actions.getPlanets()
		actions.getVehicles()
	}, [])

	return (



		<div className="text-center mt-5 d-flex flex-column">

			<h1 className="text-danger" >Characters</h1>


			<ul className="d-flex gap-3 list-group flex-row overflow-auto ">
				{/* (item) => (<Card key={item.uid} id={item.uid} name={item.name}/>) */}
				{store.listCharacters.map((item) => (<li className="list-group" key={item.uid}><Card  id={item.uid} name={item.name} type="people" /></li>))}
			</ul>
			{/* <Card/> */}

			<h1 className="text-danger" >Planets</h1>


			<ul className="d-flex gap-3 list-group flex-row overflow-auto">
				{/* (item) => (<Card key={item.uid} id={item.uid} name={item.name}/>) */}
				{store.listPlanets.map((item) => (<li className="list-group" key={item.uid}><Card  id={item.uid} name={item.name} type="planets" /></li>))}
			</ul>
			{/* <Card/> */}
			
			<h1 className="text-danger" >Vehicles</h1>


			<ul className="d-flex gap-3 list-group flex-row overflow-auto">
				{/* (item) => (<Card key={item.uid} id={item.uid} name={item.name}/>) */}
				{store.listVehicles.map((item) => (<li className="list-group" key={item.uid}><Card  id={item.uid} name={item.name} type="vehicles" /></li>))}
			</ul>
			{/* <Card/> */}






		</div>
	);
}