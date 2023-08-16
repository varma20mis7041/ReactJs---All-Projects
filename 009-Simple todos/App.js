import CashWithdrawal from './components/CashWithdrawal'

import './App.css'

const denominationsList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
]

const App = () => (
  <>
    <CashWithdrawal denominationsList={denominationsList} />

    <div className="last-container">
      <p>
        Developed by @Bhargav varma | Developed date : 31 jul 2023 | contact :
        bhargav.coding@gmail.com
      </p>
    </div>
  </>
)

export default App
