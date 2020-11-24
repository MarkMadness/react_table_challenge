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
    this.selectedFilter = new Set()
  }

  toggleFilter = label => {
    if (this.selectedFilter.has(label)) {
      this.selectedFilter.delete(label);
    } else {
      this.selectedFilter.add(label);
    }
  }

  componentDidMount() {
    const apiURL = "https://xxxxxxxxxxxxxxx.com/api/xxxxxxxxxxxx";
    fetch(apiURL, { headers: {"Authorization": "Api-Key xxxxxxxxxxx"}})
    .then((response) => response.json())
    .then(restaurantArray => this.setState({ restaurantArray }))

    const [filter, setFilter] = useState()
    const handleClick = () => setFilter(filter)
  }

  render() {
      return (
        <div className='App'>
          <h1>Restaurant Respository</h1>
          <Header checkStatus={setFilter}/>  
          <Table restaurantArray={ this.state.restaurantArray.sort((a,b) => (a.name > b.name) ? 1 : -1) } check={filter}/>
        </div>
      )
  }

}

export default App;
