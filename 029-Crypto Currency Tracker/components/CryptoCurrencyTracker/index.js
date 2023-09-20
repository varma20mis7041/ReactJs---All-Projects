import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import CryptocurrenciesList from '../CryptocurrenciesList/index'

class CryptocurrencyTracker extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.fetchCurrencyData()
  }

  fetchCurrencyData = async () => {
    const responseFromApiCall = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const currencyData = await responseFromApiCall.json()
    console.log('currencyData', currencyData)
    const updatedCurrencyList = currencyData.map(eachCurrencyItem => {
      const newCurrencyItem = {
        currencyName: eachCurrencyItem.currency_name,
        usdValue: eachCurrencyItem.usd_value,
        euroValue: eachCurrencyItem.euro_value,
        id: eachCurrencyItem.id,
        currencyLogo: eachCurrencyItem.currency_logo,
      }
      return newCurrencyItem
    })
    this.setState({currencyList: updatedCurrencyList, isLoading: false})
  }

  render() {
    const {currencyList, isLoading} = this.state
    return (
      <div className="crypto_currency_bg_container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader
              type="Rings"
              color="#ffffff"
              height={80}
              width={80}
              className="loader"
            />
          </div>
        ) : (
          <>
            <h1 className="cryptocurrency_main_heading">
              Cryptocurrency Tracker
            </h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="crypto_img"
            />
            <CryptocurrenciesList currencyList={currencyList} />
          </>
        )}
      </div>
    )
  }
}
export default CryptocurrencyTracker
