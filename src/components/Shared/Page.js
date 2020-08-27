import React, { useContext } from 'react'
import {DataContext} from '../contexts'

export default function ({name, children}) {

    const { page } = useContext(DataContext)

    return  page === name
        ? <div>{children}</div>
        : null

    
}