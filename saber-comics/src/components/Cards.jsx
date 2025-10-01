import React from "react";
import {Link} from "react-router-dom";

function Card({image,title,path}){
    return(
        <div className="card w-45 h-60 text-center">
            <Link to={path}>
                <div className="card-image mb-2">
                    <img src={image} alt={title} className="w-full height-full rounded-3xl border-3 border-[#009FF5]"/>
                </div>
                <h3>{title}</h3>
            </Link>
        </div>
    )
}
export default Card;