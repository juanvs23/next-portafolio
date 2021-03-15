import LayoutPages from '../components/layouts/LayoutPages'
import { FunctionalsContent } from '../context/content';
import AOS from 'aos'
import 'aos/dist/aos.css'
import NProgress from 'nprogress';
import {useContext,useEffect} from 'react'
const GithubPage = () => {
    const {setTitleContent} = useContext(FunctionalsContent);
    useEffect(() => {
        setTitleContent('Blog');  
        AOS.init({duration:1000});
        NProgress.start();
        NProgress.inc();
         setTimeout(()=>{
             NProgress.done();
         },1000)
    }, [])
    return (
        <LayoutPages>
           Github
        </LayoutPages>
    )
}

export default GithubPage

