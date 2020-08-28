import React from 'react'
import Page from '../Shared/Page'
import PriceGrid from './PriceGrid'
import CoinSpotlight from './CoinSpotlight'
import styled from 'styled-components'
import PriceChart from './PriceChart'


const ChartGrid = styled.div`
  display: grid;
  padding-top: var(--xl);
  grid-gap: var(--m);
  grid-template-columns: 1fr 3fr;
  align-items: center;
  justify-content: center;
`


const Dashboard = () => {

  return (
    <Page name="dashboard">
      I'm Dashboard
      <PriceGrid />
      <ChartGrid>
        <CoinSpotlight />
        <PriceChart />
      </ChartGrid>
    </Page>
  )

}

export default Dashboard