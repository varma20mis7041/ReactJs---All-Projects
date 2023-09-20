// Write your JS code heref
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyItemDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencyItemDetails
  return (
    <li className="crypto_currency_list_container">
      <div className="crypto_type_container">
        <img src={currencyLogo} alt={currencyName} className="currency_logo" />
        <p>{currencyName}</p>
      </div>
      <div className="currency_container">
        <p className="currency_value">{usdValue}</p>
        <p className="currency_value">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
