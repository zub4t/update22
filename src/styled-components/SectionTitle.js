import styled from 'styled-components'

export default styled.p`
   font-family: 'Source Code Pro', sans-serif;
    letter-spacing: 4px;
    text-align: center;
    font-weight: 400;
    position: relative;
    font-size: ${(props) => props.font + 'px'};
    color: ${(props) => (props.insane ? '#4cd3b3' : '#d5d5d5')};
    margin-bottom: 0;
    text-transform: uppercase;
    text-shadow: ${(props) => props.textShadowSize} ${(props) =>
  props.insane ? '#d5d5d5' : '#4cd3b3'};
    background: linear-gradient(344deg, #161e27, #157577, #157274);
    background-size: 600% 600%;
    -webkit-animation: UPanim 9s ease infinite;
    -moz-animation: UPanim 9s ease infinite;
    animation: UPanim 9s ease infinite;
    width: ${(props) => props.width}
}
  @-webkit-keyframes UPanim {
    0%{background-position:84% 0%}
    50%{background-position:17% 100%}
    100%{background-position:84% 0%}
  }
  @-moz-keyframes UPanim {
    0%{background-position:84% 0%}
    50%{background-position:17% 100%}
    100%{background-position:84% 0%}
  }
  @keyframes UPanim {
    0%{background-position:84% 0%}
    50%{background-position:17% 100%}
    100%{background-position:84% 0%}
  }
 @media (max-width: 630px) {
    font-size: ${(props) => props.font / 1.5 + 'px'};
    text-shadow: 0px 1px #4cd3b3;
  }

`
