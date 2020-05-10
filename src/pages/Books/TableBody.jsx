import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

function TableBody(props) {
  const { books, header } = props;

  // take all books and map it across a filtered and sorted header
  const row = books.map((book) => {
    return (
      <tr key={`tr-${book._id}`} className="d-flex">
        {header
          .filter((col) => col.visible === true)
          .sort((a, b) => (a.order < b.order ? -1 : 1))
          .map((col) => {
            return (
              <td key={`td-${col.name}-${book._id}`} className="col">
                {col.name === "edit" ? (
                  <FontAwesomeIcon icon={faEdit} />
                ) : (
                  book[col.name]
                )}
              </td>
            );
          })}
      </tr>
    );
  });

  return row;
}

TableBody.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      Realm: PropTypes.string,
      Series: PropTypes.string,
      Title: PropTypes.string,
      Author: PropTypes.string,
      Editor: PropTypes.string,
      Release: PropTypes.string,
      ISBN: PropTypes.string,
    })
  ),
};

TableBody.defaultProps = {
  books: [
    {
      _id: "",
      Realm: "",
      Series: "",
      Title: "",
      Author: "",
      Editor: "",
      Release: "",
      ISBN: "",
    },
  ],
};

export default TableBody;
