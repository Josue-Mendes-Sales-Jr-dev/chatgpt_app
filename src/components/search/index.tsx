/* eslint-disable react-hooks/exhaustive-deps */
import * as A from "./styled"
import { useState, useEffect } from "react";

interface ISearchProps{
    search:string;
    setSearch:string[];
    handleSubmit:()=>void;
    setText:string;
    text:string;
    tipo:boolean;
    block:boolean;

}
const api_key="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"


export const Search:React.FC<ISearchProps>=()=>{
    const[search,setSearch]=useState('')
    let[text,setText]=useState([])
    const [chat,setChat]=useState([])

    const handleSubmit=(e:any)=>{
        e.preventDefault()
        console.log(search);
        let list:any=[...text, search];
        setText(list)
        setSearch('')
        alert(chat)
    }
   
    useEffect(()=>{
        fetch('https://api.openai.com/v1/completions',{
            method:'POST',
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json",
                Authorization:`Bearer ${api_key}`
            },
            body:JSON.stringify({
                model:"text-davinci-003",
                prompt: search,
                max_tokens: 2048,
                temperature: 0.5
            })
        })
        .then((response)=>response.json())
        .then((data)=> setChat(data.choices[0].text))
        .catch((error)=>`${error}==>`)
        console.log(chat)
       
    },[search])

    
    
    return(
        <>
        <A.Content>
            <>
            <ul>
               { text.map((text,index)=>(
                <li className="my-message" key={index}> {text}  </li>
               ))}
            </ul>
            </>
        </A.Content>
        <A.Container onSubmit={handleSubmit}>
            <A.InputSearch value={search} tipo={search===''? true: false}  onChange={(e)=>setSearch(e.target.value)} placeholder="Digite sua mensagem"/>
            <A.InputBtn disabled={search===''? true: false } block={search===''? true: false } value="Enviar"/>
        </A.Container>
        
        </>
    )
}