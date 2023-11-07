import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import ReactPopup from './components/ReactPopup'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/demo" component={ReactPopup} />
        <Route exact path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
    <div className="last_container">
      <p>
        Developed by @Bhargav varma | date of completion : 4 Nov 2023 | contact
        : bhargav.coding@gmail.com{' '}
      </p>
    </div>
  </>
)

export default App
