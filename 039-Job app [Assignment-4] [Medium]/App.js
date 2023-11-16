import {Route, Switch, Redirect} from 'react-router-dom'

import './App.css'

import LoginRoute from './components/LoginRoute/index'
import Home from './components/Home/index'
import ProtectedRoute from './components/ProtectedRoute'
import Jobs from './components/Jobs/index'
import JobItemDetails from './components/JobItemDetails'
import NotFound from './components/NotFound'


const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginRoute} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={Jobs} />
    <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
