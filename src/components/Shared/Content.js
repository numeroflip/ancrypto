import React, { useContext } from 'react'
import { DataContext } from '../contexts'

export default ({children}) => {

  const { coinList } = useContext(DataContext)

  return !coinList 
    ? <div>Loading Coins...</div>
    : <div>{children}</div>
}