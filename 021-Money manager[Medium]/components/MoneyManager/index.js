import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem/index'

// const transactionTypeOptions = [
//   {
//     optionId: 'INCOME',
//     displayText: 'Income',
//   },
//   {
//     optionId: 'EXPENSES',
//     displayText: 'Expenses',
//   },
// ]

// Write your code here

class MoneyManager extends Component {
  state = {
    titleInput: '',
    addedAmount: '',
    addedAmountType: 'INCOME',
    incomeAmount: 0,
    expensesAmount: 0,
    balanceAmount: 0,
    transactionList: [],
  }

  onChangeTitleElement = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmountElement = event => {
    this.setState({addedAmount: event.target.value})
  }

  onChangeTypeElement = event => {
    this.setState({addedAmountType: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {
      titleInput,
      addedAmount,
      addedAmountType,
      transactionList,
      incomeAmount,
      expensesAmount,
      balanceAmount,
    } = this.state
    const newTranscation = {
      id: uuidv4(),
      title: titleInput,
      amount: addedAmount,
      type: addedAmountType,
    }
    const lastAddedAmount = parseInt(newTranscation.amount)
    const lastAddedAmountType = newTranscation.type

    let newIncome = incomeAmount
    let newExpenses = expensesAmount
    let newBalance = balanceAmount

    if (lastAddedAmountType === 'INCOME') {
      newIncome += lastAddedAmount
      newBalance += lastAddedAmount
    } else {
      newBalance -= lastAddedAmount
      newExpenses += lastAddedAmount
    }

    const newList = [...transactionList, newTranscation]

    this.setState({
      transactionList: newList,
      titleInput: '',
      addedAmount: '',
      addedAmountType: '',
      incomeAmount: newIncome,
      expensesAmount: newExpenses,
      balanceAmount: newBalance,
    })
  }

  moneyManagerDetails = () => {
    const {incomeAmount, expensesAmount, balanceAmount} = this.state
    const moneyDetails = {
      income: incomeAmount,
      expenses: expensesAmount,
      balance: balanceAmount,
    }
    console.log('money_manager', moneyDetails)
    return moneyDetails
  }

  onDeleteTransactionItem = transactionItemDetails => {
    console.log(transactionItemDetails)
    const {id, amount, type} = transactionItemDetails

    const {
      incomeAmount,
      expensesAmount,
      balanceAmount,
      transactionList,
    } = this.state
    const updatedList = transactionList.filter(eachItem => eachItem.id !== id)
    console.log('newListOfList', updatedList)
    let updatedIncomeAmount = incomeAmount
    let updatedExpensesAmount = expensesAmount
    let updatedBalanceAmount = balanceAmount
    if (type === 'INCOME') {
      updatedIncomeAmount = incomeAmount - amount
      updatedBalanceAmount = incomeAmount - amount
    } else {
      updatedBalanceAmount = balanceAmount + parseInt(amount)
      updatedExpensesAmount = expensesAmount - amount
    }
    this.setState({
      transactionList: updatedList,
      incomeAmount: updatedIncomeAmount,
      expensesAmount: updatedExpensesAmount,
      balanceAmount: updatedBalanceAmount,
    })
  }

  render() {
    const {transactionList} = this.state
    const {titleInput, addedAmount} = this.state
    console.log(transactionList)
    return (
      <div className="money_manager_bg_container">
        <div className="money_manager_card_container">
          <div className="money_manager_top_card_section">
            <h1 className="money_manager_main_heading">Hi, Bhargav</h1>
            <p className="money_manager_paragraph">
              Welcome back to your{' '}
              <span className="money_manager_text_span_element">
                Money Manager
              </span>
            </p>
          </div>
          <div className="money_details_container">
            <MoneyDetails moneyDetails={this.moneyManagerDetails()} />
          </div>
          <div className="money_manager_bottom_section">
            <form className="money_managing_form" onSubmit={this.onSubmitForm}>
              <h1 className="form_heading">Add Transactions</h1>
              <div className="form_elements_container">
                <label htmlFor="title" className="form_label_heading_element">
                  TITLE
                </label>
                <input
                  id="title"
                  placeholder="TITLE"
                  className="form_input_element"
                  onChange={this.onChangeTitleElement}
                  value={titleInput}
                />
              </div>
              <div className="form_elements_container">
                <label htmlFor="amount" className="form_label_heading_element">
                  AMOUNT
                </label>
                <input
                  id="amount"
                  placeholder="AMOUNT"
                  className="form_input_element"
                  onChange={this.onChangeAmountElement}
                  value={addedAmount}
                />
              </div>
              <div className="form_elements_container">
                <label htmlFor="type" className="form_label_heading_element">
                  TYPE
                </label>
                <select
                  id="type"
                  className="form_input_element"
                  onClick={this.onChangeTypeElement}
                >
                  <option value="INCOME">Income</option>
                  <option value="EXPENSES">Expenses</option>
                </select>
              </div>
              <button className="add_button" type="submit">
                Add
              </button>
            </form>
            <div className="history_container">
              <h1 className="history_main_heading_element">History</h1>
              <div className="history_card_top_row_container">
                <p className="history_title">Title</p>
                <p className="history_amount">Amount</p>
                <p className="history_type">Type</p>
              </div>
              <ul className="ul_element">
                {transactionList.map(eachTransactionItem => (
                  <TransactionItem
                    transactionDetails={eachTransactionItem}
                    key={eachTransactionItem.id}
                    onDeleteTransactionItem={this.onDeleteTransactionItem}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
