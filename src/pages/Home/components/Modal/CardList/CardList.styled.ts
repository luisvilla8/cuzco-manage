import styled from "styled-components";

export const CardListContainer = styled.div`
  width: 100%;
  padding: .5rem 0;
  font-family: var(--fontFamily);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  max-height: 10rem;
  padding-right: 0.5rem;
  overflow-y: auto;

  & > p {
    text-align: center;
    font-size: .8rem;
    color: var(--tertiary_text_color);
  }

  @media screen and (min-width: 480px) {
    & {
      max-height: max-content;
      padding-right: 0rem;
    }
  }
`;