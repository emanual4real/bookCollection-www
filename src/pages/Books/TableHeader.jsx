import React from "react";
// import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";

function BookFooter(props) {
  const { book } = props;

  return (
    <td className={b.className} style={{ display: !b.visible ? "none" : "" }}>
      <button>
        <FontAwesomeIcon icon={faFolderPlus} />
      </button>
    </td>
  );
}

export default BookFooter;
