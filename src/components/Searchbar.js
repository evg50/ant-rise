import React, { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    searchText: '',
  };
  changeSearch = e => {
    this.setState({ searchText: e.currentTarget.value });
  };
  formSubmit = e => {
    e.preventDefault();
    console.log(this.state);

    this.props.onSubmit(this.state);
    this.setState({ searchText: '' });
  };
  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.formSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
          <br />

          <input
            className="input"
            value={this.state.searchText}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="рассвет "
            onChange={this.changeSearch}
          />
          <br />
          <input
            className="input"
            value={this.state.searchText}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="время "
            onChange={this.changeSearch}
          />
        </form>
      </header>
    );
  }
}
