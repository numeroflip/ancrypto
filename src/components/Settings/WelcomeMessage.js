import React, { useContext } from 'react'
import { AppContext } from '../App/AppProvider'

export default function () {

    const { firstVisit } = useContext(AppContext)
    
    return firstVisit 
        ? <h1>Welcome to Ancrypto. Select your favourite coins to begin.</h1>
        : <h1>You have been here already</h1>               
    
}