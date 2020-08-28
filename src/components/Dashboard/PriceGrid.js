import React, {useContext} from 'react'
import { DataContext } from '../contexts'
import styled from 'styled-components'
import PriceTile from './PriceTile'

const PriceGrid = styled.div`
  max-width: var(--max-width);
  margin: var(--xl) auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, .8fr));
  justify-content: center;
  grid-gap: 1rem;
  align-items: center;
`


export default function () {
  const { prices } = useContext(DataContext)

  return(
    <PriceGrid>
      {prices.map((priceObj, index) => {
        return(
          <PriceTile index={index} key ={'bobobob' + index} priceObj={priceObj} />
        )
      })}
    </PriceGrid>
  )
}

