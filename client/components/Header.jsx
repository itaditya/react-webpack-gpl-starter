import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import CurrentUserQuery from '../queries/CurrentUser';

class Header extends Component {
    componentDidMount() {
    }
    renderContent() {
        console.log(this.props);
        const { loading, user } =  this.props.data;
        if(loading) {
          return <div />;
        }
        if(user) {
          return <div>Logout</div>
        }
        else {
          return <div>Login</div>
        }
    }
    render() {
        return (
          <nav>
              <div className="nav-wrapper">
                {this.renderContent()}
              </div>
          </nav>
        )
    }
}
export default graphql(CurrentUserQuery)(Header);
