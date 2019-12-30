import React from "react";

class CardBottom extends React.Component {
  render() {
    return (
      <div className="card-bottom">
        <div className="card-bottom__amount">{this.props.amount}</div>
        <div className="card-bottom__percent">{this.props.percent}</div>
      </div>
    )
  }
}

export default CardBottom;