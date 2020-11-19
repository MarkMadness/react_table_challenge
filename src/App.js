import React, { Component } from 'react'
import Header from './Header';
import './App.css';
// import FetchURL from './FetchURL';
import Table from './Table';

// function App() {

//   return (
//     <div className="App">
//       <FetchURL />
//       <Table />
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantarray: []
    }
  }

  componentDidMount() {
    const apiURL = "https://code-challenge.spectrumtoolbox.com/api/restaurants";
    fetch(apiURL, { headers: {"Authorization": "Api-Key q3MNxtfep8Gt"}})
    .then((response) => response.json())
    .then(restaurantarray => this.setState({ restaurantarray }))
  }

  render() {
      return (
        <div className='App'>
          <h1>Restaurant Respository</h1>
          <Header />  
          <Table restaurantarray={ this.state.restaurantarray } />
        </div>
      )
  }

}

export default App;
