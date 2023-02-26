import styled from "styled-components";

type ContainerProps = {
  onClick: Function | any
}

export const Container = styled.div<ContainerProps>`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--bgInputColor);
  width: 100%;
  padding: 1rem;
  text-align: left;
  font-family: var(--fontFamily);
  font-size: .8rem;
  color: var(--textSecondColor);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  
  :hover {
    border-radius: .5rem;
    background-color: var(--primary_bg_color);
  }
`;

export const TopText = styled.p`
  width: 100%;
  display: block;
  padding-bottom: .25rem;
  font-size: .7rem;
`
export const LeftText = styled.p`
  text-align: left;
  color: var(--textColor);
`
export const RightText = styled.p`
  text-align: right;
`