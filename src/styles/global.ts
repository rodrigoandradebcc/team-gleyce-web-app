import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--new-background);
    --webkit-font-smoothing: antialiased;
  }

  #root {
    height: 100vh;
    width: 100vw;
    display: flex;
  }

  body, input, button {
    font: 16px 'IBM Plex Sans', sans-serif;
    color: --text-body;
  }

  button{
    cursor: pointer;
  }

  :root {
    --primary: #000;
    --secondary: #15181C;
    --search: #202327;
    /* --white: #D9D9D9; */
    --gray: #7A7A7A;
    --outline: #2F3336;
    --retweet: #00C06B;
    --like: #E8265E;
    --twitter: #33A1F2;
    --twitter-dark-hover: #011017;
    --twitter-light-hover: #2C8ED6;
    --background: #FAFAFA;
    --background-content:#E9ECEF;
    --wine: #D61E29;
    --yellow: #FAC600;

    --white: #ffffff;
    --border-input: #F1EFEF;


    --new-background: #f7f7f7;
    --text-body: #1E1E1E;
    --tab-yellow: #FFC62D;
  }
`;
