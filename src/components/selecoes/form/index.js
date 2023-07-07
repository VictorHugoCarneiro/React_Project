import React, {Fragment, useState} from "react";

const initialState = {
    name: '',
    description: '',
    link: '',
    img_url: ''

}

const Form = (props) => {
    const [fields, setFields] = useState(initialState)

    const handleFieldsChange = (e) => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    });
    const handleSubmit = Event => {
        props.addSelecao(fields)
        Event.preventDefault();
        setFields(initialState);
    }

    return(
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input id="name" type="text" name="name" value={fields.name} onChange={handleFieldsChange}/>                    
                </div>
                <div>
                    <label htmlFor="description">Description: </label>
                    <input id="description" type="text" name="description" value={fields.description} onChange={handleFieldsChange}/>                    
                </div>
                <div>
                    <label htmlFor="Link"> Link: </label>
                    <input id="link" type="text" name="link" value={fields.link} onChange={handleFieldsChange}/>                    
                </div>
                <div>
                    <label htmlFor="img_url"> Imagem: </label>
                    <input id="img_url" type="img_url" name="img_url" value={fields.img_url} onChange={handleFieldsChange}/>                    
                </div>
                <br/>
                <input type="submit"/>
            </form>
        </Fragment>
    )
}

export default Form;