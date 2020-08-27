import React, { useContext } from 'react'
import { DataContext } from '../contexts'

export default function () {

    const { firstVisit } = useContext(DataContext)
    
    return firstVisit 
        ? <h1>Welcome to Ancrypto. Select your favourite coins to begin.</h1>
        : <h1>You have been here already</h1>               
    
}