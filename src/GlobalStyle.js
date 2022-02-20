import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding:0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}
body{
    background-color:#03091F;
    color: white;
    font-size: 0.8rem;
    font-Weight: 400;
}
a{
    color: inherit;
    font-family: inherit;
}
p{
    line-height: 2rem;
}
.Before{
    position: relative;
    padding-left: 3rem;
    &::before{
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        width: 35px;
        height: 2px;
        transform: translateY(-50%);
        background-color:#395FF6; 
    }
}
.GradientText{
    background: linear-gradient(120deg, rgb(132, 111, 244), rgb(241, 118, 116));
    background-clip: text;
    display: inline-block;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}
.title-con{
    width: 50%;
    margin: 0 auto;
    text-align: center;
}
.gradient-cards-con{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
}
`;
export default GlobalStyle;