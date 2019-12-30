import React from "react";

class CardTop extends React.Component {
  render() {
    return (
      <div className="card-top">
        <div className="card-top__image-block">
          <img className="card-top__image" src={this.props.img} alt={this.props.alt} />
        </div>
        <div className="card-top__title">{this.props.currency}</div>
      </div>
    )
  }
}

export default CardTop;