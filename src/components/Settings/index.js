import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import Page from '../Shared/Page'
import CoinGrid from './CoinGrid'
import Search from './Search'
import {DataContext} from '../contexts'
import {H2,  SubHeading} from '../Shared'

const sortCoinList = (cList) => {
  let sortedCoinList = []
  Object.keys(cList).forEach(key => {
    let coinObj = cList[key]
    const order = +coinObj['SortOrder'] -1
    sortedCoinList[order] = coinObj['Symbol']
  })
  return sortedCoinList
}

const EmptyText = styled(SubHeading)`
  font-size: var(--mx);
  margin: var(--xxl) 0;
` 
const FavouritesHeader = styled.div`
  width :100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
let sortedCoins = [];

const Settings = () => {

  const {coinList, favourites} = useContext(DataContext)
  const [filteredCoins, setFilteredCoins] = useState([]);

  useEffect(() => {
    sortedCoins = sortCoinList(coinList)
  }, [coinList])
    return (
        <Page name="settings">
          <FavouritesHeader>
            <H2>Your Favourites</H2>
            <SubHeading>You can choose up to 10 favourites.</SubHeading>
            {!favourites.length && <EmptyText>Hmm... It looks quite empty here. Please search, or choose from the list below.</EmptyText>}
          </FavouritesHeader>
            <CoinGrid  topSection/>
            <Search setFilteredCoins={setFilteredCoins} />
            <CoinGrid sortedCoins={sortedCoins} filteredCoins={filteredCoins} />
        </Page>
    )

}

export default Settings