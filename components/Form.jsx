import React,{createRef,useContext} from 'react'
import styled from 'styled-components';
//import {SendPost} from '../hooks/useFetch'
import { FunctionalsContent } from '../context/content';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
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
 .is-invalid{
   border-color:#e74c3c !important; 
 }
 .happycontent {
  display: flex;
  justify-content: center;
}
`;


const Form = () => {
  const {validate} = useContext(FunctionalsContent);
  const [show, setShow] = React.useState(false);
    const nombre = createRef(),
          email = createRef(),
          mensaje =createRef(),
          phone= createRef();

    const closeModal=()=>setShow(false)
    const test_Invalid=(e)=>{
      if(e.target.classList.contains('is-invalid')){
        e.target.classList.remove('is-invalid')
        document.querySelectorAll('.alert-feedback').forEach((element,i)=>{
          if (element.getAttribute('data-set-alert')==  e.target.id) {
            element.remove();
          }
        })
      }
    }    
    const handleSubmit=(e)=>{
        e.preventDefault()
        const regex= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
       

       if (nombre.current.value.length < 3 || email.current.value.length <=0  || phone.current.value.length == "" || !regex.test(String( email.current.value).toLowerCase())) {
          if(nombre.current.value.length <= 3){
            validate('Campo obligatorio, o mayor a 3 letras','name','is-invalid')
          }
          if (email.current.value==="") {
              validate('Campo obligatorio','email','is-invalid')
          }else if(!regex.test(String( email.current.value).toLowerCase())){
            validate('Formato incorrecto','email','is-invalid')
          }
          if (phone.current.value.length == "") {
            validate('Campo obligatorio','phone','is-invalid')
          }
        
       }else{
        const data ={
          name:nombre.current.value,
          email:email.current.value,
          mensaje:mensaje.current.value
        }
        const spinner = `<div class="spinner-border text-light" role="status">
        <span class="sr-only">Loading...</span>
      </div>`;

        document.querySelector('form button#send').innerHTML = spinner;
        axios.post('http://localhost:3001/sendmail',data)
        .then(res=>{
          setTimeout(() => {
           if(res.data==="ok!"){
              document.querySelector('form#contact-form').reset();
            document.querySelector('form button#send').innerHTML = 'Enviar';
            setShow(true);
           }
           }, 1000);
        }) 
       }
        
        
    }      
    return (
        <Fomulario>
            <form  id="contact-form" onSubmit={handleSubmit} method="post">
            <div className="form-group">
    <label htmlFor="name">Nombre</label>
    <input ref={nombre} type="text" name="name" className="form-control" onChange={test_Invalid} id="name" placeholder="Nombre" />
  </div>
 <div className="row">
   <div className="col-lg-6">
    <div className="form-group">
      <label htmlFor="email">Correo Electrónico:</label>
      <input ref={email} type="email" className="form-control" id="email" onChange={test_Invalid} placeholder="Correo Electrónico" />
      
    </div>
   </div>
   <div className="col-lg-6">
   <div className="form-group">
    <label htmlFor="phone">Télefono:</label>
    <input ref={phone} type="text" className="form-control" id="phone"  onChange={test_Invalid}placeholder="Télefono" />
    
  </div>
   </div>
 </div>
  <div className="form-group">
  <label htmlFor="mensaje">Deje su mensaje:</label>
   <textarea ref={mensaje} name="mensaje" id="mensaje" placeholder="Mensaje" className="form-control"  cols="20" rows="2"></textarea>
  </div>
  <button type="submit" id="send" className="btn btn-primary btn-large">Enviar</button>
            </form>
            <Modal
        show={show}
        onHide={() => setShow(false)}
       
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        
        <Modal.Body>
         <div className="pb-3 m-auto happycontent">
         <i className="fa fa-check display-2 text-info"></i>
         </div>
         <h3 className="text-center text-info">Gracias por contactarme</h3>
         <p className="p-2 text-center text-white">Pronto me contactare con usted. Gracias por mostrar interes en mi trabajo, espero poder ayudarlo. Mientras lo invito a revisar mi blog y también revisar mis proyectos públicos es github</p>
        </Modal.Body>
        <Modal.Footer>
        <button className="m-auto btn btn-info" onClick={closeModal}>Continuar explorando</button>
      </Modal.Footer>
      </Modal>
        </Fomulario>

    )
}

export default Form
