import React from 'react'
import styled, {css} from 'styled-components'
import {SelectableTile} from '../Shared'

const numFormat = number => {
  return +(String(number)).slice(0, 7)
}

const PriceTileStyled = styled(SelectableTile)`

  display: grid;
  grid-template-columns: 1fr 1fr;

  ${props => props.compact && css`
    font-size: var(--l);
  `}
`

const Price = styled.div`
  font-size: var(--l);
  font-weight: 700;
`

const ChangePct = styled.div`
  justify-self: end;
  color: var(--color-success-dark);

  ${props => props.down && css`
    color: var(--color-danger-dark);
  `}

`

const Symbol = styled.div`
  font-size: var(--m);
  font-weight: 700;
`

const PriceTile = ({priceObj, index}) => {
  const sym = Object.keys(priceObj)[0]
  const data = priceObj[sym]['USD']

  return (
    <PriceTileStyled compact={index < 4}>
      <Symbol>{sym}</Symbol>

      <ChangePct down={+data.CHANGEPCT24HOUR < 0} >{numFormat(data.CHANGEPCT24HOUR)}%</ChangePct>
      <Price>&#36;{numFormat(data.PRICE)}</Price>
    </PriceTileStyled>
  )

}


export default PriceTile