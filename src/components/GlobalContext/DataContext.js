import React, {useState, useEffect} from 'react'
import cc, { price } from 'cryptocompare'
cc.setApiKey('6bce00cebd36b06c07f20e0e94c2a0fe1b0211dc0a8a8dc030f6fb8b4117f707')

const MAX_FAVOURITES = 10;

export const DataContext = React.createContext();


export default ({children}) => {

    // ==============STATE========================
 
    const [coinList, setCoinList] = useState(null)
    const [prices, setPrices] = useState([]);

    console.log('DATA PROVIDER=================================')



    
 
    
    const getPrices = async () => {
        const returnData = [];
        favourites.forEach(async favourite => {
            try {
                let priceData = await cc.priceFull(favourite, 'USD');
                returnData.push(priceData)
            } catch(e) { console.warn('Fetch price error: ', e) }
        }) 
        return returnData
    }

    


    const addCoin = coinKey => {
        if((favourites.length < MAX_FAVOURITES ) && !favourites.includes(coinKey)) {
            console.log('----SetFavourites----')
            setFavourites([...favourites, coinKey]);
        }
    }
    const updateFavsInLocalStorage = (favourites) => {
        console.log('---UpdateFavsInLocalStorage---')
        localStorage.setItem('ancrypto', JSON.stringify({favourites}))
    }

    useEffect(() => {
        console.warn('////Some Data changed (Or init when first called)////')
        console.log('---coinList' , coinList)
        console.log('---filteredCoins', filteredCoins)
        console.log('---prices', prices)
        console.log('---favourites: ', favourites)
    }, [page, firstVisit, favourites, coinList, filteredCoins, prices])
    // Write favourites into localstorage
    useEffect(() => updateFavsInLocalStorage(favourites), [favourites])

    const fetchPrices = async () => {
        let prices = await getPrices()
        console.log('***prices, fetchedPrices: ', prices)
        return prices
    }
    // Fetch Data at startup
    useEffect( () => {

        const fetchCoins = async () => {
            console.log('=============FETCHCOIN HAPPENED===============')
            let coins = await cc.coinList()
            console.log('==COINS ARRIVED==')
            coins = coins.Data
            try {return coins}
            catch(e) {console.log(e)}
        }



        async function initData() {
            console.warn('////--STARTER DATA--////')
            console.log('====STARTUP==== (fetchCoins and fetchPrices)')
            console.log('==> fetching coins')
            const coins = await fetchCoins();
            console.log('//coins fetched')
            console.log('==> fetching prices')
            console.log('// Prices are fetched')
            const prices = await fetchPrices()
            setCoinList(coins)
            console.log('// Coins are set')
            setPrices(prices);
            console.log('==> Prices are set')
        }

            initData()
    }, [])


    const isInFavourites = (coinKey) => {
        return favourites.includes(coinKey)
    } 

    const removeCoin = coinKey => {
        setFavourites(favourites.filter(key => key !== coinKey))
    }


    return (
    <DataContext.Provider value={
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
    }>{children}</DataContext.Provider>
    )
}