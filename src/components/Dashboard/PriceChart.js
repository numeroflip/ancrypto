import highChartConfig from './HighChartsConfig'
import React, {useContext} from 'react'
import {Tile} from '../Shared'
import {DataContext} from '../contexts'
import ReactHighcharts from 'react-highcharts'
import styled from 'styled-components'
import HighChartsTheme from './HighChartsTheme'
import ChartSelect from './ChartSelect'

ReactHighcharts.Highcharts.setOptions(HighChartsTheme)


const PriceTile = styled(Tile)`
  box-shadow: var(--shadow);
`
const Title = styled.h3`
  text-align: center;
  margin: var(--m);
`
const TopBar = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  justify-content: center;
`

const ChartWrapper = styled.div`
  .highcharts-color-0 {
	fill: var(--color-main-dark);
	stroke: var(--color-main-darker);
}
.highcharts-color-0 text {

	stroke: black;

}

`
export default function () {

  const {historicalData, currFavourite, historicalInterval, setHistoricalInterval} = useContext(DataContext);

  return (
    <PriceTile>
      <TopBar>
        <Title>{historicalData ? currFavourite : 'Loading...'}</Title>
        <ChartSelect 
          defaultValue={historicalInterval}
          onChange={e => setHistoricalInterval(e.target.value)}
          >
          <option value='days'>Days</option>
          <option value='weeks'>Weeks</option>
          <option value='months'>Months</option>
          <option value='years'>Years</option>
        </ChartSelect>
      </TopBar>
      <ChartWrapper>
        <ReactHighcharts config={highChartConfig(historicalData)} />
      </ChartWrapper>
    </PriceTile>
  )
}