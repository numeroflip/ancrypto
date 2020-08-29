import React from 'react'
import styled, {css} from 'styled-components'
import {breakPoints} from './'

export const CoinImg = styled.img`
  grid-row: 1 / 3;
  align-self: center;
  justify-self: center;
  max-height: 50px;
  height: 10vw;

  ${props => props.spotlight && css`
    height: 15vw;
    max-height: 200px;
    grid-row: auto;

    @media( max-width: ${breakPoints.tablet}) {
      align-self: start
    }
  `}
`

export const CoinImage = ({ coin , spotlight }) => {
  return (
    <CoinImg
      spotlight={spotlight}
      alt={coin.CoinSymbol}
      src={`http://cryptocompare.com/${coin.ImageUrl}`}
    />
  )
}

