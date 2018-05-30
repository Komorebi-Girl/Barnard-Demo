import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <form class="form-inline">
          <label class="sr-only" for="inlineFormInputQuery">
            Query
          </label>
          <input
            type="text"
            class="form-control mb-2 mr-sm-2"
            id="inlineFormInputQuery"
            placeholder="Search..."
          />

          <button type="submit" class="btn btn-primary mb-2">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
