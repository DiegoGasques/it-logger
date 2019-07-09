import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import M from "materialize-css/dist/js/materialize.min.js";

import { deleteLog, setCurrent } from "../../store/actions/logs";

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const handleDelete = e => {
    deleteLog(log);
    M.toast({ html: "Log deleted" });
  };

  const { message, attention, tech, id, date } = log;
  return (
    <li className="collection-item">
      <div>
        <a
          className={`modal-trigger ${attention ? "red-text" : "blue-text"}`}
          href="#edit-log-modal"
          onClick={e => setCurrent(log)}
        >
          {message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{id}</span> last updated by{" "}
          <span className="black-text">{tech}</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{date}</Moment>
        </span>
        <a href="#!" className="secondary-content" onClick={handleDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteLog, setCurrent }
)(LogItem);
