import React from "react";
import "./Card.css"

const Card = props =>{
    return(
        <div className="Card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="Image1" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                    Teste para Card
                </p>
                <a href="#" className="btn btn-outline-success" >Go aa</a>

            </div>

        </div>
    )
}

export default Card;