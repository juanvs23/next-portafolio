import React, { createContext,useState } from 'react';
import {empresas, skills} from '../data/data';


export const FunctionalsContent =createContext();

const FunctionalsProvider=({children})=>{
    const [titleContent,setTitleContent] = useState('index');
        return(
        <FunctionalsContent.Provider
            value={{
                empresas, skills,
                titleContent,setTitleContent
            }}
        >
            {children}
        </FunctionalsContent.Provider>)
}
export default FunctionalsProvider;