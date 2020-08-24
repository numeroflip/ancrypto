import styled from 'styled-components';
import React from 'react'
import CoinImage from './CoinSymbol'
import CoinTile from './CoinTile' 


const Grid = styled.div`
    display: grid;
    grid-gap: var(--m);
    grid-template-columns: 50px 1fr;
`

const CoinItem = ({name, symbol}) => (
    <Grid>
        <CoinImage>{symbol}</CoinImage>
        <CoinTile>
        </CoinTile>
    </Grid>
)

export default CoinItem;