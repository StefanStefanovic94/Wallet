import React from "react"
import Login from "./components/login/Login"
import { Switch, Link, Route } from "react-router-dom"
import Wallet from "./components/wallet/Wallet"
import "./app.css"

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/wallet" component={Wallet}></Route>
      </Switch>
    </div>
  );
}

export default App;
