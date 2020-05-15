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

  const data = React.useMemo(() => books, []);
  console.log("data", data);
  const columns = React.useMemo(() => [
    {
      Header: "ID",
      accessor: "_id",
    },
    {
      Header: "Realm",
      accessor: "Realm",
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
      Header: "Author",
      accessor: "Author",
    },
    {
      Header: "Editor",
      accessor: "Editor",
    },
    {
      Header: "Release",
      accessor: "Release",
    },
    {
      Header: "ISBN",
      accessor: "ISBN",
    },
  ]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return <table></table>;
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
