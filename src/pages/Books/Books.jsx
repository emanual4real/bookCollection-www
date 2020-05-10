import React from "react";
import PropTypes from "prop-types";
import { getBooks } from "../../actions";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import TableFooter from "./TableFooter";

function Books(props) {
  return (
    <div>
      <h1>Books Page</h1>
      <div className="container-fluid">
        <table className="table">
          <thead>
            <tr className="d-flex">
              <TableHeader />
            </tr>
          </thead>
          <tbody>
            <TableBody />
          </tbody>
          <tfoot>
            <TableFooter />
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Books;
