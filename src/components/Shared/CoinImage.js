import React from 'react'
import styled from 'styled-components'

const CoinImage = styled.img`
    grid-row: 1 / 3;
    align-self: center;
    justify-self: center;
`

export default function ({ coin , style}) {
    return (

            <CoinImage
                alt={coin.CoinSymbol}
                style={style || {height: '50px'}}
                src={`http://cryptocompare.com/${coin.ImageUrl}`}
            />
    )
}

