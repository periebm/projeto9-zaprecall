import Cards from "./Cards"
import { useState } from "react";


export default function ListCards(props) {
    const [turnedCards, setTurn] = useState([])
    const [clickedTwice, setClickedTwice] = useState([]);

    function turnCard(card){
        const newCards = [...turnedCards, card]
        setTurn(newCards)
        
        for(let i = 0; i < turnedCards.length; i++){
            if(newCards[i] === card) {
                const NewTwiceList = [...clickedTwice, card]
                setClickedTwice(NewTwiceList);
            };
        }

    }

    return (
        <>
            {props.deck.map((card, index) => (
                < Cards 
                    key = {index}
                    card={card}
                    index={index}
                    turnCard={turnCard}
                    turned = {turnedCards.includes(card)}
                    clickedTwice = {clickedTwice.includes(card)}
                />
                ))}
        </>
    )
}
