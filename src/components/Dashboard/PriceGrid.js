import React, {useContext} from 'react'
import { DataContext } from '../contexts'
import styled from 'styled-components'
import PriceTile from './PriceTile'
import {breakPoints} from '../Shared'

const PriceGrid = styled.div`
  margin: var(--xl) auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  justify-content: center;
  grid-gap: var(--m);
  align-items: center;

  @media( min-width: ${breakPoints.maxWidth}) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media( max-width: ${breakPoints.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    margin-bottom: 0;
    padding-bottom: 0;
  }
  @media( max-width: ${breakPoints.smallMobile}) {
    grid-template-columns: 1fr 1fr;
  }
`


export default function () {
  const { prices } = useContext(DataContext)
  return(
    <PriceGrid>
      
      {prices && prices.map((priceObj, index) => {
        return(
          <PriceTile index={index} key ={'PXKT-' + index} priceObj={priceObj} />
        )
      })}
    </PriceGrid>
  )
}

