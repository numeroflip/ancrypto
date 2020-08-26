import React, { useContext } from 'react'
import {AppContext} from '../App/AppProvider'

export default function ({name, children}) {

    const { page } = useContext(AppContext)

    return  page === name
        ? <div>{children}</div>
        : null

    
}