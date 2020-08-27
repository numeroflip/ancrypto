import React, { useContext } from 'react'
import { DataContext } from '../contexts'

export default ({children}) => {

  const { coinList, prices, firstVisit } = useContext(DataContext)

  return !coinList 
    ? <div>Loading Coins...</div>
    : !firstVisit && !prices 
      ? <div>Loading Prices...</div>
      : <div>{children}</div>
}