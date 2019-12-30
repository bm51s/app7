import React from "react";

import CardTop from "./cardtop";
import CardBottom from "./cardbottom";
import StateComponent from "./statecomponent";
import Car from "./car";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <CardTop currency={this.props.currency} img={this.props.img} alt={this.props.alt} />
        <CardBottom amount={this.props.amount} percent={this.props.percent} />
        <StateComponent />
        <Car />
      </div>
    )
  }
}

export default Card;