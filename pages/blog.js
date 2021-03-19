
import LayoutPages from '../components/layouts/layoutPages'
import { FunctionalsContent } from '../context/content';
import AOS from 'aos'
import 'aos/dist/aos.css'
import NProgress from 'nprogress';
import {useContext,useEffect} from 'react'
import {useFetch} from '../hooks/useFetch';
import BlogCard from '../components/blogCard';
const blog = ({blogContent}) => {
    const {setTitleContent} = useContext(FunctionalsContent);
    //const blogContent= useFetch('http://ideas-digitales.tk/portafoliocms/wp-json/wp/v2/posts/?_embed=true');
    useEffect(() => {
        setTitleContent('Blog');  
        AOS.init({duration:1000});
        NProgress.start();
        NProgress.inc();
       if (blogContent) {
       
            setTimeout(()=>{
                NProgress.done();
            },1000)
       } 
    }, [blogContent])

    return (
        <LayoutPages>
           <div className="row">
               {blogContent.map((card,i)=><BlogCard card={card} key={i} />)}
           </div>
        </LayoutPages>
    )
}
export async function getServerSideProps(context){
    const data = await fetch('http://ideas-digitales.tk/portafoliocms/wp-json/wp/v2/posts/?_embed=true');
    const blogContent = await data.json();
    
    return {
        props:{
            blogContent
        }
    }
}
export default blog
