import {useContext} from 'react'
import Container from "react-bootstrap/Container"
import Footer from "../footer"
import Header from "../header"
import Head from 'next/head'
import { FunctionalsContent } from '../../context/content'
import ContactFooter from '../contactFooter.jsx'


const LayoutPages = ({children}) => {
    const {titleContent} = useContext(FunctionalsContent)
    return (
        <>
        <Head>
            <title>{titleContent}</title>
        </Head>
        <Header/>
           <Container className="py-2 container-layout">
           {children}
           </Container>
           <ContactFooter/>
           <Footer/>
        </>
    )
}

export default LayoutPages
