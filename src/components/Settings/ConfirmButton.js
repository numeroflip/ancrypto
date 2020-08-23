import React from 'react'
import styled from 'styled-components'
import { AppContext } from '../App/AppProvider'

const ConfirmButton = styled.div`
    margin: 20px;
    color: green;
    cursor: pointer;
`

export default function () {

    return(
       
        <AppContext.Consumer>
            {({favourites, confirmFavourites}) => 
            <ConfirmButton onClick={confirmFavourites}>Bob {favourites}</ConfirmButton>
            }
        </AppContext.Consumer>
 
    )
}