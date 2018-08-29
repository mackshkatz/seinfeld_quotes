import React, { Component } from 'react'
import RetrieveQuoteButton from '../components/RetrieveQuoteButton'
import axios from 'axios';

class HomePage extends Component {
  state = {
    quote: false,
    character: false
  }

  handleUserClick = () => {
    axios.get(`https://seinfeld-quotes.herokuapp.com/random/`)
      .then(({ data }) => {
        this.setState({
          quote: data.quote,
          character: data.author
        })
      })
  }

  render () {
    return (
      <RetrieveQuoteButton onUserClick={this.handleUserClick}>What's the deal with quotes?!</RetrieveQuoteButton>
    )
  }
}

export default HomePage
