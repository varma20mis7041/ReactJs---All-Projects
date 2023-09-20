// Write your JS code here
import CryptocurrencyItem from '../CryptocurrencyItem/index'

import './index.css'

const CryptocurrenciesList = props => {
  const {currencyList} = props
  console.log('currencyList', currencyList)
  return (
    <ul className="currencies_list_display_bg_container">
      <li className="currencies_list_headings_container">
        <p>Coin Type</p>
        <div className="currency_country_headings_bg_container">
          <p>USD</p>
          <p>EURO</p>
        </div>
      </li>
      {currencyList.map(eachCurrencyItem => (
        <CryptocurrencyItem
          currencyItemDetails={eachCurrencyItem}
          key={eachCurrencyItem.id}
        />
      ))}
    </ul>
  )
}

export default CryptocurrenciesList
