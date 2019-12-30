import React from "react";

class StateComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      example: 'state example'
    }
  }
  changeExample = () => {
    this.setState = ({
      example: 'state example changed'
    })
  }
  componentDidMount() {
    console.log('component did mount');
  }
  render() {
    return (
      <div className={this.state.example}></div>
    )
  }
}

export default StateComponent;