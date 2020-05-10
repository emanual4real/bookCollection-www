import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getBooks } from "../../util/apiRequests";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import TableFooter from "./TableFooter";

//
const header = [
  {
    name: "_id",
    title: "id",
    type: "label",
    sort: -1,
    order: 0,
    visible: true,
  },
  {
    name: "Realm",
    title: "Realm",
    type: "label",
    sort: -1,
    order: 1,
    visible: true,
  },
  {
    name: "Series",
    title: "Series",
    type: "label",
    sort: -1,
    order: 2,
    visible: true,
  },
  {
    name: "Title",
    title: "Title",
    type: "label",
    sort: -1,
    order: 3,
    visible: true,
  },
  {
    name: "Author",
    title: "Author",
    type: "label",
    sort: -1,
    order: 4,
    visible: true,
  },
  {
    name: "Editor",
    title: "Editor",
    type: "label",
    sort: -1,
    order: 5,
    visible: true,
  },
  {
    name: "Release",
    title: "Release Date",
    type: "label",
    sort: -1,
    order: 6,
    visible: true,
  },
  {
    name: "ISBN",
    title: "ISBN",
    type: "label",
    sort: -1,
    order: 7,
    visible: true,
  },
  {
    name: "edit",
    title: "",
    type: "label",
    sort: -1,
    order: 100,
    visible: true,
  },
];

function Books() {
  // book data from API
  const [bookData, setBookData] = useState();
  // view data like sorting, columns, etc
  const [viewData, setViewData] = useState(header);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getBooks();
      setBookData(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Books Page</h1>
      <div className="container-fluid">
        <table className="table">
          <thead>
            <tr className="d-flex">
              <TableHeader header={viewData} />
            </tr>
          </thead>
          <tbody>
            <TableBody header={viewData} books={bookData} />
          </tbody>
          <tfoot>
            <TableFooter header={viewData} />
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Books;
