import { SelectableTile } from '../Shared/Tile'
import React from 'react'
import CoinSymbol from './CoinSymbol'
import styled, { css } from 'styled-components'
import { AppContext } from '../App/AppProvider'
import CoinImage from '../Shared/CoinImage'


const CoinTitle = styled.div`
 font-size: 1.3rem;
 font-weight: 500;
`
export const CoinTile = styled(SelectableTile)`
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;

        &:hover {

            border-color: ${props => props.remove ? 'var(--color-danger-dark)' : 'var(--color-success-dark)'};
            /* background: ${props => props.remove ? 'var(--color-danger)' : 'var(--color-success)'}; */

        &:after {
            position: absolute;
            border-radius: var(--radius);
            bottom: var(--xs);
            right: var(--xs);
            height: var(--m);
            width: var(--m);
            color: var(--color-text-negative);
            font-size: var(--m);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            content: ${props => props.remove ? '"x"' : '"✓"'};
            padding: var(--s);
            background: ${props => props.remove ? 'var(--color-danger-dark)' : 'var(--color-success-dark)'};


        }
    }
`

const MetaWrapper = styled.div`
    margin-left: var(--m);
`


export default function({coinKey, remove}) {
    return (
        <AppContext.Consumer>
            {({coinList}) => {
                const coin = coinList[coinKey]
                console.log(coinList)
                console.log('coinKey', coinKey)
                return (
                    <CoinTile remove={remove || false} url={coin.imageUrl} name={coin.CoinName} symbol={coin.Symbol}>
                        <CoinImage coin={coin} />
                            <MetaWrapper>
                                <CoinTitle>{coin.CoinName}</CoinTitle>
                                <CoinSymbol>{coin.Symbol}</CoinSymbol>
                            </MetaWrapper>
                    </CoinTile>
                )
            }}
        </AppContext.Consumer>
    )
};