import React, {useState } from 'react'

export const AppContext = React.createContext();

export default ({children}) => {
    const [page, setPage] = useState('dashboard');
    const [favourites, setFavourites] = useState('');
    const [firstVisit, setFirstVisit] = useState(localStorage.getItem('ancrypto' ? false : true))

    const savedSettings = () => {
        let appData = JSON.parse(localStorage.getItem('ancrypto'));
        if(appData) { setFirstVisit(false)}

    }

    const confirmFavourites = () => {
        console.log('I am a genius')
        setPage('dashboard');
        setFirstVisit(false)
        localStorage.setItem('ancrypto', JSON.stringify({test: 'hello'}))
    }

    return (
    <AppContext.Provider value={{page, setPage, favourites, confirmFavourites, firstVisit}}>{children}</AppContext.Provider>
    )
}