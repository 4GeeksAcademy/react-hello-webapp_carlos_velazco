import React, { useContext, useParams } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Card = (props) => {



    const renderPictures = () => {
        switch (props.type) {
            case "people":
                return (
                    <>
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${props.id}.jpg`} />
                    </>
                );
            case "planets":

                return props.id == 1 ? <img src={`https://th.bing.com/th/id/OIP.59248ZqjjnvpoRuRAG1yywHaFj?w=206&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7`} /> : <img src={`https://starwars-visualguide.com/assets/img/planets/${props.id}.jpg`} />


            case "vehicles":
                return (
                    <>
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${props.id}.jpg`} />

                    </>
                );
            default:
                return null;
        }
    };

    const { actions, store } = useContext(Context)

    return (

        <div className="text-center mt-5">
            <div className="card" style={{ width: "18rem" }}>
                {renderPictures()}
                <div className="card-body  ">
                    <h5 className="card-title">{props.name}</h5>
                    <div className="d-flex justify-content-around" >

                        <a href={`/${props.type}/` + props.id} className="btn btn-primary">Read More</a>
                        <button type="button" className="btn" data-bs-toggle="button" onClick={(e) => actions.addFavorites(props.name)} ><i class=" fa fa-regular fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    key: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string
}



