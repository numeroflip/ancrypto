import React from 'react'
import {AppContext} from '../App/AppProvider'

export default function ({name, children}) {
    return (
        <AppContext.Consumer>
            {({page}) => 
                page === name
                    ? <div>{children}</div>
                    : null
            }
        </AppContext.Consumer>
    )
}