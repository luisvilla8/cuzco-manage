import styled from 'styled-components';

export const LoginContainer = styled.section`
  display: flex;
  align-items: flex-end;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  & picture.cover {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  & picture.cover img {
    animation: imgAnimation 40s ease-in-out infinite;
    filter: blur(2px);
  }

  & picture.logo {
    margin: 1rem 0 2rem;
  }
  & picture.logo img {
    width: 2.5rem;
    height: 2.5rem;
  }

  @keyframes imgAnimation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    } 
    100% {
      transform: scale(1);
    } 
  }

  @media screen and (min-width: 480px) {
    display: grid;
    place-items: center;
  }
`;

export const LoginContent = styled.div`
  background: linear-gradient(98.11deg,rgba(26,26,26,0) 11.77%,rgba(26,26,26,0.479167) 22.06%,#000000 53.23%);
  /* background-color: var(--primary_bg_color); */
  border-radius: 2rem 2rem 0 0;
  display: flex;
  flex-direction: column;
  width: clamp(20rem, 100vw, 30rem);
  z-index: 999;
  overflow: hidden;
  padding: calc(var(--padding_container_y)*1.5) var(--padding_container_x);
  position: relative;
  padding-top: 35vh;
  height: 100%;

  & h1 {
    color: var(--primary_text_color);
    padding: 0 0 1rem 0;
    font-size: 2rem;
  }
  & p {
    color: var(--secondary_text_color);
    padding: 0 0 2rem 0;
    font-size: .8rem;
  }

  & button {
    padding: .7rem 0;
    background-color: var(--primary_color);
    border-radius: .25rem;
    font-weight: 900;
    text-transform: uppercase;
    margin: 2rem 0;
    border: none;
    cursor: pointer;
  }

  & button:hover {
    box-shadow: 0 0 20px 5px var(--primary_color);
    transition: box-shadow .2s ease;
  }

  & span {
    display: block;
    color: var(--secondary_text_color);
    padding: .15rem 0;
    font-size: .7rem;
  }

  & a:hover {
    color: var(--primary_text_color);
    transition: color .3s ease;
  }
  
  & .copyright {
    margin: 0 auto;
    text-align: center;
    margin: 2rem 0 0;
  }

  @media screen and (min-width: 480px) {
    border-radius: 0;
    padding-right: 3rem;
    padding-left: clamp(15rem,48vw,30rem);
    padding-top: 10rem;
    width: 100%;
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
  }
  @media screen and (min-width: 1024px) {
    border-radius: 0;
    padding-right: 3rem;
    padding-left: clamp(15rem, 60vw, 60rem);
    padding-top: 10rem;
    width: 100%;
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
  }
`;

export const InputGroup = styled.div`
  display: block;
  width: 100%;
  margin: .5rem 0;
  
  & input {
    width: 100%;
    padding: 1rem;
    border-radius: .5rem;
    border: none;
    background-color: var(--secondary_bg_color);
    color: var(--primary_text_color);
    margin-top: .25rem;
  }
  & input:focus {
    border: 2px solid var(--primary_color);
  }
  & input:focus ~ label {
    color: var(--primary_text_color);
  }
  & label {
    color: var(--secondary_text_color);
    font-size: .8rem;
  }
`;
