import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import './index.css'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />

      <div className="last_container">
        <p>
          Developed by @Bhargav varma | date of completion : 13 Nov 2023 |
          contact : bhargav.coding@gmail.com{' '}
        </p>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
