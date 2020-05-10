import React from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";

function TableHeader(props) {
  const { header } = props;

  const row = header
    .filter((col) => col.visible === true)
    .sort((a, b) => (a.order < b.order ? -1 : 1))
    .map((col) => {
      return (
        <th key={`header-${col.name}`} className="col">
          {col.title}
        </th>
      );
    });

  return <React.Fragment>{row}</React.Fragment>;
}

const mapStateToProps = (state, ownProps) => {
  const { bookReducer } = state;
  const { header } = bookReducer;
  return { header };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TableHeader);
