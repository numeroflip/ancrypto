import styled from 'styled-components'
import React, { useContext } from 'react'
import { breakPoints } from '../Shared/GlobalTheme'
import fuzzy from 'fuzzy'
import { DataContext } from '../contexts'
import _ from 'lodash'
import {H2} from '../Shared'


const Title = styled(H2)`
    font-size: var(--xl);
    margin: var(--xl) 0;
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
    border: 1px solid transparent;
    padding: var(--m) var(--l);
    box-shadow: var(--shadow);
    border-radius: var(--radius);
    margin-bottom: var(--l);
    color: var(--color-main-darker);
    font-size: var(--mx);
    background: var(--color-background);

    &:focus {
        border-color: var(--color-main-darker)
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

    fuzzyResults = allStringsToSearch.filter(item => item.toLowerCase().includes(userQuery.toLowerCase()))

    let filteredCoins = _.pickBy(coinList, (result, symkey) => {
        let coinName = result.CoinName;
        return fuzzyResults.includes(symkey) || fuzzyResults.includes(coinName)
        })


    setFilteredCoins(filteredCoins);
    

}, 300)

function filterCoins(e, setFilteredCoins, coinList) {
    const userQuery = e.target.value;
    handleFilter(userQuery, coinList, setFilteredCoins);
}

const Search = () => {
    const { setFilteredCoins, coinList } = useContext(DataContext)
        
    return (
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

export default Search