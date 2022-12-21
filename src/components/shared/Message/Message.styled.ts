import styled from "styled-components";

type MessageProps = {
  type: string;
}

export const MessageContainer = styled.div<MessageProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: .5rem 2rem;
  position: fixed;
  z-index: 9999;
  top: 2rem;
  right: 50%;
  transform: translate(50%, 0);
  background-color: var(--primary_color);
  background-color: ${({ type }) => type === "success" ? "var(--primary_color)" : "var(--red)"};
  border-radius: .5rem;
`;