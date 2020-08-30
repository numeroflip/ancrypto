import React from 'react'
import styled, {css} from 'styled-components'
import { breakPoints } from './GlobalTheme'


export const CoinImg = styled.img`
  grid-area: img;
  align-self: center;
  justify-self: center;
  max-height: 50px;
  height: 10vw;

  @media( max-width: ${breakPoints.smallMobile}) {
    justify-self: start;
  }

  @media( hover : none ) {
    justify-self: start;
  }

  ${props => props.spotlight && css`
    height: 15vw;
    max-height: 200px;
    grid-row: auto;
    grid-template-columns: 1fr;


  `}

`

export const CoinImage = ({ coin , spotlight }) => {
  return (
    <CoinImg
      spotlight={spotlight}
      alt={coin.CoinSymbol}
      src={`https://www.cryptocompare.com${coin.ImageUrl}`}
    />
  )
}

