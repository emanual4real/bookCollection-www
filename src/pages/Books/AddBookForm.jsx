import React, { useReducer, useState } from "react";
import {
  Button,
  Form,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import bookColumns from "./BookColumns";
import { addBook } from "../../util/apiRequests";

// handle state of the component
function reducer(state, action) {
  switch (action.type) {
    case "UPDATE":
      const key = Object.keys(action.payload)[0];
      const value = action.payload[key];
      return { ...state, [key]: value };
    case "RESET":
      const obj = action.payload;
      return { ...obj };
    default:
      return { ...state };
  }
}

function AddBookForm() {
  // create initial state
  const initialState = {};
  bookColumns[0].columns.forEach((row) => (initialState[row.Header] = ""));
  delete initialState.ID;

  // store initial state in reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  // modal state
  const [modal, setModal] = useState(false);
  // handle modal toggle
  const toggle = () => setModal(!modal);

  // handle onSubmit
  const onSubmit = async () => {
    const result = await addBook(state);
    toggle();
    const action = {
      type: "RESET",
      payload: { ...initialState },
    };
    dispatch(action);
  };

  // handle onChange
  const onChange = (e) => {
    const newObj = {
      type: "UPDATE",
      payload: { [e.target.name]: e.target.value },
    };
    dispatch(newObj);
  };

  return (
    <div>
      <Label htmlFor="newBook">
        Add new book{" "}
        <Button id="newBook" onClick={toggle}>
          <FontAwesomeIcon icon={faFolderPlus} />
        </Button>
      </Label>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add new book</ModalHeader>
        <ModalBody>
          <Form>
            {Object.keys(state).map((key) => (
              <Label key={`label-${key}`} style={{ padding: "0.5em" }}>
                {key}
                <Input
                  key={`input-${key}`}
                  type="text"
                  name={key}
                  value={state[key]}
                  onChange={(e) => onChange(e)}
                />
              </Label>
            ))}
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onSubmit}>
            Add
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddBookForm;
