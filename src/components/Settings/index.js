import React, { useEffect, useContext } from 'react'
import WelcomeMessage from './WelcomeMessage'
import Page from '../Shared/Page'
import CoinGrid from './CoinGrid'
import Search from './Search'
import {DataContext} from '../contexts'

const sortCoinList = (cList) => {
  let sortedCoinList = []
  Object.keys(cList).forEach(key => {
    let coinObj = cList[key]
    const order = +coinObj['SortOrder'] -1
    sortedCoinList[order] = coinObj['Symbol']
  })
  return sortedCoinList
}
let sortedCoins = [];

const Settings = () => {

  const {coinList} = useContext(DataContext)
  useEffect(() => {
    sortedCoins = sortCoinList(coinList)
  }, [coinList])
    return (
        <Page name="settings">
            <WelcomeMessage />
            <CoinGrid  topSection/>
            <Search />
            <CoinGrid sortedCoins={sortedCoins} />
        </Page>
    )

}

export default Settings