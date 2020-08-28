import highChartConfig from './HighChartsConfig'
import React, {useContext} from 'react'
import {Tile} from '../Shared'
import {DataContext} from '../contexts'
import ReactHighcharts from 'react-highcharts'
import styled from 'styled-components'
import HighChartsTheme from './HighChartsTheme'

ReactHighcharts.Highcharts.setOptions(HighChartsTheme)


const PriceTile = styled(Tile)`
  box-shadow: var(--shadow);
`
const Title = styled.h3`
  margin: var(--m);
  text-align: center;
`
export default function () {

  const {historicalData, currFavourite} = useContext(DataContext);

  return (
    <PriceTile>
      {
      historicalData
      ? <Title>{currFavourite}</Title> 
      : <Title>Loading</Title>
    }
    <ReactHighcharts config={highChartConfig(historicalData)} />
    </PriceTile>
  )
}