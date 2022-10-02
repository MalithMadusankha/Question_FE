import Header from "components/Headers/Header";
import React, { useState } from "react";
import {
  Card,
  CardFooter,
  CardHeader,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  Container,
  Badge,
  Button,
} from "reactstrap";

export default function Summary() {
  const [statusValue, setStatusValue] = useState("Approve");
  const [statusColor, setstatusColor] = useState("success");
  const [statusOpen, setStatusOpen] = useState(false);

  const toggleStatus = () => setStatusOpen((prevState) => !prevState);
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Card className="mt-4 shadow">
          <CardHeader className="border-0">
            <h3 className="mb-0 text-primary">Summary Of Attempts </h3>
          </CardHeader>
          <Table className="align-items-center table-flush" responsive>
            <thead className="thead-light">
              <tr>
                <th scope="col">Full Name</th>
                <th scope="col">Technical Score</th>
                <th scope="col">Soft Skill Score</th>
                <th scope="col">Overall Grade</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>john Smith</td>
                <td>80%</td>
                <td>85%</td>
                <td>A</td>
                <td>
                  <div className="d-flex">
                  <Badge color="success">Approve</Badge>
                  </div>
                </td>
                <td>
                  <Button className="pt-1  px-1 pb-0 rounded-circle" size="sm">
                    <i className={`bx bx-show fs-5 text-${statusColor}`}></i>
                    </Button>
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
