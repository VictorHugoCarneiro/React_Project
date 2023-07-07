
import React, { Fragment, useState } from "react";
import Selecao from "./selecao";

async function getSelecoes(){
    let response = await fetch('http://localhost:3000/api/selecoes.json')
    let data = await response.json()
    return data;
}


//componentDidMount(){
//    getSelecoes().then(data => {
//        this.setState(state => ({
//            selecoes: data['selecoes']
//  }))
//    })
//}

const Selecoes = () => {
    const [selecoes, setSelecoes] = useState([
        {
        "id": "brasil",
            "img_url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/150px-Flag_of_Brazil.svg.png",
            "name":"Brasil",
            "description":"Seleção Brasileira é o nome que refere à equipe que representa o Brasil em um determinado esporte. Para cada esporte, a Seleção Brasileira é formada pela seleção de jogadores profissionais e naturalizados brasileiros, geralmente a critério do técnico.",
            "link":"https://pt.wikipedia.org/wiki/Sele%C3%A7%C3%A3o_Brasileira_de_Futebol"
        }
    ])
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