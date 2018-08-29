import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { withRouter, Redirect } from 'react-router'
import Login from './containers/Login'
import HomePage from './containers/HomePage'
// import { connect } from 'react-redux'

class App extends Component {
  handleRedirect = () => {
    console.log('redirecting so hard')
    return <Route render={() => <Redirect to='/welcome' />} />
  }

  render () {
    return (
      <Switch>
        <Route path='/welcome' component={Login} />
        <Route exact path='/' component={HomePage} />
        <Route component={this.handleRedirect} />
      </Switch>
    )
  }
}

// export default connect(null, null)(App)
export default withRouter(App)
