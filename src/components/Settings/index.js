import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import CoinGrid from './CoinGrid'
import Search from './Search'
import {DataContext} from '../contexts'
import {H2,  SubHeading} from '../Shared'


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

const Settings = () => {

  const {coinList, favourites} = useContext(DataContext)
  const [filteredCoins, setFilteredCoins] = useState([])

    return coinList && (
      <>
        <FavouritesHeader>
          <H2>Your Favourites</H2>
          <SubHeading>You can choose up to 10 favourites.</SubHeading>
          {!favourites.length && <EmptyText>Hmm... It looks quite empty here. Please search, or choose from the list below.</EmptyText>}
        </FavouritesHeader>
          <CoinGrid  topSection/>
          <Search setFilteredCoins={setFilteredCoins} />
          {coinList 
            ? <CoinGrid filteredCoins={filteredCoins} /> 
            : <div>Loading Coins</div>}
      </>
    )

}

export default Settings