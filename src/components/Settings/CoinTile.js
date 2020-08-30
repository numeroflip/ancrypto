import { SelectableTile } from '../Shared'
import React, { useContext } from 'react'
import CoinSymbol from './CoinSymbol'
import styled, { css } from 'styled-components'
import { DataContext } from '../contexts'
import { CoinImage, breakPoints } from '../Shared'

function clickCoinHandler(topSection, coinKey, addCoin, removeCoin) {
    return topSection 
        ? () => {removeCoin(coinKey)}
        : () => {addCoin(coinKey)}
}

const CoinTitle = styled.div`
    grid-area: title;
    overflow: hidden;
    font-size: var(--m);
    font-weight: 700;

`
export const CoinTile = styled(SelectableTile)`
    position: relative;
    display: grid;
    grid-template-areas: "img title" "img sym";
    grid-template-columns: auto 1fr;
    align-items: center;
    justify-items: start;
    grid-gap: var(--s);

    @media (hover: none) and (max-width: ${breakPoints.smallMobile}) {
      justify-items: start;
      grid-template-areas: "title title" "img sym";

      ${CoinSymbol} {
        font-size: var(--ms);
      }

    }

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
        background: ${props => props.remove ? 'var(--color-danger)' : 'var(--color-success-dark)'};
        opacity: 0;
        transition: ease .2s all;

    }

    @media( hover: none ) {
      border: none;
      overflow: visible;
      margin: 0;
      padding-left: 3rem;
      border: 0;

      &:after {
        font-size: ${props => props.remove ? 'var(--l)' : 'var(--xl)'};
        opacity: 1;
        color: ${props => props.remove ? 'var(--color-danger)' : 'var(--color-success-dark)'};
        font-weight: 700;
        border: 2px solid ${props => props.remove ? 'var(--color-danger)' : 'var(--color-success-dark)'};
        height: var(--l);
        width: var(--m);
        background: transparent;
        border-radius: 1rem;
        bottom: 0;
        left: 0;
        bottom: var(--m);
      }
    }


    ${props => props.disabled && (css`
        opacity: 0.3;
        pointer-events: none;
    `)}



        &:hover {

            border-color: ${props => props.remove && 'var(--color-danger)' };

          &:after {
            opacity: 1;
        }
    }
`

export default function({coinKey, remove, topSection, disabled}) {

    const { coinList, addCoin, removeCoin } = useContext(DataContext)
    const coin = coinList[coinKey]

    return (
                
        <CoinTile as="button" disabled={disabled} onClick={clickCoinHandler(topSection, coinKey, addCoin, removeCoin, )} remove={remove || false} url={coin.imageUrl} name={coin.CoinName} symbol={coin.Symbol}>
            <CoinImage coin={coin} />
            <CoinTitle>{coin.CoinName}</CoinTitle>
            <CoinSymbol>{coin.Symbol}</CoinSymbol>
        </CoinTile>
                
            

    )
};