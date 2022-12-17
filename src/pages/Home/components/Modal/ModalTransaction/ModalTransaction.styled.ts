import styled from "styled-components";

export const ModalTransactionContainer = styled.div`

`;

export const ModalSubtitle = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  color: var(--tertiary_text_color);

  button {
    background-color: transparent;
    color: var(--tertiary_text_color);
    outline: none;
    border: none;
    border: 1px solid var(--tertiary_text_color);
    border-radius: .25rem;
    padding: 0 .5rem;
    cursor: pointer;
  }

  button:hover {
    background-color: var(--primary_color);
    transition: background-color .2s ease;
  }
`;

export const ListProducts = styled.ul`
  margin-top: 1rem;
  color: var(--tertiary_text_color);

  & > span {
    font-size: .8rem;
    opacity: .8;
  }
`;