import React from 'react'
import styled from 'styled-components'
import { AppContext } from '../App/AppProvider'
import CoinTile from './CoinTile'
const Grid = styled.div`
    margin: var(--xl) auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 250px));
    justify-content: center;
    grid-gap: 1rem;
    align-items: center;

`

export default function CoinGrid({topSection}) {
    const count = topSection ? 10 : 100
    return (
        <AppContext.Consumer>
            {({ coinList }) => 
            <Grid>
                {Object.keys(coinList).slice(0, count).map((coinKey, i) => 
                    topSection
                        ? <CoinTile remove  key={i} coinKey={coinKey} />
                        : <CoinTile  key={i} coinKey={coinKey} />
                    
                )}
            </Grid>}
        </AppContext.Consumer>
    )
}