import { createGlobalStyle, css } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;700&display=swap');
  @import url('https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/nanumsquare.css');

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans', sans-serif;
    background-color: #ffffff;
    color: #323232;
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'NanumSquare', sans-serif;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .blue-text {
    color: #008BF0;
  }

  .container {
    width: 1410px;
    margin: 0 auto;
    padding: 0 40px;
  }
`;

export const Container = styled.div`
    padding: 20px;
    max-width: 1200px;
    margin: 10px 10px 10px 120px;
    border: solid #a7e9ff 2px;
`;

export const Arrow = styled.div`
    width: 30px;
    height: 30px;
`;

export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

export const PageButton = styled.button<{ active: boolean }>`
    margin: 0 5px;
    padding: 5px 10px;
    border: 2px solid #ccc;
    background-color: ${props => props.active ? '#47b1ff' : 'white'};
    color: ${props => props.active ? 'white' : '#ccc'};
    cursor: pointer;
    border-radius: 5px;

    &:hover {
        background-color: ${props => props.active ? '#47b1ff' :'#47b1ff'};
    }
`;

export const AnimalListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 15px;
    justify-content: center;
    margin: 0 0 20px 20px;
    padding: 0 20px 20px 20px;

    /* border: yellow solid 2px; */
`;

export const Text1 = styled.div`
    width: 100%;
    max-width: 638px;
    color: #323232;
    font-family: "Noto Sans", sans-serif;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -1.55px;
    padding-bottom: 20px;
`;


export const ScrapAnimalListContainer = styled.div`
 display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    justify-content: center;
    margin: 0 0 20px 20px;
    padding: 0 20px 20px 20px;
    /* border: yellow solid 2px; */
`;

export default GlobalStyle;
   
   /* margin: 0;
    padding: 0; */