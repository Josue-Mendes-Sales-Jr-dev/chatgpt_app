
import styled from "styled-components"

interface ITypeProps{
  tipo:boolean
}
interface ISubmitProps{
  block:boolean
}
export const Container=styled.form`
  height:70px;
  background-color:blue;
  width: 100%;
  display:flex;
  align-items:center;
  justify-content:center;
  border-bottom-left-radius:10px;
  border-bottom-right-radius:10px;
  gap:.25rem;
  
`
export const Content=styled.div`
  display: flex;
  flex-direction:column;
  align-items:flex-end;
  height:70vh;
  width: 100%;
  background-color:black;
  color: white;
  border:2px solid white;
  overflow:auto;
  box-sizing:border-box;
  
  .my-message{
    display: flex;
    box-sizing:border-box;
    align-items:flex-end;
    padding:.5rem;
    background-color:green;
    width:100%;
    min-height:2.5rem;
    border:2px solid white;
    word-wrap: break-word;
    border-radius:5px;
    margin:.5rem;

  }
  
`
export const InputSearch=styled.input.attrs({
    type: "search"
})<ITypeProps>`
   width:27rem;
   height:3rem;
   padding:1rem;
   border-radius:5px;
   border:2px solid ${props=>props.tipo===true? '#f00':'#0f0'}
`
export const InputBtn=styled.input.attrs({
    type: "Submit"
})<ISubmitProps>`
   width:6rem;
   height:3rem;
   padding:1rem;
   border-radius:5px;
   cursor= ${props=>props.block===true?'not-allowed':'pointer'};
   :hover{
     background-color:gray;
     cursor:pointer; 
     color:white;
   }
`