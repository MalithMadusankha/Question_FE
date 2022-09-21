import { Box } from "@material-ui/core";
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
  Label,
} from "reactstrap";

export default function CandidteJobs() {
  return (
    <>
      <Box className="p-5">
        <h2>Jobs</h2>
        <Card className="mt-3 shadow">
          <CardHeader className="border-0">
            <h3 className="mb-0 text-primary">Job Details</h3>
          </CardHeader>
          <Form className="px-3 pb-5">
            <Row className="px-3 ">
              <Col className="col">
                <Label> Job Title:</Label>{" "}
                <Label className="h4"> Software Developer</Label>
              </Col>
              <Col className="col">
                <Label> Job Category: </Label>{" "}
                <Label className="h4"> Fullstack </Label>
              </Col>
            </Row>
          </Form>
        </Card>
        <Card className="mt-4 shadow">
          <CardHeader className="border-0">
            <h3 className="mb-0 text-primary">Requirements</h3>
          </CardHeader>
          <Table className="align-items-center table-flush" responsive>
            <thead className="thead-light">
              <tr>
                <th scope="col">Technology</th>
                <th scope="col">Level</th>
                <th scope="col">Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Java Script</td>
                <td>Beginner</td>
                <td>Programing language</td>
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
      </Box>
    </>
  );
}
