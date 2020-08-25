import styled from 'styled-components'
import React, { useState, useCallback, useEffect, useRef } from 'react'
import { breakPoints } from '../Shared/GlobalTheme'
import fuzzy from 'fuzzy'
import { AppContext } from '../App/AppProvider'
import _ from 'lodash'


const Title = styled.h2`
    color: var(--color-main-darker);
    font-size: var(--xl);
`
const Form = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;

`

const SearchInput = styled.input`
    border: 0;
    border: 1px solid var(--color-secondary-light);
    padding: var(--m) var(--l);
    box-shadow: var(--shadow);
    border-radius: var(--radius);
    margin: var(--s) 0;
    font-size: var(--mx);

    &:focus {
        border-color: var(--color-main)
    }

    @media(max-width: ${breakPoints.mobile}) {
        width: 100%;
    }
`


const handleFilter = _.debounce((userQuery, coinList, setFilteredCoins) => {

    if (!userQuery) {setFilteredCoins([]); return null}
//  Get all the coin symbols
    const coinSymbols = Object.keys(coinList)
// // Get all the coin names and map symbol to name

    const coinNames = coinSymbols.map(sym => coinList[sym].CoinName)
    let allStringsToSearch = coinSymbols.concat(coinNames) // A list of both symbols and names to search  
    let fuzzyResults = fuzzy
        .filter(userQuery, allStringsToSearch, {})
        .map(result => result.string)

    let filteredCoins = _.pickBy(coinList, (result, symkey) => {
        let coinName = result.CoinName;
        return fuzzyResults.includes(symkey) || fuzzyResults.includes(coinName)
        })
    setFilteredCoins(filteredCoins);
    

}, 500)


function filterCoins(e, setFilteredCoins, coinList) {
    const userQuery = e.target.value;
    handleFilter(userQuery, coinList, setFilteredCoins);
}







const Search = () => {
        
    return (
        <AppContext.Consumer>
            {({setFilteredCoins, coinList}) => {
                return(
                    <Form>
                        <Title>Search</Title>
                        <SearchInput
                            onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList)}
                            name="searc"
                            placeholder="search"
                            />
                    </Form>

                )
            }
            }
        </AppContext.Consumer>

    
    )
}

export default Search