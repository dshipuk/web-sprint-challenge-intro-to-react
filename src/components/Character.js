// Write your Character component here
import React from "react";
import Char from "./create.js";

const Characters = (props) => {

    return (
        <div className="container">
            {props.data?.map(ele => {
                console.log(ele)
                return <Char info={ele} />
            })}
        </div>
    )
};

export default Characters;