import React, {Fragment, useState} from "react";

const Form = (props) => {
    const [name, setName] = useState('')
    const handleChange = Event => setName(Event.target.value);
    const handleSubmit = Event => {
        props.addSelecao({name: name})
        Event.preventDefault();
    }

    return(
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input id="name" type="text" value={name} onChange={handleChange}/>                    
                </div>
                <br/>
                <input type="submit"/>
            </form>
        </Fragment>
    )
}

export default Form;