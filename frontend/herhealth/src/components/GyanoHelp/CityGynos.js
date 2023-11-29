// CityGynos.js
import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const CityGynos = ({ city, gynos }) => {
  return (
    <div className="city-gynos">
      <h3>Contact Gynecologists in {city}</h3>
      <Row>
        {gynos.map((gyno, index) => (
          <Col key={index} sm={6} md={4} lg={3}>
            <Card className="gyno-card">
              <Card.Img variant="top" src={gyno.photo} alt={gyno.name} />
              <Card.Body>
                <Card.Title>{gyno.name}</Card.Title>
                <Card.Text>
                  {gyno.specialization} | {gyno.contact}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CityGynos;
