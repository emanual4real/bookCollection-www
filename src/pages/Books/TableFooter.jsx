import React from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";

function BookFooter(props) {
  const { header } = props;
  console.log("header", header);

  return (
    <tr key={`tr-new-book`} className="d-flex">
      {header
        .filter((col) => col.visible === true)
        .sort((a, b) => (a.order < b.order ? -1 : 1))
        .map((col) => {
          return (
            <td key={`td-${col.name}`} className="col">
              {col.name === "edit" ? (
                <FontAwesomeIcon icon={faFolderPlus} />
              ) : (
                <input type="text" style={{ width: "100%" }}></input>
              )}
            </td>
          );
        })}
    </tr>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { bookReducer } = state;
  const { header } = bookReducer;
  return { header };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BookFooter);
