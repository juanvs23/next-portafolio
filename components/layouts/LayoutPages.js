import {useContext} from 'react'
import Container from "react-bootstrap/Container"
import Footer from "../footer"
import Header from "../Header"
import Head from 'next/head'
import { FunctionalsContent } from '../../context/content'


const LayoutPages = ({children}) => {
    const {titleContent} = useContext(FunctionalsContent)
    return (
        <>
        <Head>
            <title>{titleContent}</title>
        </Head>
        <Header/>
           <Container className="py-2">
           {children}
           </Container>
           <Footer/>
        </>
    )
}

export default LayoutPages
