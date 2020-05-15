import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import {
  useTable,
  useGroupBy,
  useFilters,
  useSortBy,
  useExpanded,
  usePagination,
} from "react-table";

function TableBody(props) {
  const { books } = props;

  const data = React.useMemo(() => books, [books]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Author",
        accessor: "Author",
      },
      {
        Header: "Editor",
        accessor: "Editor",
      },
      {
        Header: "ISBN",
        accessor: "ISBN",
      },
      {
        Header: "Realm",
        accessor: "Realm",
      },
      {
        Header: "Release",
        accessor: "Release",
      },
      {
        Header: "Series",
        accessor: "Series",
      },
      {
        Header: "Title",
        accessor: "Title",
      },
      {
        Header: "ID",
        accessor: "_id",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

  return (
    <table {...getTableProps()} className="table table-striped">
      <thead className="thead-dark">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
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
