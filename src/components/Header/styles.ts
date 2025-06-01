import styled from "styled-components"
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  padding: 0 16px;
  text-align: center;

  @media (max-width: 768px) {
    height: auto;
    padding: 40px 16px 60px;
    margin-bottom: 40px;
  }
`

export const Logo = styled.img`
  max-width: 100%;
  height: auto;

  @media (max-width: 768px) {
    max-width: 140px;
    margin-bottom: 24px;
  }
`

export const TextHeader = styled.p`
  font-weight: bold;
  font-size: 36px;
  line-height: 100%;
  color: ${cores.rose};
  margin-top: 40px;
  max-width: 550px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-top: 16px;
  }
`