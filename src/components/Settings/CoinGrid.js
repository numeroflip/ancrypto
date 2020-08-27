import React, { useContext } from 'react'
import styled from 'styled-components'
import { DataContext } from '../contexts'
import CoinTile from './CoinTile'


const Grid = styled.div`
    max-width: var(--max-width);
    margin: var(--xl) auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, .8fr));
    justify-content: center;
    grid-gap: 1rem;
    align-items: center;

`

function getLowerSectionCoins(coinList, filteredCoins) {
    let allLength = Object.keys(coinList).length;
    return (Object.keys(filteredCoins).length > 0) 
        ? Object.keys(filteredCoins).slice(0, 100)
        : coinList.slice(0, 100)
}

function displayCoins(coinList, topSection, favourites, filteredCoins) {
    const KeyList = topSection 
        ? favourites 
        : getLowerSectionCoins(coinList, filteredCoins)

    return KeyList.map((coinKey, i) => {

        return topSection 
        ? <CoinTile topSection remove  key={`${coinKey}GZDN`} coinKey={coinKey} /> 
        :  favourites.includes(coinKey)
            ? <CoinTile disabled={true}  key={`${coinKey}BRGGD`} coinKey={coinKey} />
            : <CoinTile key={`${coinKey}DRMKL`} coinKey={coinKey} />
    })

}

export default function CoinGrid({topSection, sortedCoins}) {

    const {  favourites, filteredCoins } = useContext(DataContext);

    return (
        <Grid>
            {displayCoins( sortedCoins, topSection, favourites, filteredCoins )}
        </Grid>
    )
}