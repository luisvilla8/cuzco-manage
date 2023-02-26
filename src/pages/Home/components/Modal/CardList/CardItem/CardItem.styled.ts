import styled from "styled-components";

export const CardItemContainer = styled.div`
  width: 100%;
  padding: 1rem;
  font-family: var(--fontFamily);
  color: var(--tertiary_text_color);
  background-color: var(--primary_bg_color);
  border-radius: .8rem;

  display: flex;
  justify-content: space-between;

  & > div:nth-of-type(1) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
  & > div:nth-of-type(2) {
    & > button {
      & > svg {
        font-size: 1.5rem;
      }
      position: relative;
      top: -.5rem;
      right: -.5rem;
    }
    position: relative;
  }
`;

export const CardItemName = styled.p`
  font-family: var(--fontFamily);
  margin-bottom: .8rem;
  font-size: .9rem;
  font-weight: 600;
  display: block;
  width: 100%;
  text-align: left !important;
  color: var(--textSecondColor);
`;
export const CardItemQty = styled.div`
  font-size: .8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .5rem;
`;
export const CardItemPrice = styled.p`
  font-size: .8rem;
  padding: 0.25rem 0;

  & > span {
    text-align: center;
  }
`;
export const CardItemTotalPrice = styled.p`
  font-size: .9rem;
  color: var(--primary_text_color);
  text-align: right;
  position: absolute;
  bottom: .25rem;
  right: 0;
  width: 5rem;
  font-weight: 600;
`;
export const QtyEditor = styled.div`
  font-size: .9rem;
  display: flex;
  align-items: baseline;
  padding: .25rem 0;

  & > input {
    width: 1.5rem;
    text-align: center;
    background-color: transparent;
    border: none;
    color: var(--textSecondColor);
  }
  & > input::-webkit-outer-spin-button,
  & > input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  & > input[type=number] {
  -moz-appearance: textfield;
  }

  & > button:nth-of-type(1) {
    width: 1.2rem;
    background-color: var(--bgInputColor);
    border-radius: .25rem 0 0 .25rem;
    border: 1px solid var(--primary_color);
    color: var(--primary_color);
    margin-right: .25rem;
  }
  & > button:nth-of-type(2) {
    width: 1.2rem;
    background-color: var(--bgInputColor);
    border-radius: 0 .25rem .25rem 0;
    border: 1px solid var(--primary_color);
    color: var(--primary_color);
    margin-left: .25rem;
  }
`;