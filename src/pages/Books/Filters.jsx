import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Input } from "reactstrap";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

function Filters(props) {
  // props
  const { books, header } = props;

  // toggle filter
  const [showFilter, setShowFilter] = useState();
  const toggle = () => {
    setShowFilter(!showFilter);
  };

  // react-select UI
  // create list of options
  const distinctList = [...new Set(books.map((arr) => arr[header]))].sort(
    (a, b) => {
      return a > b ? 1 : -1;
    }
  );
  const options = distinctList.map((element) => {
    return { value: element, label: element };
  });
  // handle updating filter state
  const [filter, setFilter] = useState(false);
  const onChangeFilter = (selectedOptions) => setFilter(selectedOptions);
  // create UI
  const SelectList = () => (
    <Select
      isMulti
      autoFocus
      closeMenuOnSelect="false"
      options={options}
      value={filter}
      onChange={onChangeFilter}
    />
  );

  return (
    <div>
      <Button
        style={{ backgroundColor: "transparent", border: "none" }}
        onClick={toggle}
      >
        <FontAwesomeIcon icon={faFilter} style={{ color: "black" }} />
      </Button>
      {showFilter ? (
        <Form onBlur={toggle}>
          <SelectList />
        </Form>
      ) : (
        ""
      )}
    </div>
  );
}

Filters.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({})),
};

Filters.defaultProps = {
  books: [],
};

export default Filters;
