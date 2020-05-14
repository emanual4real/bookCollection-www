import React, { useReducer } from "react";
// import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";

function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value,
  };
}

function BookFooter(props) {
  const { header } = props;
  // create initial state
  const initialState = {};
  header.forEach((row) => (initialState[row.name] = ""));
  // store initial state in reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <tr key={`tr-new-book`} className="d-flex">
      {header
        .filter((col) => col.visible === true)
        .sort((a, b) => (a.order < b.order ? -1 : 1))
        .map((col) => {
          return (
            <td key={`td-${col.name}`} className="col">
              {col.name === "edit" ? (
                <button
                  className="btn"
                  style={{ backgroundColor: "transparent" }}
                  onClick={(e) => console.log("state", state)}
                >
                  <FontAwesomeIcon icon={faFolderPlus} />
                </button>
              ) : (
                <input
                  type="text"
                  value={state[col.name]}
                  name={col.name}
                  onChange={(e) =>
                    dispatch({ field: e.target.name, value: e.target.value })
                  }
                  style={{ width: "100%" }}
                ></input>
              )}
            </td>
          );
        })}
    </tr>
  );
}

export default BookFooter;
