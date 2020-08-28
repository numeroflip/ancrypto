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

export default function () {



  return (
    <PriceTile>
      <ReactHighcharts config={highChartConfig()} />
    </PriceTile>
  )
}