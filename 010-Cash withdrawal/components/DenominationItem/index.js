// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, onClickChangeAmount} = props
  const {id, value} = denominationDetails
  const denomination = () => {
    onClickChangeAmount(value)
  }
  return (
    <li className="list_item">
      <button type="button" className="value_button" onClick={denomination}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
