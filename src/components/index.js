import React from "react";
import ReactDOM from "react-dom";

import Card from "./card";

import "../css/styles.css";

ReactDOM.render (
  <Card currency="BTC/USD" img="btc.svg" alt="" amount="7549.68" percent="1.63%" />,
  document.getElementById('container')
);
