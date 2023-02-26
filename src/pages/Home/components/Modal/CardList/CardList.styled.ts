import styled from "styled-components";

export const CardListContainer = styled.div`
  width: 100%;
  padding: .5rem 0;
  font-family: var(--fontFamily);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > p {
    text-align: center;
    font-size: .8rem;
    color: var(--tertiary_text_color);
  }
`;