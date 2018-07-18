// Code ClickityClick Component Here
import React from 'react'

class ClickityClick extends React.Component {

  state = {
    hasBeenClicked: false,
    currentTheme: 'blue',
    addressInfo: {
      street: null,
      number: null,
      city: null,
      country: null
    }
  }

  handleClick = () => {
    this.setState((previousState) => {
      return {
        hasBeenClicked: !previousState.hasBeenClicked
      }
    }, console.log(this.state))
  }

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }

}

export default ClickityClick
