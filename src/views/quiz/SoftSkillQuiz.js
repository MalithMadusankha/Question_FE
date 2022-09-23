import { Box } from "@material-ui/core";
import Header from "components/Headers/Header";
import React from "react";
import { useState } from "react";
import {
  Card,
  Button,
  Row,
  Label,
  Container,
} from "reactstrap";

export default function SoftSkillQuiz() {
  const [getStarted, setGetStarted] = useState("");
  const [questionOn, setquestionOn] = useState("d-none");

  return (
    <>
    <Header/>
      <Container className="mt--7" fluid>
      
        <div class="d-flex justify-content-between">
          <Card className={`mt-3 px-3 py-1 shadow ${questionOn} `}>1/10</Card>
          <Card className={`mt-3 px-3 py-1 shadow ${questionOn} `}>
            10.00.00
          </Card>
        </div>
        <Card className={`mt-3 shadow ${getStarted}`}>
          <Row>
            <center>
              <Box className="p-5">
                <Label>Brief Description about the quiz</Label>
              </Box>
              <Box className="p-5">
                <Button
                  color="primary"
                  type="submite"
                  onClick={() => {
                    setGetStarted("d-none");
                    setquestionOn("");
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </center>
          </Row>
        </Card>
        <Card className={`mt-3 shadow ${questionOn}`}>
          <Row>
            <center>
              <Box className="p-5">
                <Label>Present the question here Present the question here Present the 
                  question herePresent the question here Present the question here 
                  Present the question herePresent the question herePresent the question here</Label>
              </Box>
              <Box className="px-5">
                <div class="d-flex justify-content-center col-4">
                  <div  >
                  <Button size="sm"
                      color="primary"
                      type="submite"
                  
                    >
                      <i class='bx bx-volume-full fs-5'></i>
                    </Button>
                  </div>
                  <div className="ps-3">
                    <Button size="sm"
                      type="submite"
                  
                    >
                      <i class='bx bxs-microphone fs-5' ></i>
                    </Button>
                  </div>
                </div>

                <div  className="p-5"><Button
                  color="primary"
                  type="submite"
             
                >
                  Next 
                </Button></div>
              </Box>
        
            </center>
          </Row>
        </Card>
      </Container>
    </>
  );
}
