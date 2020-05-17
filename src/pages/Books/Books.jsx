import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getBooks } from "../../util/apiRequests";
import Table from "./Table";
import AddBookForm from "./AddBookForm";
import Filters from "./Filters";

function Books() {
  // book data from API
  const [bookData, setBookData] = useState();
  // view data like sorting, columns, etc
  const [viewData, setViewData] = useState();

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
      <Filters books={bookData} header="Realm" />
      <Table books={bookData}></Table>
      <AddBookForm />
    </div>
  );
}

export default Books;
