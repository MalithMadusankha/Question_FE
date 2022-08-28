import { Box } from "@material-ui/core";
import { Card } from "@mui/material";
import React from "react";
import { Form } from "react-bootstrap";
import { Button, Col, Label, Row } from "reactstrap";

export default function Index() {
  return (
    <>
      <Box className="p-5">
        <Card className="mt-3 p-3">
          <Form>
            <Label className="font-weight-bold text-primary">Take Photo</Label>
            <Row>
              <Col className="col-sm-10">
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
              <Col>
              <Button color="primary" type="submite"> Upload </Button>
              </Col>
            </Row>
            
          </Form>
          <Box className="pt-4">
            <Label className="font-weight-bold text-primary">Status</Label>
          </Box>
          <Box className="pt-3">
            <Box>
              <Label className="font-weight-bold">Grade :</Label>
              <Label className="ps-2"> Health</Label>
            </Box>
            <Box>
              <Label className="font-weight-bold">Fruit :</Label>
              <Label className="ps-2">Papaya </Label>
            </Box>
            <Box>
              <Label className="font-weight-bold">Condition :</Label>
              <Label className="ps-2"> Edible</Label>
            </Box>
            <Box>
              <Label className="font-weight-bold">Method of Rippend :</Label>
              <Label className="ps-2">Natural</Label>
            </Box>
            <Box>
              <Label className="font-weight-bold">Diseases :</Label>
              <Label className="ps-2"> Detected</Label>
            </Box>
            <Box>
              <ul>
                <li><Label>Scab</Label></li>
                <li><Label>Sooty bloch</Label></li>
              </ul>
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  );
}
