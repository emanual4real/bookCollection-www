import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getBooks } from "../../actions";
import Book from "./Book";

function Books(props) {
  const { books } = props;
  const bookObj = books.map((b) => {
    return [
      {
        name: "_id",
        type: "text",
        value: b._id.$oid,
        className: "col",
        sort: -1,
        visible: false,
      },
      {
        name: "Realm",
        type: "text",
        value: b.Realm,
        className: "col",
        sort: -1,
        visible: true,
      },
      {
        name: "Series",
        type: "text",
        value: b.Series,
        className: "col",
        sort: -1,
        visible: true,
      },
      {
        name: "Title",
        type: "text",
        value: b.Title,
        className: "col",
        sort: -1,
        visible: true,
      },
      {
        name: "Author",
        type: "text",
        value: b.Author,
        className: "col",
        sort: -1,
        visible: true,
      },
      {
        name: "Editor",
        type: "text",
        value: b.Editor,
        className: "col",
        sort: -1,
        visible: true,
      },
      {
        name: "Released",
        type: "text",
        value: b.Released,
        className: "col",
        sort: -1,
        visible: true,
      },
      {
        name: "ISBN",
        type: "text",
        value: b.ISBN,
        className: "col",
        sort: 0,
        visible: true,
      },
      {
        name: "Edit",
        type: "edit",
        value: "edit",
        className: "col-1",
        sort: 0,
        visible: true,
      },
    ];
  });
  // array of column headers
  const columns = bookObj[0];
  // create empty shell of a book
  let emptyBook = columns.map((b) => Object.assign({}, b));
  emptyBook = emptyBook.map((b) => Object.assign(b, { value: "" }));
  emptyBook = emptyBook.filter((col) => col.name !== "Edit");
  emptyBook.push({
    name: "Add",
    type: "add",
    value: "Add",
    className: "col-1",
    sort: 0,
    visible: true,
  });
  // array of rows with array of columns
  const bookList = bookObj.map((b) => <Book key={b._id} book={b} />);

  return (
    <div>
      <h1>Books Page</h1>
      <div className="container-fluid">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr className="row">
              {columns.map((h) => (
                <th
                  key={`th-${h.name}`}
                  className={h.className}
                  style={{ display: !h.visible ? "none" : "" }}
                >
                  {h.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{bookList}</tbody>
          <tfoot>
            <Book key="newBook" book={emptyBook} />
          </tfoot>
        </table>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { bookReducer } = state;
  const { books } = bookReducer;
  return { books };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
