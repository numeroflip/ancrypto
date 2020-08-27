import React, { useContext } from 'react'
import {AppContext} from '../App/AppProvider'

export default function ({name, children}) {
    console.log('(((Rendering page)))')

    const { page } = useContext(AppContext)

    return  page === name
        ? <div>{children}</div>
        : null

    
}