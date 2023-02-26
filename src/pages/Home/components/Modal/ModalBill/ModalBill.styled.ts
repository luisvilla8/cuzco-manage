import styled from "styled-components";

type SelectButtonProps = {
  isSelected: boolean
}

export const SelectButton = styled.button<SelectButtonProps>`
  background-color: ${props => props.isSelected ? 'var(--rowColor)' : 'var(--bgInputColor)'};
  border-radius: .5rem;
  border: ${props => props.isSelected ? '1px solid var(--primary_bg_color)' : 'none'};
  width: 100%;
  padding: 1rem;
  margin: 0 0 1rem;
  text-align: left;
  font-family: var(--fontFamily);
  color: var(--textSecondColor);
  font-weight: 400;
  cursor: pointer;

  :hover {
    background-color: var(--primary_bg_color);
  }
`;

export const PreviewButtonsContainer = styled.div`
  position: fixed;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 2rem;
`

export const CancelPreviewButton = styled.button`
  font-size: .8rem;
  padding: 0.5rem 0.75rem;
  background-color: var(--bgInputColor);
  border-radius: .5rem;
  border: none;
  display: inline-grid;
  place-items: center;
  cursor: pointer;
  transition: all .3s ease;
  font-family: var(--fontFamily);
  
  &:nth-of-type(1) {
    color: var(--titleModalColor);
  }
  &:nth-of-type(2) {
    background-color: var(--primary_color);
  }
  &:hover {
    background-color: var(--primarySecondColor);
  }
  &:nth-of-type(2):hover {
    background-color: var(--primary_color);
    box-shadow: 0px 0px 50px -5px var(--primary_color);
  }
`

export const SubContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: .5rem;

  & > button {
    padding: .25rem .5rem;
    width: fit-content;
    margin: 0;
  }
`

export const BodyContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
`

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 2rem;

  & > a {
    display: none;
  }

  & > button:nth-of-type(1) {
    width: 80%;
    padding: 0.7rem 0;
    margin-right: 1rem;
    border-radius: .5rem;
    border: none;
    display: inline-grid;
    place-items: center;
    background-color: var(--primary_color);
    font-weight: 900;
    font-size: .8rem;
    font-family: var(--fontFamily);
    color: var(--primarySecondColor);
    cursor: pointer;
    transition: all .3s ease;
  }
  & > button:nth-of-type(1):hover {
    box-shadow: 0px 0px 50px -5px var(--primary_color);
  }
  & > button:nth-of-type(1).is_disabled{
    opacity: .5;
    cursor: no-drop;
  }
  & > button:nth-of-type(1).is_disabled:hover {
    box-shadow: none;
  }

  & > button:nth-of-type(2) {
    font-size: 1.5rem;
    color: var(--titleModalColor);
    padding: 0.5rem 0.75rem;
    background-color: var(--primarySecondColor);
    border-radius: .5rem;
    border: none;
    display: inline-grid;
    place-items: center;
    cursor: pointer;
    transition: all .3s ease;
  }
  & > button:nth-of-type(2):hover {
    background-color: var(--bgInputColor);
  }
`

export const ListNumbers = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  & > input {
    background-color: var(--bgInputColor);
    width: 1.6rem;
    height: 1.6rem;
    border: none;
    border-color: var(--primary_bg_color);
    border-radius: 0.35rem;
    text-align: center;
    font-weight: 900;
    color: var(--titleModalColor);
    transition: all .2s ease;
  }
  @media screen and (min-width: 480px) {
    & > input {
      width: 2rem;
      height: 2rem;
    }
  }
  & > input.isCompleted {
    background-color: var(--rowColor);
    border: 2px solid var(--primary_bg_color);
  }
  & > input::-webkit-outer-spin-button,
  & > input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  & > input[type=number] {
    -moz-appearance: textfield;
  }
`