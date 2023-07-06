import React, {Fragment} from "react";

const DescriptionLink = (props) => {
    return (
        <Fragment>
        <p>{props.description}</p>
        <a href={props.link}>{props.link}</a>
        </Fragment>
    )
}

export default DescriptionLink;