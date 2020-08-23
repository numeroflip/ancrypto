import React from 'react'
import styled from 'styled-components'
import { AppContext } from '../App/AppProvider'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
`

export default function CoinGrid() {
    return (
        <AppContext.Consumer>
            {({ coinList }) => 
            <Grid>
                {Object.keys(coinList).map((key, i) => <div key={i}>{key}</div>)}
            </Grid>}
        </AppContext.Consumer>
    )
}