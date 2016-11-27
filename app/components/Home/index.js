// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import SearchBar from '../SearchBar';

export default class Home extends Component {
  static propTypes = {
    search: PropTypes.func.isRequired
  };

  render() {
    const { search } = this.props;
    return (
      <div>
        <div className={styles.container}>
          <h2>Home3</h2>
          <Link to="/counter">to Counter</Link>
        </div>
        <div>
          <SearchBar search={search} />
        </div>
      </div>
    );
  }
}
