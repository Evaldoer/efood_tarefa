import styled from "styled-components";
import { cores } from "../../styles";

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 32px;
    gap: 32px;
    padding-top: 56px;
    color: ${cores.bege};
    padding-bottom: 120px;

    @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 32px 16px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.rose};
  margin-bottom: 16px;
`
