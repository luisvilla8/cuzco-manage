import styled from "styled-components";

export const MainContainer = styled.div`
  padding: var(--paddingContainerSM);
  overflow: hidden;
  @media (min-width: 768px) {
    padding: var(--paddingContainerMD);
  }
`