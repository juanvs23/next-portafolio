
import LayoutPages from '../components/layouts/LayoutPages'
import { FunctionalsContent } from '../context/content';
import {useContext,useEffect} from 'react'
const blog = () => {
    const {setTitleContent} = useContext(FunctionalsContent);
    useEffect(() => {
        setTitleContent('Blog');  
    }, [])
    return (
        <LayoutPages>
            Blog
        </LayoutPages>
    )
}

export default blog
