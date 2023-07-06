
import React from "react";
import './style.css';

const SelectImg = (props) => {
    return (
        <div>
        <img class='gray-img' src={props.img_url}></img>
        </div>
    )
}

export default SelectImg;