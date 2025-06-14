import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerFood = styled.div`
  max-width: 320px;
  width: 100%;
  background-color: ${cores.rose};
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  div {
    padding: 8px;
  }

  @media (max-width: 767px) {
    max-width: 100%;
  }
`

export const ImagemFood = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  padding-top: 8px;
`

export const TitleFood = styled.h4`
  font-size: 16px;
  font-weight: 900;
  padding-bottom: 8px;
  color: ${cores.branca};

  @media (max-width: 767px) {
    text-align: center;
  }
`

export const DescriptionFood = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding-bottom: 8px;
  color: ${cores.branca};

  @media (max-width: 767px) {
    text-align: center;
  }
`
