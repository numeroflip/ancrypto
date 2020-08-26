import React, { useContext } from 'react'
import { AppContext } from '../App/AppProvider'

export default ({children}) => {

    const { coinList } = useContext(AppContext)

    return !coinList 
        ? <div>Loading Coins...</div>
        : <div>{children}</div>
}