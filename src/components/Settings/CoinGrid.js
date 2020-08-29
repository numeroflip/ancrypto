import React, { useContext } from 'react'
import styled from 'styled-components'
import { DataContext } from '../contexts'
import CoinTile from './CoinTile'
import {breakPoints} from '../Shared'


const Grid = styled.div`
    max-width: var(--max-width);
    margin: var(--xl) auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, .8fr));
    justify-content: center;
    grid-gap: var(--l);
    align-items: center;

    @media( max-width: ${breakPoints.tablet}) {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr))
  }

    @media( max-width: ${breakPoints.smallMobile}) {
      grid-template-columns: 1fr 1fr;
    }

`

function getLowerSectionCoins(coinList, filteredCoins) {
    return (Object.keys(filteredCoins).length > 0) 
        ? Object.keys(filteredCoins).slice(0, 100)
        : coinList.slice(0, 100)
}

function displayCoins(coinList, topSection, favourites, filteredCoins) {
    let keyList = topSection
      ? favourites
      : getLowerSectionCoins(coinList, filteredCoins)

    return keyList.map((coinKey) => {

        return topSection 
          ? <CoinTile topSection remove  key={`${coinKey}GZDN`} coinKey={coinKey} /> 
          :  favourites && favourites.includes(coinKey)
              ? <CoinTile disabled={true}  key={`${coinKey}BRGGD`} coinKey={coinKey} />
              : <CoinTile key={`${coinKey}DRMKL`} coinKey={coinKey} />
    })

}


export default function CoinGrid({ topSection, filteredCoins}) {

    const { favourites, sortedCoins} = useContext(DataContext);

    return (
        <Grid>
            {displayCoins(sortedCoins, topSection, favourites, filteredCoins )}
        </Grid>
    )
}