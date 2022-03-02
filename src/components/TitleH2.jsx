import PropTypes from "prop-types";
import React from "react";

const propTypes = {
  children: PropTypes.string.isRequired,
};

const TitleH2 = ({ children }) => {
  return (
    <h2 className="font-semibold uppercase tracking-wide text-center mb-2">
      {children}
    </h2>
  );
};

TitleH2.propTypes = propTypes;

export default TitleH2;
