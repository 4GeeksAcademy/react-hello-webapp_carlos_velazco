import React, { useContext, useParams } from "react";
import { Link, } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Card = (props) => {


    let renderPictures

    if (props.type === "people") {
        renderPictures = (
            <>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${props.id}.jpg`} />
            </>
        )
    }
    else if (props.type === "planets") {

        renderPictures = (
            <>
                <img src={`https://starwars-visualguide.com/assets/img/planets/${props.id}.jpg`} />
            </>)

    }
    else if (props.type === "vehicles") {
        renderPictures = (
            <>
                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${props.id}.jpg`} />

            </>
        );
    }


    const { actions, store } = useContext(Context)

    return (

        <div className="text-center mt-5">
            <div className="card" style={{ width: "18rem" }}>
                {renderPictures}
                <div className="card-body  ">
                    <h5 className="card-title">{props.name}</h5>
                    <div className="d-flex justify-content-around" >

                        <a href={`/${props.type}/` + props.id} className="btn btn-primary">Read More</a>
                        <button type="button" className={store.listFavorites.includes(props.name) ? `btn btn-danger` : 'btn'} data-bs-toggle="button" onClick={(e) => actions.addFavorites(props.name)} ><i className=" fa fa-regular fa-heart"></i></button>
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



