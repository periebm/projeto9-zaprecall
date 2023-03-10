import { useState } from "react";
import styled from "styled-components";
import ListCards from "./components/ListCards";
import Title from "./components/Title";


export default function App() {
  const deck = [
    { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
    { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
  ]

  return (
    <Background>
      <Title/>
      <ListCards deck={deck} 
      />
    </Background>
  )
}

const Background = styled.div`
  background-color: #FB6B6B;
  display: flex;
  flex-direction: column;
  margin: 0 auto 70px auto;
  height: 100%;
  width: 375px;
`;

//font-family: 'Recursive', sans-serif;
//font-family: 'Righteous', cursive;
