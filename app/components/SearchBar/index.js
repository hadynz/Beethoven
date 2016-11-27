// @flow
import React, { Component, PropTypes } from 'react';
import styles from './style.css';

export default class extends Component {
  static propTypes = {
    search: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      url: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleChange(e) {
    this.setState({ url: e.target.value });
  }

  search() {
    const { search } = this.props;
    search(this.state.url);
  }

  render() {
    return (
      <div className={styles.container}>
        <input type="text" placeholder="Paste YouTube playlist URL here..." onChange={this.handleChange} />
        <input type="button" value="Search" onClick={this.search} />
      </div>
    );
  }
}
