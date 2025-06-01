import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 80px;
  row-gap: 32px;
  padding: 56px 16px;
  justify-content: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 24px;
    padding: 40px 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 16px;
    padding: 24px 16px;
    justify-items: center;
  }
`;
