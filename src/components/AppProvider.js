import React, {useState} from 'react'

export const AppContext = React.createContext();

export default ({children}) => {

    const [page, setPage] = useState('dashboard');

    return (
    <AppContext.Provider value={{page, setPage}}>{children}</AppContext.Provider>
    )
}