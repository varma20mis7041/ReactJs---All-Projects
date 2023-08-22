// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleteTransactionItem} = props
  const {id, title, amount, type} = transactionDetails
  const transactionDeleted = () => {
    const deletedTranactionDetails = {
      id,
      title,
      amount,
      type,
    }
    onDeleteTransactionItem(deletedTranactionDetails)
  }

  const newType = type[0] + type.slice(1).toLowerCase()

  return (
    <li className="transaction_container">
      <p className="transaction_title">{title}</p>
      <p className="transaction_amount">Rs {amount}</p>
      <p className="transaction_type">{newType}</p>
      <button
        className="delete_button"
        type="button"
        data-testid="delete"
        onClick={transactionDeleted}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete_img"
          className="delete_img"
        />
      </button>
    </li>
  )
}

export default TransactionItem
