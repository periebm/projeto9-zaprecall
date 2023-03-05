import Cards from "./Cards"
import { useState } from "react";
import Footer from "./Footer";

let done = [];

export default function ListCards({deck}) {
    const [turnedCards, setTurn] = useState([])
    const [clickedTwice, setClickedTwice] = useState([]);
    const [didnt, setDidnt] = useState([]);
    const [almost, setAlmost] = useState([]);
    const [zap, setZap] = useState([]);
    const [concluded,  setConcluded] = useState(0);

    function turnCard(card) {

        if(done.includes(card)){
            return
        }

        const newCards = [...turnedCards, card]
        setTurn(newCards)


        //Check se foi clicado duas vezes
        turnedCards.forEach(c => {
            if (c === card) {
                const NewTwiceList = [...clickedTwice, card]
                setClickedTwice(NewTwiceList);
            }
        })
    }

    function clickedButton(card, string) {
        const newCards = turnedCards.filter(c => c !== card)
        const NewTwiceList = clickedTwice.filter(c => c !== card)
        done.push(card);
        setConcluded(done.length);
        setTurn(newCards);
        setClickedTwice(NewTwiceList);


        if (string === "Não lembrei") {
            const newDidntList = [...didnt, card];
            setDidnt(newDidntList)
        }

        else if (string === "Quase não lembrei") {
            const newAlmostList = [...almost, card];
            setAlmost(newAlmostList)
        }

        else if (string === "Zap!") {
            const newZapList = [...zap, card];
            setZap(newZapList)
        }

        
    }

    function checkStatus(card) {
        if (zap.includes(card)) {
            return ("Zap!")
        }
        else if (almost.includes(card)) {
            return ("Quase não lembrei")
        }
        else if (didnt.includes(card)) {
            return ("Não lembrei")
        }
        else return ""
    }


    return (
        <>
            {deck.map((card, index) => (
                < Cards
                    key={index}
                    card={card}
                    index={index}
                    turnCard={turnCard}
                    turned={turnedCards.includes(card)}
                    clickedTwice={clickedTwice.includes(card)}
                    clickedButton={clickedButton}
                    cardStatus={checkStatus(card)}
                />
            ))}

            <Footer deck_length={deck.length} concluded={concluded}/>

        </>
    )
}
