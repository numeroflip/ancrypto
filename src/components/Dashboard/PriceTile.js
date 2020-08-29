import React, { useContext } from 'react'
import styled, {css} from 'styled-components'
import {SelectableTile} from '../Shared'
import { DataContext } from '../contexts'

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 5
});



const numFormat = (number) => {
  // return +number.toPrecision(precision)
  return formatter.format(number)
}
const percFormat = (percent) => {
  return Math.round(percent.toFixed(3)*1000)/1000

}

const PriceTileStyled = styled(SelectableTile)`
  border: 0;
  opacity: 0.8;
  box-shadow: var(--shadow);
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  width: 100%;
  border-left: var(--s) solid transparent;
  ${props => props.noData && css`
    pointer-events: none;
    opacity: 0.3;
    background-color: var(--color-secondary-light);
    height: 100%;
    box-shadow: none;

      ${Price} {
        font-weight: 400;
      }


  `}

  &:hover {
    border-color: var(--color-main-dark);
    opacity: 1;
    transform: scale(1.05);
  }

  ${props => props.compact && css`
    font-size: var(--l);
  `}

  ${props => props.currFavourite && css`
    opacity: 1;
    pointer-events: none;
    box-shadow: var(--shadow);
    border-color: var(--color-main-dark);
    transform: scale(1.05);

  `}
`

const Price = styled.div`
  justify-self: start;

  font-size: ${props => props.noData ? 'var(--m)' : 'var(--mx)'};
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
  font-weight: 500;
`

const TopBar = styled.div`
  grid-column: 1/3;
  display: flex;
  align-items: center;
  justify-content: space-between;
`


const PriceTile = ({priceObj, index}) => {

  const {currFavourite, setCurrFavourite} = useContext(DataContext)
  
  const sym = Object.keys(priceObj)[0]
  // Handling if there is no price data
  const isData = !priceObj[sym].noData
  const data = isData ? priceObj[sym]['USD'] : {CHANGEPCT24HOUR: false, PRICE: false }



  return (
    <PriceTileStyled noData={!isData} as='button' onClick={() => setCurrFavourite(sym)} currFavourite={sym === currFavourite} compact={index < 4}>
      <TopBar>
        <Symbol>{sym}</Symbol>
        <ChangePct down={+data.CHANGEPCT24HOUR < 0} >{isData && `${percFormat(data.CHANGEPCT24HOUR)}%`}</ChangePct>
      </TopBar>
      <Price noData={!isData}>{isData ? numFormat(data.PRICE) : 'No data'}</Price>
    </PriceTileStyled>
  )

}


export default PriceTile