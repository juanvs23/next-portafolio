import styled from 'styled-components';

export const ExperienciaContainer = styled.div`
.body-experience {
    margin-left: 21px;
    margin-bottom: 30px;
    max-width: 81%;
}
p {
    margin-bottom: 10px;
}
`;

const Experiencias = ({empresa}) => {
   
    const empresaNull =()=>{
        if(!empresa.año_fin){
            return 'Presente'
        }else{
            return empresa.año_fin;
        }
    }
    return (
        <ExperienciaContainer >
            <h3 className="h4 text-info"> <i className="fa fa-chevron-right"></i> {empresa.cargo}</h3>
           <div className="body-experience">
            
            <p className="text-justify"><b>Descripción:</b> {empresa.Descripcion}</p>
           <h6 className="text-primary"><em > {empresa.nombre} </em> <em> {empresa.año_inicio} </em> - <em> {empresaNull()} </em></h6>
           
           </div>
        </ExperienciaContainer>
    )
}

export default Experiencias
