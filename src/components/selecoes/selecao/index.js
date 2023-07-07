
import React from 'react';
import SelectImg from '../../shared/select_img';
import DescriptionLink from '../../shared/description_link';

async function getTimes(id){
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json();
    return data;
}

class Selecao extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            times: []
        }
    }

    componentDidMount(){
        getTimes(this.props.id).then(data => {
            this.setState(state => ({
                times: data['times']
            }))
        })
    }

    render(){
        let title;
        if(this.props.title_whit_underline)
            title = <h4><u>{this.props.name}</u></h4>
        else
            title = <h4>{this.props.name}</h4> 
        return (
            
            <div>
                {title}
                <DescriptionLink description={this.props.description} link={this.props.link}/>
                <SelectImg img_url={this.props.img_url} gray={this.props.gray}/>
                <h4>Times</h4>
                <ul>
                {this.state.times.map((time, index) => 
                    <li key={index}>{time.name}</li>
                )}
                </ul>                
               <hr/>
            </div>
        )
    }
}

export default Selecao;