import { SelectableTile } from '../Shared/Tile'
import React, { useContext } from 'react'
import CoinSymbol from './CoinSymbol'
import styled, { css } from 'styled-components'
import { DataContext } from '../contexts'
import { CoinImage } from '../Shared/CoinImage'

function clickCoinHandler(topSection, coinKey, addCoin, removeCoin) {
    return topSection 
        ? () => {removeCoin(coinKey)}
        : () => {addCoin(coinKey)}
}

const CoinTitle = styled.div`
    overflow: hidden;
    font-size: var(--m);
    font-weight: 700;
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

    &:after {
        position: absolute;
        border-radius: var(--radius);
        bottom: var(--xs);
        right: var(--xs);
        height: var(--m);
        width: var(--m);
        color: var(--color-text-negative);
        font-size: ${props => props.remove ? 'var(--m)' : 'var(--l)'};
        display: flex;
        align-items: center;
        justify-content: center;
        content: ${props => props.remove ? '"X"' : '"+"'};
        padding: var(--s);
        background: ${props => props.remove ? 'var(--color-danger)' : 'var(--color-success)'};
        opacity: 0;
        transition: ease .2s all;

    }
        &:hover {

            border-color: ${props => props.remove && 'var(--color-danger)' };
            /* background: ${props => props.remove ? 'var(--color-danger)' : 'var(--color-success)'}; */
        &:after {
            opacity: 1;
        }
    }
`

const MetaWrapper = styled.div`
    margin-left: var(--m);
    text-align: left;
    vertical-align: center;
    `


export default function({coinKey, remove, topSection, disabled}) {

    const { coinList, addCoin, removeCoin } = useContext(DataContext)
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
};