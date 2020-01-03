import React from "react";
import {
  BrowserRouter,
  Route,
} from "react-router-dom";

import Navigation from "./navigation";
import Card from "./card";

import CardBottom from "./cardbottom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Navigation />
          <Card currency="BTC/USD" img="btc.svg" alt="" amount="7549.68" percent="1.63%" />
          <Route exact path="/test1" component={CardBottom} />
        </>
      </BrowserRouter>
    )
  }
}

export default App;