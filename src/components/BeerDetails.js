import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom"
import Navbar from "./Navbar"

class BeerDetails extends Component {
  state = {
    image_url: '',
    name: '',
    tagline: '',
    contributed_by: '',
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.beerId}`
    );
    console.log(response.data);
    this.setState({
      image_url: response.data.image_url,
      name: response.data.name,
      tagline: response.data.tagline,
      contributed_by: response.contributed_by,
    });
  }

  render() {
    const { image_url, name, tagline, contributed_by } = this.state;
    return (
      <>
      <Navbar />
        <img src={image_url} />
        <h4>{name}</h4>
        <p>{tagline}</p>
        <p>{contributed_by}</p>
      </>
    );
  }
}

export default BeerDetails;
