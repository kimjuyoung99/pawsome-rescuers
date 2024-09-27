import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;700&display=swap');
  @import url('https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/nanumsquare.css');

  * {
    /* margin: 0;
    padding: 0; */
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

  /* 추가적인 전역 스타일 */
  .blue-text {
    color: #008BF0;
  }

  .container {
    width: 1410px;
    margin: 0 auto;
    padding: 0 40px;
  }
`;

export default GlobalStyle;