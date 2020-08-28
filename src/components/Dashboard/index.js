import React from 'react'
import Page from '../Shared/Page'
import PriceGrid from './PriceGrid'
import CoinSpotlight from './CoinSpotlight'
import styled from 'styled-components'


const ChartGrid = styled.div`
  display: grid;
  margin-top: var(--l);
  grid-gap: var(--m);
  grid-template-columns: 1fr 3fr;
  align-items: center;
`


const Dashboard = () => {

  return (
    <Page name="dashboard">
      I'm Dashboard
      <PriceGrid />
      <ChartGrid>
        <CoinSpotlight />
        <div>Chart goes here</div>
      </ChartGrid>
    </Page>
  )

}

export default Dashboard