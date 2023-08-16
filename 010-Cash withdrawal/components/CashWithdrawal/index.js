// Write your code here
import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onClickChangeAmount = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div className="bg_container">
        <div className="cash_withdrawal">
          <div className="cash_withdrawal_top_section_container">
            <p className="name_img_icon">B</p>
            <h1 className="user_name_heading">Bhargav varma</h1>
          </div>
          <div className="cash_withdrawal_middle_section_container">
            <p className="balance_text">Your Balance </p>

            <p className="balance_amount">{amount}</p>
          </div>
          <p className="balance_amount_in_rupees_text">in Rupees</p>
          <div className="cash_withdrawal_bottom_section_container">
            <p className="withdraw_text_heading">Withdraw</p>
            <p className="choose_sum_text">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denomination_buttons_container">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  denominationDetails={eachItem}
                  key={eachItem.id}
                  onClickChangeAmount={this.onClickChangeAmount}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
