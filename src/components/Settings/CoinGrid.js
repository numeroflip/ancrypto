import React from 'react'
import styled from 'styled-components'
import { AppContext } from '../App/AppProvider'
import CoinTile from './CoinTile'


const Grid = styled.div`
    margin: var(--xl) auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, .8fr));
    justify-content: center;
    grid-gap: 1rem;
    align-items: center;

`

function displayCoins(coinList, topSection, favourites) {
    const KeyList = topSection 
        ? favourites 
        : Object.keys(coinList).slice(0, 100)

    return KeyList.map((coinKey, i) => {

        return topSection 
        ? <CoinTile topSection remove  key={i} coinKey={coinKey} /> 
        :  favourites.includes(coinKey)
            ? <CoinTile disabled={true}  key={i} coinKey={coinKey} />
            : <CoinTile key={i} coinKey={coinKey} />
    })

}

export default function CoinGrid({topSection}) {
    return (
        <AppContext.Consumer>
            {({ coinList, favourites }) => 
            <Grid>
                {displayCoins( coinList, topSection, favourites )}
            </Grid>}
        </AppContext.Consumer>
    )
}