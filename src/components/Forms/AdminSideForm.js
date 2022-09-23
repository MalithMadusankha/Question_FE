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
                    <Row>
                      <Col>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-job-role"
                          >
                            Job Role
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-job-role"
                            placeholder="Job Role"
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
                            htmlFor="input-experience"
                          >
                            Experience
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-experience"
                            placeholder="Experience"
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
                            htmlFor="input-skill"
                          >
                            Skill
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-skill"
                            placeholder="NIC"
                            defaultValue="Skill"
                            type="textarea"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  <div class="d-flex flex-row-reverse"><Button type="submite" color="success"> Save </Button></div>
                </Form>
    </>
  );
}
