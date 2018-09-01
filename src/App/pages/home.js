import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1>Home</h1>
      <Link to={'./portfolio'}>
        <button variant="raised">
            Portfolio
        </button>
      </Link>
      <Link to={'./list'}>
        <button variant="raised">
            My List
        </button>
      </Link>
      <Link to={'./lab'}>
        <button>
            Lab
        </button>
      </Link>
      <Link to={'./contact'}>
        <button variant="raised">
            Contact
        </button>
      </Link>
    </div>
    );
  }
}
export default Home;