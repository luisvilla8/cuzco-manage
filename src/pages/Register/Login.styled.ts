import styled from 'styled-components';

export const LoginContainer = styled.section`
  display: flex;
  align-items: flex-end;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  & picture {
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
    animation: imgAnimation 40s ease-in-out infinite;
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
  /* background-color: var(--primary_bg_color); */
  background-color: var(--primary_bg_color);
  border-radius: 1rem 1rem 0 0;
  display: flex;
  flex-direction: column;
  width: clamp(20rem, 100vw, 30rem);
  z-index: 999;
  overflow: hidden;
  padding: calc(var(--padding_container_y)*2) var(--padding_container_x);

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

  @media screen and (min-width: 480px) {
    border-radius: 1rem;
    padding-right: 3rem;
    padding-left: 3rem;
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
