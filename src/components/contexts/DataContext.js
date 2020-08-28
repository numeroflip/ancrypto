import React, { useState, useEffect } from 'react'
import cc from 'cryptocompare'
import moment from 'moment'


cc.setApiKey('6bce00cebd36b06c07f20e0e94c2a0fe1b0211dc0a8a8dc030f6fb8b4117f707')

const MAX_FAVOURITES = 10;
const TIME_UNITS = 10; 

export const DataContext = React.createContext();

function getCurrFavourite(favourites) {
  let currFavInLocal = getFromLocal('currFavourite')
  if (currFavInLocal) {return currFavInLocal}
  else if (favourites) {return favourites[0]}
  else return []
}

function getFromLocal (item) {
  let data = JSON.parse(localStorage.getItem('ancrypto'))
  let answer = data ? data[item] : [];
  return answer
}

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

const fetchCoins = async () => {
  let coins = await cc.coinList()
  coins = coins.Data
  try {return coins}
  catch(e) {console.log(e)}
}

const historicalPromises = currFavourite => {
  let promises = [];
  for (let i = TIME_UNITS; i > 0; i--) {
    const date = moment().subtract(i, 'months').toDate()
    promises.push(
      cc.priceHistorical(
        currFavourite, 
        ['USD'], 
        date
    ))
  }

  return Promise.all(promises)

}

const fetchHistorical = async (currFavourite) => {

  const results = await historicalPromises(currFavourite)
  const historical = [
    {
      name: currFavourite,
      data: results.map((ticker, index) => [
        moment().subtract(TIME_UNITS - index, 'months').valueOf(),
        ticker.USD
      ])
    }
  ]
  return historical
}

export const DataProvider = ({children}) => {

  // ==============STATE========================
  const [page, setPage] = useState('dashboard');
  const [firstVisit, setFirstVisit] = useState(localStorage.getItem('ancrypto') ? false : true)
  const [favourites, setFavourites] = useState(firstVisit ? [] : getFromLocal('favourites'));
  const [currFavourite, setCurrFavourite] = useState(getCurrFavourite())
  const [coinList, setCoinList] = useState(null)
  const [filteredCoins, setFilteredCoins] = useState([])
  const [prices, setPrices] = useState(null);
  const [historicalData, setHistoricalData] = useState([])

  // Fetch Coin data at startup
  useEffect(() => {

    const init = async () => {
      const coins = await fetchCoins()
      if (currFavourite.length > 0 ) {
        const historical = await fetchHistorical(currFavourite)
        setHistoricalData(historical)
      }
      setCoinList(coins)
    }           
    init()

  }, [])

  // Fetch the pices of favourites
  useEffect(() => {

    const updatePrices = async (coinsArr) => {
      let newPrices = await fetchPrices(coinsArr)
      setPrices(newPrices)
    }
    updatePrices(favourites)

  },[favourites])

  const addCoin = coinKey => {
    if(currFavourite.length === 0) {setCurrFavourite(coinKey)}
    if((favourites.length < MAX_FAVOURITES ) && !favourites.includes(coinKey)) {
      setFavourites([...favourites, coinKey]);
    }
  }

  useEffect(() => {
    const updateHistoricalPrice = async () => {
      if (currFavourite.length > 0 ) {
        const historical = await fetchHistorical(currFavourite)
        setHistoricalData(historical)
      }
    }
    setHistoricalData(null)
    updateHistoricalPrice()

  }, [currFavourite])
  // Handle localstorage updates
  useEffect(() => {
    localStorage.setItem('ancrypto', JSON.stringify({
      favourites,
      currFavourite
    }))
  },[currFavourite, favourites])

  const removeCoin = coinKey => {
    const updatedFavs = favourites.filter(key => key !== coinKey)
    if( favourites.includes(coinKey) ) {console.log(true, favourites, coinKey) ; setCurrFavourite(updatedFavs[0])}
    setFavourites(updatedFavs)
  }



  return (
  <DataContext.Provider value={
    {
      page, 
      coinList,
      setPage, 
      historicalData,
      favourites,
      setFavourites,
      currFavourite,
      setCurrFavourite, 
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