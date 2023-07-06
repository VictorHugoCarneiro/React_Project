
import React from 'react';
import SelectImg from '../../shared/select_img';

const Selecao = (props) => {
    return (
        <div>
            <h4>{props.name}</h4>
             <SelectImg img_url={props.img_url}/>
            <p>{props.description}</p>
           
        </div>
    )
}

export default Selecao;