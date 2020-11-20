import React, { Component } from 'react'
import Header from './Header';
import './App.css';
import Table from './Table';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantArray: []
    }
  }

  componentDidMount() {
    const apiURL = "https://code-challenge.spectrumtoolbox.com/api/restaurants";
    fetch(apiURL, { headers: {"Authorization": "Api-Key q3MNxtfep8Gt"}})
    .then((response) => response.json())
    .then(restaurantArray => this.setState({ restaurantArray }))
  }

  render() {
      return (
        <div className='App'>
          <h1>Restaurant Respository</h1>
          <Header />  
          <Table restaurantArray={ this.state.restaurantArray.sort((a,b) => (a.name > b.name) ? 1 : -1) } />
        </div>
      )
  }

}

export default App;
