
import React from 'react';
import SelectImg from '../../shared/select_img';
import DescriptionLink from '../../shared/description_link';

const Selecao = (props) => {
    
    let title;
    if(props.title_whit_underline)
        title = <h4><u>{props.name}</u></h4>
    else
        title = <h4>{props.name}</h4>    
    return (
        <div>
            {title}
            <DescriptionLink description={props.description} link={props.link}/>
            <SelectImg img_url={props.img_url} gray={props.gray}/>
           <hr/>
        </div>
    )
}

export default Selecao;