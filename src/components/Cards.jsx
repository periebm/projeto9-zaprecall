import styled from "styled-components"
import arrow from "../assets/arrow.png"
import turn from "../assets/turn.png"

export default function Cards(props) {
    const { card, index, turned, turnCard, clickedTwice } = props;  //passar prop de visibilidade



    return (
        <SingleCard key={card} turned={turned} >
            <Text> {turned ? `${card.question}` : `Pergunta ${index + 1}`} </Text>

            <Symbol 
                clickedTwice={clickedTwice}
                onClick={() => turnCard(card)}
                src={turned ? turn : arrow} />

            <Options clickedTwice={clickedTwice}>
                <button>Não lembrei</button>
                <button>Quase não lembrei</button>
                <button>Zap!</button>
            </Options>

        </SingleCard>
    )
}

const SingleCard = styled.div`
    position: relative;
    font-family: 'Recursive', sans-serif;
    margin: 0 auto 25px auto;
    width: 80%;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    justify-content: space-between;
    background-color: ${({ turned }) => turned ? "#FFFFD4" : "white"};
    height: ${({ turned }) => turned ? "131px" : "65px"};
    align-items: ${props => props.turned ? "" : "center"};
    display: ${props => props.turned ? "" : "flex"};

    h2{
        font-weight: ${props => props.turned ? "400" : "700"};
        margin-top: ${props => props.turned && "18px"};
    }

    img{
        display: ${props => props.turned && "flex"};
        position: ${props => props.turned && "absolute"};
        bottom: ${props => props.turned && "6px"};
        right: ${props => props.turned && "0"};
        height: ${props => props.turned && "20px"};
    }
`

const Text = styled.h2`
        margin-left: 15px;
        color: #333333;
        font-size: 16px;
`

const Symbol = styled.img`
        height: 23px;
        margin-right: 15px;
        //display: ${props => props.clickedTwice ? "none" : "block"};
`

const Options = styled.div`
    position: absolute;
    bottom: 0;
    display: ${props => props.clickedTwice  ? "flex" : "none"};
    margin-bottom: 10px;


    button{
        height: 38px;
        width: 85px;
        color: white;
        font-family: 'Recursive', sans-serif;
        font-size: 12px;
        font-weight: 400;
        border-radius: 5px;
        border-style: none;
    }

    button:nth-child(1){
        background-color: #FF3030;
        margin-left: 17px;
        &:active{
            background-color: #961919;
        }
    }

    button:nth-child(2){
        background-color: #FF922E;
        margin-left: 7.8px;
        margin-right: 7.8px;
        &:active{
            background-color: #b6681f;
        }
    }

    button:nth-child(3){
        background-color: #2FBE34;
        margin-right: 17px;
        &:active{
            background-color: #1e8a22;
        }
    }
`
