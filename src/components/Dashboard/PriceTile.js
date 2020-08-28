import React, { useContext } from 'react'
import styled, {css} from 'styled-components'
import {SelectableTile} from '../Shared'
import { DataContext } from '../contexts'

const numFormat = (number, precision = 7) => {
  return (String(number)).slice(0, precision)
}

const PriceTileStyled = styled(SelectableTile)`

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 100%;

  ${props => props.compact && css`
    font-size: var(--l);
  `}

  ${props => props.currFavourite && css`
    pointer-events: none;
    box-shadow: var(--shadow);
    border-color: var(--color-main-dark);
  `}
`

const Price = styled.div`
  justify-self: start;

  font-size: var(--l);
  font-weight: 700;
`

const ChangePct = styled.div`
  font-size: var(--m);
  justify-self: end;
  color: var(--color-success-dark);

  ${props => props.down && css`
    color: var(--color-danger-dark);
  `}

`

const Symbol = styled.div`
  justify-self: start;
  font-size: var(--m);
  font-weight: 700;
`


const PriceTile = ({priceObj, index}) => {
  
  const {currFavourite, setCurrFavourite} = useContext(DataContext)
  
  const sym = Object.keys(priceObj)[0]
  const data = priceObj[sym]['USD']



  return (
    <PriceTileStyled as='button' onClick={() => setCurrFavourite(sym)} currFavourite={sym === currFavourite} compact={index < 4}>
      <Symbol>{sym}</Symbol>
      <ChangePct down={+data.CHANGEPCT24HOUR < 0} >{numFormat(data.CHANGEPCT24HOUR, 5)}%</ChangePct>
      <Price>&#36;{numFormat(data.PRICE)}</Price>
    </PriceTileStyled>
  )

}


export default PriceTile