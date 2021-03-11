import React,{createRef} from 'react'
import styled from 'styled-components';

export const Fomulario = styled.div`
  #send{
      display:block;
      margin:auto;
      min-width: 200px;
    font-size: 25px;
  }
  .form-control {
    background: transparent;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid white;
    color:white;
}
.form-control:focus {
    outline: none;
    box-shadow: none;
    border-bottom: 2px solid white;
    transition: 0.2s;
}
 label{
     font-size:0;
 }
`;


const Form = () => {
    const nombre = React.createRef(),
          email = React.createRef(),
          mensaje =React.createRef();
          
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(nombre.current.value,email.current.value,mensaje.current.value);
    }      
    return (
        <Fomulario>
            <form  onSubmit={handleSubmit} method="post">
            <div className="form-group">
  <div className="form-group">
    <label htmlFor="name">Nombre</label>
    <input ref={nombre} type="text" name="name" className="form-control" id="name" placeholder="Nombre" />
  </div>
    <label htmlFor="email">Correo Electrónico:</label>
    <input ref={email} type="email" className="form-control" id="email" placeholder="Correo Electrónico" />
    <div className="valid-feedback">Success! You've done it.</div>
  </div>
  <div className="form-group">
  <label htmlFor="mensaje">Correo Electrónico:</label>
   <textarea ref={mensaje} name="mensaje" id="mensaje" placeholder="Mensaje" className="form-control"  cols="20" rows="2"></textarea>
  </div>
  <button type="submit" id="send" className="btn btn-primary btn-large">Enviar</button>
            </form>
        </Fomulario>
    )
}

export default Form
