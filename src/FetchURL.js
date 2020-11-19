import React from 'react'

class FetchURL extends React.Component {
    componentDidMount() {
        const apiURL = "https://code-challenge.spectrumtoolbox.com/api/restaurants";
        fetch(apiURL, { headers: {"Authorization": "Api-Key q3MNxtfep8Gt", },})
        .then((response) => response.json())
        .then((data) => console.log('This is the API data >>> ', data));
    }
    render() {
        return <h1>Restaurant API</h1>;
    }
}

export default FetchURL