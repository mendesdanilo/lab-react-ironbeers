import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AllBeersClass extends React.Component {
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
    return (
      <>
        <h1>All Beers</h1>
        <ul>
          {this.state.beers.map((beer) => {
            return (
              <li>
                <Link to={`/beer-detail/${beer._id}`}>{beer.name}</Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default AllBeersClass;
