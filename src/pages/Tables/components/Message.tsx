import { ReactNode } from "react";
import { MessageStyled } from "../styled-components";

interface Prop {
  children: ReactNode;
}

export const Message = ({ children }: Prop) => {
  return (
    <MessageStyled>
      {children}
    </MessageStyled>
  );
}
