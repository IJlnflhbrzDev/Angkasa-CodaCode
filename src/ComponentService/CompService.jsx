import React from 'react';
import {
  Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Row, Col, Container
} from 'reactstrap';

class CompService extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col lg="3" md="6" xs="6">
            <Card>
              <CardHeader className="text-center bg-danger">Header</CardHeader>
              <CardBody>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </CardBody>
              <CardFooter>Footer</CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" xs="6">
            <Card>
              <CardHeader className="text-center bg-danger">Header</CardHeader>
              <CardBody>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </CardBody>
              <CardFooter>Footer</CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" xs="6">
            <Card>
              <CardHeader className="text-center bg-danger">Header</CardHeader>
              <CardBody>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </CardBody>
              <CardFooter>Footer</CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" xs="6">
            <Card>
              <CardHeader className="text-center bg-danger">Header</CardHeader>
              <CardBody>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </CardBody>
              <CardFooter>Footer</CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default CompService;