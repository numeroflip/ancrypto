import { SelectableTile } from '../Shared/Tile'
import React from 'react'
import CoinSymbol from './CoinSymbol'
import styled, { css } from 'styled-components'
import { AppContext } from '../App/AppProvider'
import CoinImage from '../Shared/CoinImage'

function clickCoinHandler(topSection, coinKey, addCoin, removeCoin) {
    console.log('clickCoinHandler fired')
    return topSection 
        ? () => {removeCoin(coinKey)}
        : () => {addCoin(coinKey)}
}

const CoinTitle = styled.div`
 font-size: var(--mx);
 font-weight: 500;
`
export const CoinTile = styled(SelectableTile)`
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    ${props => props.disabled && (css`
        opacity: 0.3;
        pointer-events: none;
    `)}
    /* opacity: ${props => props.disabled ? '0.5' : '1'}; */

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
    text-align: left;
    vertical-align: center;
    `


export default function({coinKey, remove, topSection, disabled}) {
    return (
        <AppContext.Consumer>
            {({coinList, addCoin, removeCoin}) => {
                const coin = coinList[coinKey]
                return (
                    <CoinTile as="button" disabled={disabled} onClick={clickCoinHandler(topSection, coinKey, addCoin, removeCoin, )} remove={remove || false} url={coin.imageUrl} name={coin.CoinName} symbol={coin.Symbol}>
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