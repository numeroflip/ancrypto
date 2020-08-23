import React, {useState, useEffect} from 'react'
import cc from 'cryptocompare'
cc.setApiKey('6bce00cebd36b06c07f20e0e94c2a0fe1b0211dc0a8a8dc030f6fb8b4117f707')
export const AppContext = React.createContext();

export default ({children}) => {
    
    const [page, setPage] = useState('settings');
    const [favourites, setFavourites] = useState('');
    const [firstVisit, setFirstVisit] = useState(localStorage.getItem('ancrypto') ? false : true)
    const [coinList, setCoinList] = useState(null)
    
    
    const fetchCoins = async () => {
        let coins = await cc.coinList()
        coins = coins.Data
        try {return coins}
        catch(e) {console.log(e)}
    }

    useEffect( () => {

            fetchCoins()
            .then(coins => setCoinList(coins))
        
}, [])



    const confirmFavourites = () => {
        console.log('I am a genius')
        setPage('dashboard');
        setFirstVisit(false)
        localStorage.setItem('ancrypto', JSON.stringify({test: 'hello'}))
    }

    return (
    <AppContext.Provider value={{page, coinList, setPage, favourites, confirmFavourites, firstVisit}}>{children}</AppContext.Provider>
    )
}