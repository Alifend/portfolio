import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
* { font-family: 'Roboto', sans-serif }

/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: var(--color-gray-100) var(--color-gray-300);
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 11px;
  }

  *::-webkit-scrollbar-track {
    background:  var(--color-gray-300);
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--color-gray-100);
    border-radius: 10px;
    border: 0px solid #ffffff;
  }

html{
overflow-y: auto;
scrollbar-gutter: stable;


  //scroll behavior smooth
  
    //colors
    --color-gray-100 : #3a3b3f;
    --color-gray-200 : #2e2e34;
    --color-gray-300 : #202020;
    --color-gray-400 : rgba(255, 255, 255, 0.624);
    --color-purple-100:#8464f0;
    --color-purple-200:rgb(110, 75, 226);

    --color-green-100:#45d282;
    --color-green-200 : #8aeeb5;
    //fonts
    --font-size-1: 1.2rem;
    --font-size-3: 1.6rem;
    --font-size-4: 1.8rem;
    --font-size-5: 2.4rem;
    --font-size-6: 3.2rem;
    --font-size-7: 4.8rem;
    --font-size-10: 2.5rem;
    --font-size-11: 1.5rem;
    --font-size-12: 1.15rem;
    --font-size-13: 1rem;
    --font-size-14: 1.25rem;
    --font-size-15: 1.4rem;
    --font-size-16: 0.8rem;

    
    --font-weight-1: 400;
    --font-weight-2: 600;
    --font-weight-300: 300;
    --font-weight-500: 500;
    --font-weight-3: 700;

    }
    body{
        background-color: #333 ;

    }

    * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        color: white;
    }

    button{
        cursor: pointer;
    }


`;
