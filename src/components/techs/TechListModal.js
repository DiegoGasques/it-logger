import React, { useEffect } from "react";
import { connect } from "react-redux";

import TechItem from "./TechItem";

import { getTechs } from "../../store/actions/techs";

const TechListModal = ({ techs, loading, getTechs }) => {
  useEffect(() => {
    getTechs();
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            techs !== null &&
            techs.map(tech => <TechItem key={tech.id} tech={tech} />)}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  techs: state.techs.techs,
  loading: state.techs.loading
});

export default connect(
  mapStateToProps,
  { getTechs }
)(TechListModal);
