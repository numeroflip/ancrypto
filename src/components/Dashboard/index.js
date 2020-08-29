import React, {useContext} from 'react'
import Page from '../Shared/Page'
import PriceGrid from './PriceGrid'
import CoinSpotlight from './CoinSpotlight'
import styled from 'styled-components'
import PriceChart from './PriceChart'
import {DataContext} from '../contexts'
import {H1} from '../Shared'


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

  const Wrapper = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  `

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
        : <Wrapper>
            <H1>Welcome!<br/><br/>To begin, please select your favourite coins from the <span>Settings</span> page.</H1>
          </Wrapper>
      }
    </Page>
  )

}

export default Dashboard