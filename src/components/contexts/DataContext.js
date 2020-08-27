import React, { useState, useEffect } from 'react'
import cc from 'cryptocompare'


cc.setApiKey('6bce00cebd36b06c07f20e0e94c2a0fe1b0211dc0a8a8dc030f6fb8b4117f707')

const MAX_FAVOURITES = 10;

export const DataContext = React.createContext();


export const DataProvider = ({children}) => {

  // ==============STATE========================
  const [page, setPage] = useState('dashboard');
  const [firstVisit, setFirstVisit] = useState(localStorage.getItem('ancrypto') ? false : true)
  const [favourites, setFavourites] = useState(firstVisit ? [] : getFavsFromLocal());
  const [currFavourite, setCurrFavourite] = useState(favourites.length > 0 ? favourites[0] : null)
  const [coinList, setCoinList] = useState(null)
  const [filteredCoins, setFilteredCoins] = useState([])
  const [prices, setPrices] = useState(null);

  function getFavsFromLocal() {
    let data = JSON.parse(localStorage.getItem('ancrypto'))
    let favs = data.favourites;
    return favs ? favs : []
  }

  const addCoin = coinKey => {
    if((favourites.length < MAX_FAVOURITES ) && !favourites.includes(coinKey)) {
      setFavourites([...favourites, coinKey]);
    }
  }
  const updateFavsInLocalStorage = (favourites) => {
    localStorage.setItem('ancrypto', JSON.stringify({favourites, currFavourite}))
  }

  // Write favourites into localstorage
  useEffect(() => updateFavsInLocalStorage(favourites), [favourites])

  // Fetch Coin data at startup
  useEffect(() => {
    const fetchCoins = async () => {
      let coins = await cc.coinList()
      coins = coins.Data
      try {return coins}
      catch(e) {console.log(e)}
  }
    const updateStateWithCoins = async () => {
      const coins = await fetchCoins()
      setCoinList(coins)
    }           

    updateStateWithCoins()

  }, [])

  // Fetch the pices of favourites
  useEffect(() => {
      
    const fetchPrices = async (coinsArr) => {
        
      const returnData = [];
      coinsArr.forEach(async (coin) => {
        try {
            let priceData = await cc.priceFull(coin, 'USD');
            returnData.push(priceData)
        } catch(e) { console.error('Fetch price error: ', e) }
      })
      return returnData
        
    }
    const updatePrices = async (coinsArr) => {
      let newPrices = await fetchPrices(coinsArr)
      setPrices(newPrices)
    }
    updatePrices(favourites) 
  },[favourites])



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
      firstVisit,
      prices
    }
  }>{children}</DataContext.Provider>
  )
}