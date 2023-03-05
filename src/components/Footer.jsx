import styled from "styled-components"


export default function Footer(props){
    return(
        <>
        <Foot data-test="footer">
            {props.concluded}
            /{props.deck_length} CONCLUÍDOS
        </Foot>
        </>
    )
}

const Foot = styled.div`
    position: fixed;
    bottom: 0;
    height: 70px;
    width: 375px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive', sans-serif;
    color: #333333;
    font-weight: 400;
    font-size: 18px;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
`