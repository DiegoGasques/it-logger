import React, { useRef } from "react";
import { connect } from "react-redux";
import { searchLogs } from "../../store/actions/logs";

const SearchBar = ({ searchLogs }) => {
  const text = useRef("");

  const handleChange = e => {
    searchLogs(text.current.value);
  };

  return (
    <nav style={{ marginBottom: "30px" }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              ref={text}
              id="search"
              type="search"
              placeholder="Search logs..."
              onChange={handleChange}
              required
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default connect(
  null,
  { searchLogs }
)(SearchBar);
