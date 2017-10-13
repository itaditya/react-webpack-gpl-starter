import React, { Component } from 'react'
import { Link } from 'react-router'
import { graphql } from 'react-apollo'

import CurrentUserQuery from '../queries/CurrentUser'
import LogoutQuery from '../queries/Logout'

class Header extends Component {
  componentDidMount() {}
  onLogout() {
    console.log('test')
    this.props.mutate({
      refetchQueries: [
        {
          query: CurrentUserQuery
        }
      ]
    })
  }
  renderContent() {
    console.log(this.props)
    const { loading, user } = this.props.data
    if (loading) {
      return <div />
    }
    if (user) {
      return (
        <div>
          <li>
            <a onClick={this.onLogout.bind(this)}>Logout</a>
          </li>
        </div>
      )
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      )
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            Home
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    )
  }
}
export default graphql(LogoutQuery)(graphql(CurrentUserQuery)(Header))
