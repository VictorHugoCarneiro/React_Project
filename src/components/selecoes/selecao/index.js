
import React from 'react';
import SelectImg from '../../shared/select_img';
import DescriptionLink from '../../shared/description_link';

const Selecao = (props) => {
    return (
        <div>
            <h4>{props.name}</h4>
            <DescriptionLink description={props.description} link={props.link}/>
            <SelectImg img_url={props.img_url}/>
            <p>{props.description}</p>
           
        </div>
    )
}

export default Selecao;