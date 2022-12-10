import styled from "styled-components";

export const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HomeTitle = styled.div`
  color: var(--textSecondColor);
  text-align: center;
  margin: 6rem auto 4rem;
  h4 {
    font-weight: 400;
  }
  h1 {
    color: var(--primary_text_color);  
    font-weight: 900;
    font-size: clamp(2rem, 15vw, 5rem);
  }
`;