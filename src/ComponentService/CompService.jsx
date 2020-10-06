import React from 'react';
import {
  Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Row, Col, Container
} from 'reactstrap';

class CompService extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>

            <Col lg="3" md="6" xs="12 mb-2 mt-4 text-center">
              <Card>

                <CardHeader className="text-center bg-danger">HTML</CardHeader>
                <CardBody>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button className="btn-outline-primary">Go somewhere</Button>
                </CardBody>

              </Card>
            </Col>
            <Col lg="3" md="6" xs="12 mb-2 mt-4 text-center">
              <Card>
                <CardHeader className="text-center bg-danger">CSS</CardHeader>
                <CardBody>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button className="btn-outline-primary">Go somewhere</Button>
                </CardBody>

              </Card>
            </Col>
            <Col lg="3" md="6" xs="12 mb-2 mt-4 text-center">
              <Card>
                <CardHeader className="text-center bg-danger">JAVASCRIPT</CardHeader>
                <CardBody>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button className="btn-outline-primary">Go somewhere</Button>
                </CardBody>

              </Card>
            </Col>
            <Col lg="3" md="6" xs="12 mb-2 mt-4 text-center">
              <Card>
                <CardHeader className="text-center bg-danger">REACT JS</CardHeader>
                <CardBody>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button className="btn-outline-primary">Go somewhere</Button>
                </CardBody>


              </Card>

            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default CompService;