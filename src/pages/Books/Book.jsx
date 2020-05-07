import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faFolderPlus } from "@fortawesome/free-solid-svg-icons";

function Book(props) {
  const { book } = props;

  const row = book.map((b) => {
    switch (b.type) {
      case "text":
        return (
          <td
            key={`td-${b.name}-${b._id}`}
            className={b.className}
            style={{ display: !b.visible ? "none" : "" }}
          >
            <input
              key={`input-${b.name}-${b._id}`}
              name={b.name}
              type={b.type}
              defaultValue={b.value}
              style={{ width: "100%" }}
            />
          </td>
        );
        break;
      case "add":
        return (
          <td
            className={b.className}
            style={{ display: !b.visible ? "none" : "" }}
          >
            <button>
              <FontAwesomeIcon icon={faFolderPlus} />
            </button>
          </td>
        );
        break;
      case "edit":
        return (
          <td
            className={b.className}
            style={{ display: !b.visible ? "none" : "" }}
          >
            <button>
              <FontAwesomeIcon icon={faEdit} />
            </button>
          </td>
        );
        break;
      default:
    }
  });

  const row2 = book.map((b) => (
    <td className={b.className} style={{ display: !b.visible ? "none" : "" }}>
      {b.type === "button" ? (
        <button>
          <FontAwesomeIcon icon={faEdit} />
        </button>
      ) : (
        <input
          name={b.name}
          type={b.type}
          defaultValue={b.value}
          style={{ width: "100%" }}
        />
      )}
    </td>
  ));

  return <tr className="row">{row}</tr>;
}

Book.propTypes = {
  book: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      name: PropTypes.string,
      sort: PropTypes.number,
      type: PropTypes.string,
      value: PropTypes.string,
      visible: PropTypes.bool,
    })
  ),
};

export default Book;
