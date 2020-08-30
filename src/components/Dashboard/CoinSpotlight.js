import React, { useContext } from 'react'
import { Tile, CoinImage } from '../Shared'
import { DataContext } from '../contexts'
import styled from 'styled-components'
import {breakPoints} from '../Shared'


const SpotLightName = styled.h2`
  grid-area: title;
  justify-self: center;
  margin: var(--m);
`

const SpotTile = styled(Tile)`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas: "title" "img";
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr;

  box-shadow: var(--shadow);
  max-width: var(--max-width);
  margin: 0 auto;

  @media( max-width: ${breakPoints.tablet}) {
    width: auto;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

  }
`



const CoinSpotlight = () => {

  const {currFavourite, coinList} = useContext(DataContext)
  
  return currFavourite
    ? (
      <SpotTile>
          <SpotLightName> 
            {coinList[currFavourite].CoinName}
          </SpotLightName>
          <CoinImage spotlight coin={coinList[currFavourite]} />
      </SpotTile>
    )
    : <div>Nothing here</div>
}

export default CoinSpotlight