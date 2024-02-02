import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/home.css";


export const Description = () => {
  const { actions, store } = useContext(Context);
  let { type, theid } = useParams();

  useEffect(() => {
    actions.getInformation(type, theid);
  }, [actions, type, theid]);

  const renderAttributes = () => {
    switch (type) {
      case "people":
        return (
          <>
            <li>Hair color: {store.infoCharacter?.properties?.hair_color}</li>
            <li>gender: {store.infoCharacter?.properties?.gender}</li>
            <li>Eye color: {store.infoCharacter?.properties?.eye_color}</li>
          </>
        );
      case "planets":
        return (
          <>
            <li>Diameter: {store.infoCharacter?.properties?.diameter}</li>
            <li>Terrain: {store.infoCharacter?.properties?.population}</li>
            <li>Terrain: {store.infoCharacter?.properties?.climate}</li>
          </>
        );
      case "vehicles":
        return (
          <>
            <li>Model: {store.infoCharacter?.properties?.model}</li>
            <li>Manufacturer: {store.infoCharacter?.properties?.manufacturer}</li>
            <li>Manufacturer: {store.infoCharacter?.properties?.length}</li>

          </>
        );
      default:
        return null;
    }
  };


  return (


    <div className="card mb-3" style={{ maxwidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title">{store.infoCharacter?.properties?.name}</h2>
            <p className="card-text">{store.infoCharacter?.description}</p>
            <ul>
              {renderAttributes()}
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
};