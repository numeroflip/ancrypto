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
const Wrapper = styled.div`
height: 60vh;
display: flex;
align-items: center;
justify-content: center;
`

const Dashboard = () => {

  const {favourites, coinList} = useContext(DataContext)

  return  !favourites.length 
    ? <Wrapper>
        <H1>Welcome!<br/><br/>To begin, please select your favourite coins from the <span>Settings</span> page.</H1>
      </Wrapper>
    : coinList 
      ? <>
          <PriceGrid />
          <ChartGrid>
            <CoinSpotlight />
            <PriceChart />
          </ChartGrid>
        </>
      : <p>Loading Coins...</p>
    
}

export default Dashboard