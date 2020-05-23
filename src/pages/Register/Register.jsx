import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { register } from "../../services/userRequests";

export default function Register() {
  const [loading, toggleLoading] = useState(false);
  const [state, setState] = useState({ Name: "", Email: "", Password: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const onSubmit = async () => {
    toggleLoading(true);
    console.log("state", state);
    const registration = await register(state);
    console.log("registration", registration);
    toggleLoading(false);
  };

  return (
    <div>
      <h1>Registration</h1>
      <Form>
        <FormGroup>
          <Label>
            Name
            <Input name="name" type="text" onChange={onChange} />
          </Label>
          <Label>
            Email
            <Input name="email" type="text" onChange={onChange} />
          </Label>
          <Label>
            Password
            <Input name="password" type="text" onChange={onChange} />
          </Label>
        </FormGroup>
        {loading ? (
          "Loading..."
        ) : (
          <Button
            color="primary"
            name="submit"
            value="Submit"
            onClick={onSubmit}
          >
            Submit
          </Button>
        )}
      </Form>
    </div>
  );
}
