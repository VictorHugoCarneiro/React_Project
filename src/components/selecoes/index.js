
import React, { Fragment } from "react";
import Selecao from "./selecao";

async function getSelecoes(){
    let response = await fetch('http://localhost:3000/api/selecoes.json')
    let data = await response.json()
    return data;
}

class Selecoes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selecoes: [ ]
        }
    }

    componentDidMount(){
        getSelecoes().then(data => {
            this.setState(state => ({
                selecoes: data['selecoes']
            }))
        })
    }

    removeLast = () => {
        let new_selecoes = [...this.state.selecoes]
        new_selecoes.pop()
        this.setState(state => ({
            selecoes: new_selecoes
        }))
    }

    duplicateLastSelecao = () =>{
        let last_selecao = this.state.selecoes[this.state.selecoes.length - 1]
        this.setState(state => ({
            selecoes: [...this.state.selecoes, last_selecao]
        }))
    }

    render() {
        return (
            <Fragment>
                <h3>Lista de Seleções</h3>
                <button onClick={this.removeLast}>Remove Last</button>
                <button onClick={this.duplicateLastSelecao}>Duplicate Last</button>
                <hr />
                {this.state.selecoes.map((selecao, index) =>
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
}


export default Selecoes;