import AddCategoryForm from "components/Forms/AddCategoryForm";
import AddJobForm from "components/Forms/AddJobForm";
import Header from "components/Headers/Header";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Button,
  Col,
  Row,
  CardFooter,
  CardHeader,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  Modal, ModalHeader, ModalBody, ModalFooter, Container
} from "reactstrap";

export default function Index() {
  const [jobModal, setJobModal] = useState(false);
  const [categoryModal, setCategoryModal] = useState(false);

  const toggleJob = () => setJobModal(!jobModal);
  const toggleCategory = () => setCategoryModal(!categoryModal);
  return (
    <>
    <Header/>
      <Container className="mt--7" fluid>

        <Card className="mt-4 shadow">
          <CardHeader className="border-0">
          <Row>
          <Col>
          <h3 className="mb-0 text-primary">Available Questions</h3>
          </Col>
          <Col>
            <div className="d-flex flex-row-reverse">
              <div className="px-1">
                <Button color="primary" size="sm"  onClick={toggleCategory}>
                  <i class="bx bx-plus"></i> Add Category
                </Button>
              </div>
              <div className="px-1">
                <Button color="primary" size="sm"  onClick={toggleJob}>
                  <i class="bx bx-plus"></i> Add Job
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        
          </CardHeader>
          <Table className="align-items-center table-flush" responsive>
            <thead className="thead-light">
              <tr>
                <th scope="col">Job Title</th>
                <th scope="col">Category</th>
                <th scope="col">Date</th>
                <th scope="col"></th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Software Developer</td>
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
      <Modal isOpen={jobModal} toggle={toggleJob}>
        <ModalHeader toggle={toggleJob}><h3 className="text-primary">Add Job</h3> </ModalHeader>
        <ModalBody>
          <AddJobForm/>
        </ModalBody>
      </Modal>
      <Modal isOpen={categoryModal} toggle={toggleCategory}>
        <ModalHeader toggle={toggleCategory}><h3 className="text-primary">Add Category</h3> </ModalHeader>
        <ModalBody>
          <AddCategoryForm/>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>
    </>
  );
}
