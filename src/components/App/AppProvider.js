import React, {useState, useEffect} from 'react'
import cc, { price } from 'cryptocompare'
import { render } from '@testing-library/react';
import { filter } from 'lodash';
cc.setApiKey('6bce00cebd36b06c07f20e0e94c2a0fe1b0211dc0a8a8dc030f6fb8b4117f707')
export const AppContext = React.createContext();

const MAX_FAVOURITES = 10;

export default ({children}) => {

    // ==============STATE========================
    const [renderCount, setRenderCount] = useState(null);
    const [page, setPage] = useState('dashboard');
    const [firstVisit, setFirstVisit] = useState(localStorage.getItem('ancrypto') ? false : true)
    const [favourites, setFavourites] = useState(firstVisit ? [] : getFavsFromLocal());
    const [coinList, setCoinList] = useState(null)
    const [filteredCoins, setFilteredCoins] = useState([])
    const [prices, setPrices] = useState([]);

    console.log('BUBUBUOBIUBIUB=================================')
    console.log('renderCount: ', renderCount)
    // console.log('---page')
    // console.log(page)
    // console.log('---firstVisit')
    // console.log(firstVisit)
    // console.log('---favourites')
    // console.log(favourites)
    console.log('---coinList')
    console.log(coinList)
    console.log('---filteredCoins')
    console.log(filteredCoins)
    console.log('---prices')
    console.log(prices)
    

    function getFavsFromLocal() {
        let data = JSON.parse(localStorage.getItem('ancrypto'))
        let favs = data.favourites;
        return favs ? favs : []
    }
    
    const fetchCoins = async () => {
        console.log('=============FETCHCOIN HAPPENED===============')
        let coins = await cc.coinList()
        coins = coins.Data
        try {return coins}
        catch(e) {console.log(e)}
    }
    
    const getPrices = async () => {
        const returnData = [];
        favourites.forEach(async favourite => {
            try {
                let priceData = await cc.priceFull(favourite, 'USD');
                returnData.push(priceData)
            } catch(e) { console.warn('Fetch price error: ', e) }
        })
        
        console.log('***returnData')
        console.log(returnData)
        return returnData
    }
    const fetchPrices = async () => {
        let prices = await getPrices()
        console.log('***prices')
        console.log(prices)
        setPrices(prices)
    }
    


    const addCoin = coinKey => {
        if((favourites.length < MAX_FAVOURITES ) && !favourites.includes(coinKey)) {
            setFavourites([...favourites, coinKey]);
        }
    }
    const updateFavsInLocalStorage = (favourites) => {
        localStorage.setItem('ancrypto', JSON.stringify({favourites}))
    }

    useEffect(() => {setRenderCount(renderCount + 1)}, [page, firstVisit, favourites, coinList, filteredCoins, prices])

    // Write favourites into localstorage
    useEffect(() => updateFavsInLocalStorage(favourites), [favourites])

    // Fetch Data at startup
    useEffect( () => {
            setRenderCount(0)
            fetchCoins()
            .then(coins => setCoinList(coins))
            .then (() =>fetchPrices())
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