import styled from "styled-components"

export const Container=styled.div`
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
  .b{
    border:1px solid red;
  }
`