
import React, {Fragment} from "react";
import Selecao from "./selecao";

const Selecoes = () => {
    return (
        <Fragment>
        <h3>Lista de Seleções</h3>
        <hr/>
        <Selecao img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/150px-Flag_of_Brazil.svg.png"
                name="Brasil"
                description="Seleção Brasileira é o nome que refere à equipe que representa o Brasil em um determinado esporte. Para cada esporte, a Seleção Brasileira é formada pela seleção de jogadores profissionais e naturalizados brasileiros, geralmente a critério do técnico."
                link="https://pt.wikipedia.org/wiki/Sele%C3%A7%C3%A3o_Brasileira_de_Futebol"
        />
        
        <Selecao img_url="https://upload.wikimedia.org/wikipedia/pt/thumb/f/fc/230px-Afa_logo.svg.png/120px-230px-Afa_logo.svg.png"
                name="Argentina"
                description="A Seleção Argentina de Futebol representa na Associação do Futebol Argentino nas competições de futebol da CONMEBOL e FIFA.
                Conhecida carinhosamente como La Albiceleste, a Argentina é uma das grandes seleções de futebol do mundo, tendo conquistado três Copas do Mundo em 1978, 1986 e 2022, quinze títulos da Copa América, uma Copa das Confederações em 1992, duas Copas Finalíssima em 1993 e 2022 e duas medalhas de ouro nos Jogos Olímpicos de 2004 e de 2008. Juntamente com o Brasil e com a França, a Argentina é uma das 3 seleções nacionais a ter conquistado as 3 mais importantes competições de futebol entre seleções: 
                A Copa do Mundo, a Copa das Confederações e o Torneio Olímpico de Futebol."
                link="https://pt.wikipedia.org/wiki/Sele%C3%A7%C3%A3o_Argentina_de_Futebol"
        />

        </Fragment>
    )
}

export default Selecoes;