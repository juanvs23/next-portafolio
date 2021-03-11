import React, { createContext,useState } from 'react';
import {empresas, skills,portfolio} from '../data/data';


export const FunctionalsContent =createContext();

const FunctionalsProvider=({children})=>{
    const [titleContent,setTitleContent] = useState('index');
        return(
        <FunctionalsContent.Provider
            value={{
                empresas, skills,portfolio,
                titleContent,setTitleContent
            }}
        >
            {children}
        </FunctionalsContent.Provider>)
}
export default FunctionalsProvider;