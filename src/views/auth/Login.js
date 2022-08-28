import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
// reactstrap components
import { useHistory } from "react-router";
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  //  Validation Schema
  const validationSchema = Yup.object({
    email: Yup.string().email("*Invalid email!").required("*Please Enter Email!"),
    password: Yup.string().required("*Please Enter Password!"),
  });

  let history = useHistory();

  //--------- seperate into different users---------------
  const onSubmit = (values) => {
    axios
      .post("http://localhost:8080/auth-user/login", values)
      .then((res) => {
        console.log(res.data);

        localStorage.setItem("profile", JSON.stringify(res.data));
        const user = JSON.parse(localStorage.getItem("profile"));
        console.log(user?.result?.user_type);
          history.push({
            pathname: `/super-fruits`,
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0 mt-5">
          <CardHeader className="bg-transparent pb-2">
            <div className="text-muted text-center mt-2 mb-3">
              <h1 className="text-primary" >Sign in Here</h1 >
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <Form onSubmit={formik.handleSubmit}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Email" type="email" name="email" autoComplete="new-email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                </InputGroup>
                {formik.touched.email && formik.errors.email ? <div style={{ color: "red" }}>{formik.errors.email}</div> : null}
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Password" type="password" name="password" autoComplete="new-password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
                </InputGroup>
                {formik.touched.password && formik.errors.password ? <div style={{ color: "red" }}>{formik.errors.password}</div> : null}
              </FormGroup>
              <div className="text-center">
                <Button className="my-4" color="primary" type="submit">
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">

        </Row>
      </Col>
    </>
  );
};

export default Login;
