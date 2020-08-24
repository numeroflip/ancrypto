import React, {useState, useEffect} from 'react'
import cc from 'cryptocompare'
cc.setApiKey('6bce00cebd36b06c07f20e0e94c2a0fe1b0211dc0a8a8dc030f6fb8b4117f707')
export const AppContext = React.createContext();

const MAX_FAVOURITES = 10;

export default ({children}) => {

    // ==============STATE========================
    const [page, setPage] = useState('settings');
    const [firstVisit, setFirstVisit] = useState(localStorage.getItem('ancrypto') ? false : true)
    const [favourites, setFavourites] = useState(firstVisit ? [] : getFavsFromLocal());
    const [coinList, setCoinList] = useState(null)
    const [filteredCoins, setFilteredCoins] = useState([])
    
    function getFavsFromLocal() {
        let data = JSON.parse(localStorage.getItem('ancrypto'))
        let favs = data.favourites;
        return favs ? favs : []
    }
    
    const fetchCoins = async () => {
        let coins = await cc.coinList()
        coins = coins.Data
        try {return coins}
        catch(e) {console.log(e)}
    }

    const addCoin = coinKey => {
        if((favourites.length < MAX_FAVOURITES ) && !favourites.includes(coinKey)) {
            setFavourites([...favourites, coinKey]);
        }
    }
    const updateFavsInLocalStorage = (favourites) => {
        localStorage.setItem('ancrypto', JSON.stringify({favourites}))
    }
    // Write favourites into localstorage
    useEffect(() => updateFavsInLocalStorage(favourites), [favourites])

    // Fetch Data at startup
    useEffect( () => {
            fetchCoins()
            .then(coins => setCoinList(coins))
    }, [])


    const isInFavourites = (coinKey) => {
        return favourites.includes(coinKey)
    } 

    const removeCoin = coinKey => {
        setFavourites(favourites.filter(key => key !== coinKey))
    }

    const savedSettings = () => {
        let ancryptoData = JSON.parse(localStorage.getItem('ancrypto'))
        if (!ancryptoData) {setFavourites([]);}
    }


    return (
    <AppContext.Provider value={
        {
            page, 
            coinList, 
            setPage, 
            favourites,
            isInFavourites,
            setFavourites, 
            filteredCoins,
            setFilteredCoins,
            addCoin, 
            removeCoin, 
            firstVisit
        }
    }>{children}</AppContext.Provider>
    )
}