import React, {useContext} from 'react'
import Page from '../Shared/Page'
import PriceGrid from './PriceGrid'
import CoinSpotlight from './CoinSpotlight'
import styled from 'styled-components'
import PriceChart from './PriceChart'
import {DataContext} from '../contexts'


const ChartGrid = styled.div`
  display: grid;
  padding-top: var(--xl);
  grid-gap: var(--m);
  grid-template-columns: 1fr 3fr;
  align-items: center;
  justify-content: center;
`


const Dashboard = () => {

  const {favourites} = useContext(DataContext)

  return (
    <Page name="dashboard">
      {
        favourites.length 
        ? (
          <>
            <PriceGrid />
            <ChartGrid>
              <CoinSpotlight />
              <PriceChart />
            </ChartGrid>
          </>
        )        
        : <h2>Please select your favourite coins from the Settings page</h2>
      }
    </Page>
  )

}

export default Dashboard