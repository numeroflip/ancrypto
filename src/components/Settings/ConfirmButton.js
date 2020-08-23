import React from 'react'
import styled from 'styled-components'
import { AppContext } from '../App/AppProvider'

const ConfirmButton = styled.button`
    outline: 0;
    border: 0;
    margin: var(--m) auto;
    color: var(--color-text-negative);
    background-color: var(--color-main-dark);
    padding: var(--m);
    display: flex;
    justify-content: center;
    font-weight: 500;
    border-radius: var(--radius);
    cursor: pointer;
    transition: ease .2s all;
    font-size: 1.2rem;
    box-shadow: var(--shadow);

    &:hover {
        background-color: var(--color-main-darker);
        color: var(--color-text-negative);
    }
`

export default function () {

    return(
       
        <AppContext.Consumer>
            {({favourites, confirmFavourites}) => 
            <ConfirmButton onClick={confirmFavourites}>Confirm Favourites {favourites}</ConfirmButton>
            }
        </AppContext.Consumer>
 
    )
}