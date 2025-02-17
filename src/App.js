import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Accueil from "./components/layout/Accueil";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Vraieaccueil from "./components/Accueiloriginale/accueil";
import Modifier from "./components/atelier/modifatelier";
import Adminpanier from "./components/dashboard/adminpanier";
import Panier from "./components/dashboard/panier"
import Admin from './components/loginadmin/login'

import "./App.css";

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
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Vraieaccueil} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route  path="/albums" component={Accueil} />
            <Route  path="/administration" component={Admin} />
            <Route  path="/panier/:_id" component={Panier} />
            <Route  path="/dashboard" component={Dashboard} />
            <Route path="/dashboard/album/:id" component={Modifier} />

            <Switch>
              <PrivateRoute exact path="/adminpanier" component={Adminpanier} />
            </Switch>
            
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
