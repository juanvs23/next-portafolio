import { useContext, useEffect, useState } from 'react'
import { FunctionalsContent } from '../context/content';
import styled from 'styled-components';
import ProgressBar from 'react-bootstrap/ProgressBar';
import AOS from 'aos'
import 'aos/dist/aos.css'



const SkillsContainer = styled.div`
    .skill{
        padding-bottom:20px;
    }
    .detalle{
        font-size:12px;
        line-height:1.2;
        display: grid;
    grid-template-columns: 7% 93%;
    padding-bottom: 5px;
    }
    .conocimientos{
        padding:12px 0;
    }
`;

const Detalle =({titulo})=>{
   
    return(
        <div  className="detalle">
            <i className="fa fa-check"></i> {titulo}
        </div>
    )
}

const Skill =({skill})=>{

    const [completed, setCompleted] = useState(0);
    const {nombre, porcentaje, icon, detalles} = skill
    useEffect(() => {
        setTimeout(() => setCompleted(porcentaje), 2000);
        AOS.init();
    }, [])
    return(
       
           <div className="my-3 skill card card-body bg-secondary" data-aos="fade-in">
        <h4><i className={icon}></i> <span>{nombre}</span> </h4>

        <ProgressBar
        now={completed} 
        min="0"
        label={completed} />
        <div className="conocimientos">
            {detalles.map((detalle,i)=>{
                const {titulo}=detalle;
                    
               return(<Detalle key={i} titulo={titulo} />)
            })
                }
        </div>
    </div>
       
    
    )
}

const SkillsContent = () => {
    const {skills} = useContext(FunctionalsContent);
    return (
        <SkillsContainer>
            {skills.map((skill,i)=><Skill skill={skill} key={i} />)}
        </SkillsContainer>
    )
}

export default SkillsContent;