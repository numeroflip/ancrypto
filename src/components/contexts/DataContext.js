import React, { useState, useEffect } from 'react'
import cc from 'cryptocompare'
import moment from 'moment'

cc.setApiKey('6bce00cebd36b06c07f20e0e94c2a0fe1b0211dc0a8a8dc030f6fb8b4117f707')

const MAX_FAVOURITES = 10;
const TIME_UNITS = 10; 

export const DataContext = React.createContext();

function getCurrFavourite(favourites) {
  if (!favourites.length) {return null}
  if (favourites.length) { return favourites[0]}
  let currFavInLocal = getFromLocal('currFavourite')
  if (currFavInLocal) {return currFavInLocal}
  else return null
}

function getFromLocal (item) {
  let data = JSON.parse(localStorage.getItem('ancrypto'))
  let answer = data ? data[item] : [];
  return answer
}

const fetchPrices = async (coinsArr) => {
        
  let returnData = [];
  try {
    coinsArr.forEach(async (coin) => {
      try {
          let priceData = await cc.priceFull(coin, 'USD');
          // Handle if there isn't any price data
          if (!priceData[coin]) {throw 'The API returned an empty object'}
          returnData.push(priceData)
      } catch(e) { 
        // Handling if there is no data. We use this in ../Dashboard/PriceTile.js
        returnData.push({
          [coin]: {
            noData: true
          }
        })
        console.warn('No price data for: ', coin, e) 
      }
    })
  } catch(e) {console.warn('Error during fetching prices :', e)}
  return returnData
    
}

const fetchCoins = async () => {
  try {
  let coins = await cc.coinList()
  coins = coins.Data
  return coins
  }
  catch(e) {console.error('Error during coin fetching: ',e)}
}

const historicalPromises = (currFavourite, interval) => {
  let promises = [];
  for (let i = TIME_UNITS; i > 0; i--) {
    const date = moment().subtract(i, interval).toDate()
    promises.push(
      cc.priceHistorical(
        currFavourite, 
        ['USD'], 
        date
    ))
  }
  return Promise.all(promises)

}

const fetchHistorical = async (currFavourite, interval) => {

  const results = await historicalPromises(currFavourite, interval)
  const historical = [
    {
      name: currFavourite,
      data: results.map((ticker, index) => [
        moment().subtract(TIME_UNITS - index, interval).valueOf(),
        ticker.USD
      ])
    }
  ]
  return historical
}

  const isDay = () => {
    const hour = new Date().getHours();
    return (hour <= 21 && hour >= 6) 
  }




  // ===================================================================
  // ==============================DATAPROVIDER=======================================================
  // ===================================================================
export const DataProvider = ({children}) => {

  // ======================STATE========================
  const [page, setPage] = useState('dashboard');
  const [favourites, setFavourites] = useState(getFromLocal('favourites'));
  const [currFavourite, setCurrFavourite] = useState(getCurrFavourite(favourites))
  const [coinList, setCoinList] = useState(null)
  const [prices, setPrices] = useState(null);
  const [historicalData, setHistoricalData] = useState([])
  const [historicalInterval, setHistoricalInterval] = useState("months")
  const [theme, setTheme] = useState(isDay() ? 'light' : 'dark' );



  // =============================================================
  // =======================EFFECTS===============================

  // --- STARTUP - init data
  // (Fetch the list of all the coins)
  useEffect(() => {

    const init = async () => {
      try {
         const coins = await fetchCoins()     // 1
        setCoinList(coins)
      } catch(e) {console.error('Error during startup coinList fetching: ', (e))}
    }    
    init()
  }, [])


  //--- Fetch prices of all the favourites
  useEffect(() => {
    const updatePrices = async (coinsArr) => {
      if (favourites.length) {
        let newPrices = await fetchPrices(coinsArr)
        setPrices(newPrices)
      }}
    updatePrices(favourites)  
  }, [favourites]);

  // --- Update historical prices if the selected, or the interval changes
  useEffect(() => {
    const updateHistoricalPrice = async () => {
      if (currFavourite) {
        try {
          const historical = await fetchHistorical(currFavourite, historicalInterval)
          setHistoricalData(historical)
        } catch(e) {console.error('Historical price fetching error: ', e)}
      }}
    setHistoricalData(null)
    updateHistoricalPrice()
  }, [currFavourite, historicalInterval])


  // Handle localstorage updates on change
  useEffect(() => {
    localStorage.setItem('ancrypto', JSON.stringify({
      favourites,
      currFavourite
    }))
  },[currFavourite, favourites])


  // ----------------------------ADD/REMOVE COIN-------------------------------
  const addCoin = coinKey => {
    console.log(coinKey)
    console.log(currFavourite)
    if(!currFavourite) {
      console.log(coinKey)
      console.log(!currFavourite)

      setCurrFavourite(coinKey)
    }

    if((favourites.length < MAX_FAVOURITES ) && !favourites.includes(coinKey)) {
      setFavourites([...favourites, coinKey]);
    }
  }
  const removeCoin = coinKey => {
    const updatedFavs = favourites.filter(key => key !== coinKey)
    if( favourites.includes(coinKey) ) {setCurrFavourite(updatedFavs[0])}
    setFavourites(updatedFavs)
  }
  // -----------------------------THEME TOGGLER--------------------------
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }


  return (
  <DataContext.Provider 
    value={
      {
        page, 
        theme,
        toggleTheme,
        coinList,
        setPage, 
        historicalData,
        favourites,
        setFavourites,
        historicalInterval,
        setHistoricalInterval,
        currFavourite,
        setCurrFavourite, 
        addCoin, 
        removeCoin, 
        prices
      }
    }
  >
    {children}
  </DataContext.Provider>
  )
}