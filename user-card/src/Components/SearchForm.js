import React from "react";
import axios from "axios";

const SearchForm = (props) => {
  return (
    <div className="search-form">
      <form>
        <label htmlFor="search">
          <input
            type="text"
            name="search"
            value={props.event.target.value}
            onChange={props.handleChanges}
          >
            <button>Search</button>
          </input>
        </label>
      </form>
    </div>
  );
};

export default SearchForm;
