import styled from "styled-components";

export const PriceSectionContainer = styled.div`
  width: clamp(10rem, 30% ,20rem);
  padding: 1rem .5rem;
  font-family: var(--fontFamily);
  display: flex;
  flex-direction: column;
  float: right;

  & > input[type=range] {
    margin-bottom: .5rem;
  }
`;

export const FieldGroup = styled.div`
  margin: .25rem 0;
  color: var(--textSecondColor);
  font-size: .8rem;
  display: flex;
  justify-content: space-between;

  &:nth-of-type(3) {
    color: var(--primary_text_color);
    font-weight: 500;
    font-size: 1rem;
  }
`