import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getTechs } from "../../store/actions/techs";

const TechSelectOptions = ({ techs, loading, getTechs }) => {
  useEffect(() => {
    getTechs();
  }, []);

  return (
    !loading &&
    techs !== null &&
    techs.map(t => (
      <option key={t.id} value={`${t.firstName} ${t.lastName}`}>{`${
        t.firstName
      } ${t.lastName}`}</option>
    ))
  );
};

TechSelectOptions.propTypes = {
  techs: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  getTechs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  techs: state.techs.techs,
  loading: state.techs.loading
});

export default connect(
  mapStateToProps,
  { getTechs }
)(TechSelectOptions);
