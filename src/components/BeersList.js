import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class BeersList extends React.Component {
  state = {
    beers: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      'https://ih-beers-api2.herokuapp.com/beers'
    );
    console.log(response.data);
    this.setState({
      beers: response.data,
    });
  }

  render() {
    const { beers } = this.state;
    return (
      <>
        {this.state.beers.map((beer) => {
          return (
            <div key={beer._id}>
              <img src={beer.image_url} alt={beer.name} />
              <Link to={`/beer-detail/${beer._id}`}>{beer.name}</Link>
              <h4>{beer.tagline}</h4>
              <p>Created By: {beer.contributed_by}</p>
            </div>
          );
        })}
      </>
    );
  }
}

export default BeersList;
