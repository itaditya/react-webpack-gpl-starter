import React, { Component } from "react"

import Header from "./Header"

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}
export default App
