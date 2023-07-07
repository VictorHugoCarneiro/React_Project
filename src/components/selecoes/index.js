
import React, { Fragment, useState, useEffect } from "react";
import Selecao from "./selecao";
import Form from "./form";

async function getSelecoes(){
    let response = await fetch('http://localhost:3000/api/selecoes.json')
    let data = await response.json()
    return data;
}

const Selecoes = () => {
    const [selecoes, setSelecoes] = useState([])

    useEffect(() => {
        getSelecoes().then(data => {
            setSelecoes(data['selecoes'])
         })
    }, [])

    const addSelecao = (new_selecao) => {
        setSelecoes([...selecoes, new_selecao])
    }

        return (
            <Fragment>
                <h3>Lista de Seleções</h3>
                <hr/>
                <Form addSelecao={addSelecao}/>
                <hr />
                {selecoes.map((selecao, index) =>
                <Selecao 
                    id={selecao.id}
                    img_url={selecao.img_url}
                    name={selecao.name}
                    description={selecao.description}
                    link={selecao.link}
                    key={index}
                />
                )}

            </Fragment>
        )
}


export default Selecoes;