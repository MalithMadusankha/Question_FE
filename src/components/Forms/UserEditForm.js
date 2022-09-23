import { useState } from "react";
import {
  Form,
  FormGroup,
  Input,
  Col,
  Row,
  Button,
} from "reactstrap";

export default function UserEditForm() {
  const [category, setCategoryOpen] = useState(false);

  const toggleCategory = () => setCategoryOpen((prevState) => !prevState);
  return (
    <>
     <Form>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="">
                    <Row>
                      <Col>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-full-name"
                          >
                            Full Name
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Malith Madsuankha"
                            id="input-full-name"
                            placeholder="Full Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email address
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            defaultValue="mm@example.com"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-nic"
                          >
                            NIC
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-nic"
                            placeholder="NIC"
                            defaultValue="5212737v"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-gender"
                          >
                            Gender
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-gender"
                            placeholder="Gender"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                        <label
                            className="form-control-label"
                            htmlFor="input-cv"
                          >
                            CV
                          </label>
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
                  </div>
                  <div class="d-flex flex-row-reverse"><Button type="submite" color="success"> Save </Button></div>
                </Form>
    </>
  );
}
