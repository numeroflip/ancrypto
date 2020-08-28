import React, { useContext } from 'react'
import { Tile, CoinImage } from '../Shared'
import { DataContext } from '../contexts'
import styled from 'styled-components'

const SpotTile = styled(Tile)`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr;

  box-shadow: var(--shadow);
  max-width: var(--max-width);
  margin: 0 auto;
`

const SpotLightName = styled.h2`
  justify-self: center;
  margin: var(--m);
`




const CoinSpotlight = () => {

  const {currFavourite, coinList} = useContext(DataContext)

  return (
  <SpotTile>
      <SpotLightName> 
        {coinList[currFavourite].CoinName}
      </SpotLightName>
      <CoinImage spotlight coin={coinList[currFavourite]} />
  </SpotTile>
  )
}

export default CoinSpotlight