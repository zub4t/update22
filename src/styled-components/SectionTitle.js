import styled from "styled-components";


export default styled.p`
   font-family: 'Source Code Pro', sans-serif;
    letter-spacing: 4px;
    text-align: center;
    font-weight: 400;
    position: relative;
    font-size: ${ props => props.font + "px"};
    color: ${ props => props.insane ? "#4cd3b3" : "#d5d5d5"};
    background-color: #591857;
    margin-bottom: 0;
    text-transform: uppercase;
    text-shadow: ${props => props.textShadowSize} ${ props => props.insane ? "#d5d5d5" : "#4cd3b3"};
    box-shadow: 0px 0px 20px #000000ba;
    background: rgb(106, 23, 104);
    background: linear-gradient(90deg, #161e27 0%, #157678 100%);
    width: ${ props => props.width}
}

 @media (max-width: 630px) {
    font-size: ${props => (props.font/1.5) + "px" };
    text-shadow: 0px 1px #4cd3b3;
  }

`;