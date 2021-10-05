import React, {Component} from "react";
import Card from "./Card";
import img1 from "../assets/img/v.jpg"
import img2 from "../assets/img/d.jpg"
import img3 from "../assets/img/s.jpg"

class Cards extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1 }title="img1"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2}title="img2"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3}title="img3"/>
                    </div>                                        
                </div>

            </div>
        );
    }
}

export default Cards;
