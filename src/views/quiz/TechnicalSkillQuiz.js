import { Box } from "@material-ui/core";
import Header from "components/Headers/Header";
import React from "react";
import { useState } from "react";
import Wave from "react-wavify";
import {
  Card,
  Button,
  Row,
  Label,
  Container,
} from "reactstrap";

export default function TechnicalSkillQuiz() {
  const [getStarted, setGetStarted] = useState("");
  const [questionOn, setquestionOn] = useState("d-none");
  const [waveOff, setWaveOff] = useState(false)

  // const toggleCategory = () => setCategoryOpen((prevState) => !prevState);
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
                    <Wave style={{height: "30px"}}
                      fill="#1277b0"
                      paused={waveOff}
                      options={{
                        height: 9,
                        amplitude: 10,
                        speed: 0.55,
                        points: 10,
                      }}
                      onClick={() => { setWaveOff(!waveOff)}}
                    />
                  </div>
                  <div className="ps-3">
                    <Button size="sm"
                      color="primary"
                      type="submite"
                  
                    >
                      <i class='bx bxs-microphone fs-5' ></i>
                    </Button>
                  </div>
                </div>

                <div  className="pt-4"><Button
                  color="primary"
                  type="submite"
             
                >
                  Next 
                </Button></div>
              </Box>
              <Box className="p-5">
                <Button
                  color="primary"
                  type="submite"
              
                >
                  Attitude Quiz
                </Button>
              </Box>
            </center>
          </Row>
        </Card>
      </Container>
    </>
  );
}
