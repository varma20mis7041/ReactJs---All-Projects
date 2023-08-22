// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {moneyDetails} = props
  const {income, expenses, balance} = moneyDetails
  console.log('money_details', income, expenses, balance)
  return (
    <div className="money_details_card_container">
      <div className="detailed_money_card_container balance_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="detailed_money_section_img_icons"
          alt="balance_img"
        />
        <div className="money_details_container">
          <p className="money_type">Your Balance</p>
          <p className="money" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="detailed_money_card_container income_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="detailed_money_section_img_icons"
          alt="income_img"
        />
        <div className="money_details_container">
          <p className="money_type">Your Income</p>
          <p className="money" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="detailed_money_card_container expenses_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="detailed_money_section_img_icons"
          alt="expenses"
        />
        <div className="money_details_container">
          <p className="money_type">Your Expenses</p>
          <p className="money" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
