import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background-menu);
    /* background: var(--new-background); */
    --webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
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

  body, button {
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

    --wine: #D61E29;
    --yellow: #FFBA01;

    --white: #ffffff;
    --border-input: #F1EFEF;

    --text-body: #1E1E1E;
    --background-content:#f7f7f7;
    --background-menu: #fcfcfc;

  }

  #mainContainer {
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
  }
`;
