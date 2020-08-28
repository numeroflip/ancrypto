import React from 'react'
import styled, {css} from 'styled-components'

export const CoinImg = styled.img`
  grid-row: 1 / 3;
  align-self: center;
  justify-self: center;
  height: 50px;

  ${props => props.spotlight && css`
    height: 200px;
  `}
`

export const CoinImage = ({ coin , style, spotlight }) => {
  return (
    <CoinImg
      spotlight={spotlight}
      alt={coin.CoinSymbol}
      src={`http://cryptocompare.com/${coin.ImageUrl}`}
    />
  )
}

