import Navigation from './components/navigation';
import About from './views/about';
import Contact from './views/contact';
import Pricing from './views/pricing';
import Faq from './views/faq';
import Home from './views/home';
import Login from './views/login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./components/privateRoutes/PrivateRoutes";
import Register from './views/register';
import DashBoard from './views/dashboard';
import { Provider } from 'react-redux';
import store from "./store";
import './App.css';
import { Component } from 'react';
import Kanban from './views/dashboard/views/kanban/Kanban';
import TimeManagement from './views/dashboard/views/time-management/TimeManagement';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
console.log(store);

function App() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/pricing" component={Pricing} />
              <Route path="/contact" component={Contact} />
              <Route path="/faq" component={Faq} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={DashBoard} />
                <PrivateRoute exact path="/dashboard/time-management" component={TimeManagement} />
                <PrivateRoute path="/dashboard/kanban" component={Kanban} />
              </Switch>
            </Switch>
          </div>
        </Router>
      </Provider>
    )

}

export default App;
