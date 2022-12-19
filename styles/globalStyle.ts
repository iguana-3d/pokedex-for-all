import { createGlobalStyle } from "styled-components";

interface IGlobalProps {
   hideOverflowOnModal?: boolean;
}

export default createGlobalStyle<IGlobalProps>`
*,
*::before,
*::after {
   margin: 0;
   padding: 0;
   box-sizing: inherit;
}
html {
   box-sizing: border-box;
   font-size: 62.5%; // 1 Rem === 10px
   @media ${(props) => props.theme.medias.laptopSmall} {//1024px
      font-size: 56.25%;//9px = 9/16 * 100
   }
   @media ${(props) => props.theme.medias.tablet} {//768px
      font-size: 50%;//8px = 8/16 * 100
   }
   @media ${(props) => props.theme.medias.mobile} {//600px
      font-size: 43.75%;//7px = 7/16 * 100
   }
}
body {
   font-family: 'Montserrat', sans-serif;
   font-weight: ${(props) => props.theme.typeFaceWeight.regular};
   font-size: 1.6rem;
   line-height: 1.6;
   overflow: ${props => props.hideOverflowOnModal ? 'hidden' : 'auto'};
}
hr {
   width: 100%;
   background-color: ${(props) => props.theme.pallete.colors.grey[300]};
}
p {
   color: ${(props) => props.theme.pallete.colors.text.primary};
   font-size: 1.6rem;
}
span {
   color: ${(props) => props.theme.pallete.colors.text.primary};
   font-size: 1.4rem;
}
h1 {
   font-weight: ${(props) => props.theme.typeFaceWeight.semiBold};
   color: ${(props) => props.theme.pallete.colors.text.primary};
   font-size: 3.2rem;
}
h2 {
   color: ${(props) => props.theme.pallete.colors.text.primary};
   font-size: 2.6rem;
}
h3 {
   color: ${(props) => props.theme.pallete.colors.text.primary};
   font-size: 2.2rem;
}
::-webkit-scrollbar {
    width: 10px;
}
::-webkit-scrollbar-track {
    background: ${(props) => props.theme.pallete.colors.grey[300]};
}
::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.pallete.colors.primary}; 
    border-radius: 100vw;
    border: .15em solid ${(props) => props.theme.pallete.colors.grey[300]};
}
#nprogress {
          pointer-events: none;
          
          & .bar {
            top: 0;
            left: 0;
            height: 3px;
            width: 100%;
            position: fixed;
            z-index: 20;
            background-color: ${(props) => props.theme.pallete.colors.primary};
            box-shadow: 0 0 .5rem ${(props) =>
              props.theme.pallete.colors.primary};
          }
          & .peg {
            right: 0;
            opacity: 1;
            width: 100%;
            height: 100%;
            display: block;
            position: absolute;
            transform: rotate(0deg) translate(0px, 0px);
            box-shadow: 0 0 0 ${(props) => props.theme.pallete.colors.primary},
             0 0 0 ${(props) => props.theme.pallete.colors.primary};
          }
         }
`;
