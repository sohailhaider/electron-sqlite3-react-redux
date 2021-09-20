import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CreateUpdateEmployee from "./EmployeePages/CreateUpdateEmployee";
import EmployeesListing from "./EmployeePages/EmployeesListing";

const Home = () => {
  const [editUser, setEditUser] = useState(null);
  return (
    <Container fluid style={{ margin: "0px" }}>
      <Row>
        <Col className="text-center mt-3 pb-3">
          <h2>Employees Records</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <CreateUpdateEmployee editUser={editUser} />
        </Col>
      </Row>
      <Row>
        <Col>
          <EmployeesListing setEditUser={setEditUser} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
