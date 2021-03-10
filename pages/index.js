import {useContext,useEffect} from 'react'
import Link from "next/link"
import Header from "../components/Header"
import LayoutPages from "../components/layouts/LayoutPages"
import Image from 'next/image'
import { FunctionalsContent } from '../context/content';
import AOS from 'aos'
import 'aos/dist/aos.css'

function HomePage() {
    const {setTitleContent, empresas} = useContext(FunctionalsContent);
    useEffect(() => {
        setTitleContent('Mi Portafolio')
        AOS.init();
    }, [])
    const empresaTime = ()=>(empresas.length*100)

    return(
        <LayoutPages>
           <header  className="row" >
               <div className="col-12">
                   <div  className="card card-body bg-secondary">
                       <div className="row">
                        <div className="col-md-4">
                            <Image 
                            src="/juan-carlos.jpg" 
                            width={340}
                            height={340} alt="" className="fluid-img"/>
                            </div>
                            <div className="col-md-8">
                                <h1 className="text-info" data-aos="fade-lef"  data-aos-delay="50" >Acerca de mi...</h1>
                                <p data-aos="fade-in"  data-aos-delay="160">Mi nombre es Juan  Carlos Avila. Soy desarrollador Web con 3 años de experiencia en el desarrollo web y 10 años de graduado como técnico universitario.  Me gusta el desarrollo web en especial el  front-end.

Tengo experiencia en: HTML+CSS3, JavaScript, PHP, wordpress, React y NodeJs. Más información

He trabajado como desarrollador web para varias empresas de marketing como desarrollador independiente entre las puedo indicar:
</p>
<ol>
   { empresas.map((empresa,i)=>{
       return <li data-aos="fade-in" data-aos-duration="2000" data-aos-delay={300+100*i} key={i}>{empresa.nombre}</li>
   })}
</ol>

                               
                                <a className="btn btn-info" data-aos="zoom-in"  data-aos-delay={empresaTime()+400} href="mailto:juanvs23@gmail.com">Contratame</a>
                            </div>

                       </div>
                   </div>
               </div>
           </header>
           <div className="row">
               <div className="col-md-4">
                   <div className="mt-3 card bg-secondary">
                       <div className="card-header">
                           <h3 className="text-info">Skills:</h3>
                       </div>
                       <div className="card-body">
                            
                       </div>
                   </div>
                </div>
               <div className="col-md-8">
               <div className="mt-3 card bg-secondary">
                       <div className="card-header">
                            <h3 className="text-info">Experiencia:</h3>
                       </div>
                       <div className="card-body"></div>
                </div>
               </div>
           </div>
        </LayoutPages>
    )
  }
  
  export default HomePage