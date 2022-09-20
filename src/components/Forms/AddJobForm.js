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

export default function AddJobForm() {
  const [category, setCategoryOpen] = useState(false);

  const toggleCategory = () => setCategoryOpen((prevState) => !prevState);
  return (
    <>
      <Form>
        <Row>
             <Col>
          <FormGroup>
            <Label for="exampleEmail">Job Title</Label>
            <Input />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
          <Label for="exampleEmail">Job Category</Label>
            <Dropdown isOpen={category} toggle={toggleCategory}>
              <DropdownToggle caret>Select category</DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem>Some Action</DropdownItem>
                <DropdownItem text>Dropdown Item Text</DropdownItem>
                <DropdownItem disabled>Action (disabled)</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Foo Action</DropdownItem>
                <DropdownItem>Bar Action</DropdownItem>
                <DropdownItem>Quo Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </FormGroup>
        </Col>
        </Row>
        <div class="d-flex flex-row-reverse"><Button type="submite" color="primary"> Upload Job</Button></div>
      </Form>
    </>
  );
}
