import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #fcfcfc;
    /* background: var(--new-background); */
    --webkit-font-smoothing: antialiased;
    font-family: 'Poppins';
  }

  #root {
    height: 100vh;
    width: 100vw;
    display: flex;
  }

  html { 
    @media (max-width: 1080px){
      font-size: 93.75%;
    }
    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  body, input, button {
    font-size: 1rem;
    color: var(--text-body);
  }

  button{
    cursor: pointer;
  }

  :root {
    --primary: #000;
    --secondary: #15181C;
    --search: #202327;
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
    --yellow: #FFBA01;

    --white: #ffffff;
    --border-input: #F1EFEF;


    --new-background: #f7f7f7;
    --text-body: #1E1E1E;
    --tab-yellow: #FFBA01;
  }

  #mainContainer {
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
  }
`;
