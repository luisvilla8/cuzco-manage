import styled from "styled-components";

export const Search = styled.div`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--primary_color);
  width: 100%;
  padding: 1rem;
  margin: 1rem 0 2rem;
  display: flex;
  align-items: center;
  font-family: var(--fontFamily);
  font-weight: 600;
  color: var(--textSecondColor);
  position: relative;
  
  svg {
    color: var(--primary_color);
  }
  
  input {
    color: var(--textSecondColor);
    background-color: transparent;
    font-size: .8rem;
    margin-left: 1rem;
    border: none;
  }

  & > span {
    position: absolute;
    right: 0;
    bottom: -1.5rem;
    color: var(--textSecondColor);
    font-size: .8rem;
    font-weight: 400;
  }
`;