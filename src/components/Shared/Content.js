import React from 'react'
import { AppContext } from '../App/AppProvider'

export default ({children}) => {
    return (
        <AppContext.Consumer>
            {({ coinList }) => !coinList 
                ? <div>Loading Coins...</div>
                : <div>{children}</div>}
            
        </AppContext.Consumer>
    )
}