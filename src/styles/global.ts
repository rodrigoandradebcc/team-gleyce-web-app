import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    --webkit-font-smoothing: antialiased;
  }

  #root {
    height: 100vh;
    width: 100vw;
    display: flex;
    padding: 12px;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  :root {
    --primary: #000;
    --secondary: #15181C;
    --search: #202327;
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --outline: #2F3336;
    --retweet: #00C06B;
    --like: #E8265E;
    --twitter: #33A1F2;
    --twitter-dark-hover: #011017;
    --twitter-light-hover: #2C8ED6;
    --background: #FAFAFA;
    --background-content:#EDEEF0;
    --wine: #D61E29;
    --yellow: #FAC600;
  }
`;
