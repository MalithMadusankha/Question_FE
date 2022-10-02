import { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  DropdownToggle,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Col,
  Row,
  Button,
} from "reactstrap";

export default function AddCategoryForm() {
  return (
    <>
      <Form>
        <Row>
          <Col>
          <FormGroup>
              <Label for="exampleEmail">Category</Label>
              <Input />
            </FormGroup>
          </Col>
        </Row>
        <div class="d-flex flex-row-reverse">
          <Button type="submite" color="primary">
            {" "}
            Upload Category
          </Button>
        </div>
      </Form>
    </>
  );
}
