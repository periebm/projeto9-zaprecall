import styled from "styled-components"

export default function Cards(props) {
    const { card, index, turned, turnCard, clickedTwice, clickedButton, cardStatus } = props;  //passar prop de visibilidade

    
    function setIcon(){
            if(cardStatus === ""){ 
                if(turned === true) {
                    return "reload-outline"
                }
                else return "play-outline"
            }
            else{
                if(cardStatus === "Zap!") return "checkmark-circle"
                else if(cardStatus === "Quase não lembrei") return "help-circle"
                else if(cardStatus === "Não lembrei") return "close-circle"
            }        
    }

    function changeDataTest(){
        if(cardStatus === ""){ 
            if(turned === true) {
                return "turn-btn"
            }
            else return "play-btn"
        }
        else{
            if(cardStatus === "Zap!") return "zap-icon"
            else if(cardStatus === "Quase não lembrei") return "partial-icon"
            else if(cardStatus === "Não lembrei") return "no-icon"
        }  
    }

    function changeQuestion(){
        if(turned === false) return `Pergunta ${index + 1}`
        else if(turned === true && clickedTwice===false) return card.question
        else if(turned === true && clickedTwice===true) return card.answer
    }

    return (
        <SingleCard data-test="flashcard" key={card} turned={turned} clickedTwice={clickedTwice} cardStatus={cardStatus} >
            <h2 data-test="flashcard-text" > {changeQuestion()} </h2>
            
            <ion-icon data-test={changeDataTest()} onClick={() => turnCard(card)} name={setIcon()}>
            </ion-icon>

            <Options clickedTwice={clickedTwice}>
                <button data-test="no-btn" onClick={() => clickedButton(card, "Não lembrei")}>Não lembrei</button>
                <button data-test="partial-btn" onClick={() => clickedButton(card, "Quase não lembrei")}>Quase não lembrei</button>
                <button data-test="zap-btn" onClick={() => clickedButton(card, "Zap!")}>Zap!</button>
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
    color: ${props => {
            if(props.cardStatus === "Zap!") return "#2FBE34;"
            else if(props.cardStatus === "Quase não lembrei") return '#FF922E;'
            else if(props.cardStatus === "Não lembrei") return "#FF3030;"
            else return "#333333;"
        }    
       };

    h2{
        font-weight: ${props => props.turned ? "400" : "700"};
        margin-top: ${props => props.turned && "18px"};
        margin-left: 15px;
        text-decoration: ${props => props.cardStatus && "line-through"};
        font-size: 16px;
    }

    ion-icon{
        ${props =>  
            { if(props.clickedTwice === true) return 'display: none;'
              else if(props.turned === true && props.clickedTwice===false) return 'display: flex;'
              else return ''} };
        position: ${props => props.turned && "absolute"};
        bottom: ${props => props.turned && "6px"};
        right: ${props => props.turned && "0"};
        font-size: ${props => props.turned ? "28px" : "30px"};
        margin-right: 15px;
    }
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
