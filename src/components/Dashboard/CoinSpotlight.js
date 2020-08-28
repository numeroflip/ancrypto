import React, { useContext } from 'react'
import { Tile, CoinImage } from '../Shared'
import { DataContext } from '../contexts'
import styled from 'styled-components'

const SpotTile = styled(Tile)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow);
  max-width: var(--max-width);
  margin: 0 auto;
`

const SpotLightName = styled.h2`
  margin-bottom: var(--m);
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