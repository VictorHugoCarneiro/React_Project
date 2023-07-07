
import React, { Fragment, useState, useEffect } from "react";
import Selecao from "./selecao";

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

    const removeLast = () => {
        let new_selecoes = [...selecoes]
        new_selecoes.pop()
        setSelecoes(new_selecoes)
    }

    const duplicateLastSelecao = () => {
        let last_selecao = selecoes[selecoes.length - 1]
        setSelecoes([...selecoes, last_selecao]);
    }

    
        return (
            <Fragment>
                <h3>Lista de Seleções</h3>
                <button onClick={removeLast}>Remove Last</button>
                <button onClick={duplicateLastSelecao}>Duplicate Last</button>
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