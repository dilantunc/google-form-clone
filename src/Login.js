import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <Card className="login-card">
        <CardBody>
          <CardTitle tag="h5" className="text-center">
            Giriş Yap
          </CardTitle>
          <Form>
            <FormGroup>
              <Label for="email">E-posta</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="E-posta"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Şifre</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Şifre"
              />
            </FormGroup>
            <Button
              type="submit"
              color="primary"
              className="w-100"
              style={{ marginTop: 20 }}
            >
              Giriş Yap
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
