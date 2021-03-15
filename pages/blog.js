
import LayoutPages from '../components/layouts/LayoutPages'
import { FunctionalsContent } from '../context/content';
import AOS from 'aos'
import 'aos/dist/aos.css'
import NProgress from 'nprogress';
import {useContext,useEffect} from 'react'
import {useFetch} from '../hooks/useFetch';
const blog = () => {
    const {setTitleContent} = useContext(FunctionalsContent);
    const blogContent= useFetch('http://ideas-digitales.tk/portafoliocms/wp-json/wp/v2/posts/?_embed=true');
    useEffect(() => {
        setTitleContent('Blog');  
        AOS.init({duration:1000});
        NProgress.start();
        NProgress.inc();
        if (blogContent.response) {
       
            setTimeout(()=>{
                NProgress.done();
            },1000)
       }
    }, [blogContent])
   console.log(blogContent)
    return (
        <LayoutPages>
            Blog
        </LayoutPages>
    )
}

export default blog
