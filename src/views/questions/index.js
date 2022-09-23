import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Card,
  Button,
  Col,
  Row,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CardFooter,
  CardHeader,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  Container,
} from "reactstrap";

import Header from '../../components/Headers/Header'

export default function Index() {
  const [technologyOpen, setTechnologyOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [softSkillOpen, setSoftSkillOpen] = useState(false);

  const toggleTechnology = () => setTechnologyOpen((prevState) => !prevState);
  const toggleCategory = () => setCategoryOpen((prevState) => !prevState);
  const toggleSoftSkill = () => setSoftSkillOpen((prevState) => !prevState);
  return (
    <>
    <Header/>
      <Container className="mt--7" fluid>
        
        <Card className="mt-3 shadow">
          <CardHeader className="border-0">
          <h2>Question Setting</h2>
            <h3 className="mb-0 text-primary">Add Technical Question</h3>
          </CardHeader>
          <Form className="px-3 pb-3">
            <Row>
              <Col className="col-sm-3">
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
              </Col>
              <Col className="col-sm-3">
                <div className="d-flex">
                  <Dropdown isOpen={technologyOpen} toggle={toggleTechnology}>
                    <DropdownToggle caret>Select technology</DropdownToggle>
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
                </div>
              </Col>
              <Col className="col-sm-3">
                <div className="d-flex">
                  <Dropdown isOpen={categoryOpen} toggle={toggleCategory}>
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
                </div>
              </Col>
              <Col>
                <Button color="primary" type="submite">
                  Upload Question
                </Button>
              </Col>
            </Row>
          </Form>
          <CardHeader className="border-0">
            <h3 className="mb-0 text-primary">Add Soft Skill Question</h3>
          </CardHeader>
          <Form className="px-3 pb-5">
            <Row>
              <Col className="col-sm-6">
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
              </Col>
              <Col className="col-sm-3">
                <div className="d-flex">
                  <Dropdown isOpen={softSkillOpen} toggle={toggleSoftSkill}>
                    <DropdownToggle caret>Select soft skill</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Leadership</DropdownItem>
                      <DropdownItem>Team Work</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </Col>
              <Col>
                <Button color="primary" type="submite">
                  Upload Question
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
        <Card className="mt-4 shadow">
          <CardHeader className="border-0">
            <h3 className="mb-0 text-primary">Available Questions</h3>
          </CardHeader>
          <Table className="align-items-center table-flush" responsive>
            <thead className="thead-light">
              <tr>
                <th scope="col">Technology</th>
                <th scope="col">Category</th>
                <th scope="col">Date</th>
                <th scope="col"></th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>JAVA</td>
                <td>Online</td>
                <td>12/05/2022</td>
                <td className="text-right">
                  <Link>
                    <i class="bx bx-info-circle bx-burst fs-5"></i>
                  </Link>
                </td>
              </tr>
            </tbody>
          </Table>
          <CardFooter className="py-4">
            <nav aria-label="...">
              <Pagination
                className="pagination justify-content-end mb-0"
                listClassName="justify-content-end mb-0"
              >
                <PaginationItem className="disabled">
                  <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    tabIndex="-1"
                  >
                    <i className="fas fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="active">
                  <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    2 <span className="sr-only">(current)</span>
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fas fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </nav>
          </CardFooter>
        </Card>
      </Container>
    </>
  );
}
