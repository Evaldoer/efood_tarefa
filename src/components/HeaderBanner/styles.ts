import styled from "styled-components"
import { cores } from "../../styles"

export const Imagem = styled.div`
  width: 100%;
  height: 186px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 16px;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    gap: 8px;
  }
`

export const Text = styled.h3`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.rose};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const Banner = styled.div`
  width: 100%;
  height: 280px;
  color: ${cores.branca};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 16px;
    justify-content: center;
    background-position: center;
    text-align: center;
  }
`

export const TextBanner = styled.p`
  padding-top: 25px;
  font-size: 32px;
  font-weight: 100;
  padding-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 20px;
    padding-top: 0;
    padding-bottom: 4px;
    text-align: center;
  }
`

export const RestaurantName = styled.p`
  font-size: 32px;
  font-weight: 900;
  width: 672px;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 24px;
    text-align: center;
  }
`
