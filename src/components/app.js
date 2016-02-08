import React, { Component } from "react"
import CardCredit from "./credit-card-input"

let types = {
  'Visa': /^4/,
  'MasterCard': /^5[1-5]/,
  'American Express': /^3[47]/
};

export default class App extends Component {
  render() {
    return (
      <CardCredit types={types}/>
    )
  }
}
