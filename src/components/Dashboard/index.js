import React, {useContext} from 'react'
import PriceGrid from './PriceGrid'
import CoinSpotlight from './CoinSpotlight'
import styled from 'styled-components'
import PriceChart from './PriceChart'
import {DataContext} from '../contexts'
import {H1, breakPoints} from '../Shared'


const ChartGrid = styled.div`
  width: 100%;
  display: grid;
  padding-top: var(--xl);
  grid-gap: var(--m);
  grid-template-columns: 1fr 3fr;
  align-items: center;
  justify-content: center;

  @media( max-width: ${breakPoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const FirstVisitorMessage = () => {
  return (
    <H1>
      Welcome!<br/><br/>
      To begin, please select your favourite coins from the Settings page.
    </H1>
  )
}


const Dashboard = () => {

  const {favourites, coinList, prices} = useContext(DataContext)

  if (!favourites.length) {return <FirstVisitorMessage />}
  else if (!coinList) {return <p>Loading Coins...</p>}
  else if (!prices || prices.length !== favourites.length) {return <p>Loading Prices...</p>}
  else {
    return (
      <>
        <PriceGrid />
        <ChartGrid>
          <CoinSpotlight />
          <PriceChart />
        </ChartGrid>
      </>
    )}
}

export default Dashboard