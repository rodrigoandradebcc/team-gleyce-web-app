import { createGlobalStyle, keyframes } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const modalTransition = keyframes`
  from{
    transform: translate3d(0, -100%, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;

const drawerTransition = keyframes`
  from{
    transform: translate3d(100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;

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

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-drawer-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
  }

  .react-modal-content {
    width: 100%;

    background: var(--background);

    padding: 44px 48px;
    transition: bottom 0.3s ease-out;


    position: relative;
    border-radius: 0.24rem;
  }

  .react-drawer-content {
    width: 100%;

    background: var(--background);

    padding: 44px 48px;
    transition: bottom 0.3s ease-out;


    position: relative;
    border-radius: 0.24rem;
  }

  .ReactModal__Content {
    animation: ${modalTransition} ease 400ms;
  }

  .drawer-content {
    animation: ${drawerTransition} ease 400ms;
  }

  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 200ms ease-in-out;    
  }

  .ReactModal__Overlay--after-open{
    opacity: 1;
  }

  .ReactModal__Overlay--before-close{
    opacity: 0;
  }
 
`;
