import React, { Component } from 'react'
import SubmitButton from '../components/SubmitButton'
import { withRouter } from 'react-router'

class Login extends Component {
  handleClick = () => {
    // auth login
    this.props.history.push('/')
  }

  render () {
    return (
      <div>
        {/*<TextInput label="Username" />*/}
        {/*<TextInput label="Password" />*/}
        <SubmitButton onClick={this.handleClick} />
      </div>
    )
  }
}

export default withRouter(Login)
