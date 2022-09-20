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
            <Label>Select Category File</Label>
            <div class="custom-file">
                  <input
                    type="file"
                    class="custom-file-input"
                    id="validatedCustomFile"
                    required
                  />
                  <label class="custom-file-label" for="validatedCustomFile">
                    Choose file...
                  </label>
                  <div class="invalid-feedback">
                    Example invalid custom file feedback
                  </div>
                </div>
          </FormGroup>
        </Col>
        </Row>
        <div class="d-flex flex-row-reverse"><Button type="submite" color="primary"> Upload Category</Button></div>
       
      </Form>
    </>
  );
}
