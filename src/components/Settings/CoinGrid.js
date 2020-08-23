import React from 'react'
import styled from 'styled-components'
import { AppContext } from '../App/AppProvider'
import { SelectableTile } from '../Shared/Tile'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 1rem;
`
const AddTile = styled(SelectableTile)`
    &:hover {
        border-color: var(--color-success-dark);
        background: linear-gradient(to bottom right, #7aee9766, #7aee9766)

    }
`

const RemTile = styled(SelectableTile)`
    &:hover {
        border-color: var(--color-danger);
        background: linear-gradient(to top left, transparent, red)
    }
`
export default function CoinGrid() {
    return (
        <AppContext.Consumer>
            {({ coinList }) => 
            <Grid>
                {Object.keys(coinList).slice(0,100).map((key, i) => <AddTile key={i}>{key}</AddTile>)}
            </Grid>}
        </AppContext.Consumer>
    )
}