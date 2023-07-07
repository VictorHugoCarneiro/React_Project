
import React, { Fragment, useState, useEffect } from 'react';
import SelectImg from '../../shared/select_img';
import DescriptionLink from '../../shared/description_link';
import Selecoes from '..';

async function getTimes(id){
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json();
    return data;
}

const Selecao = (props) => {
    const [times, setTimes] = useState([]);

    useEffect(() => {
        getTimes(props.id).then(data => {
            setTimes(data['times'])
        })
    }, [])

    
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
                <h4>Times</h4>
                <ul>
                {times.map((time, index) => 
                    <li key={index}>{time.name}</li>
                )}
                </ul>                
               <hr/>
            </div>
        )
    }

export default Selecao;