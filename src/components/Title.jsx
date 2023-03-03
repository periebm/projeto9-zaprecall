import styled from "styled-components";
import image2 from "../assets/image2.png";
export default function Title(){
    return(
        <TitleStyle>
            <img src={image2} />
            <h1>ZapRecall</h1>
        </TitleStyle>
    )
}

const TitleStyle = styled.div`
display: flex;
height: 60px;
justify-content: center;
align-items: center;
font-family: 'Righteous', cursive;
color: white;
font-size: 36px;
text-align: center;
margin: 44px 0 51px 0;
h1{
    margin-left: 15px;
}
`;