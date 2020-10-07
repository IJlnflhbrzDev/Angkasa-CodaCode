import React from 'react';
import {
  Card, Button, CardHeader, CardFooter, CardBody, CardImg,
  CardTitle, CardText, Row, Col, Container
} from 'reactstrap';

class CompService extends React.Component {
  render() {
    return (
      <div id="CompService">
        <Container>
          <Row>
            <Col>
              <h1 className=" mt-2 text-center text-white mb-5">Basic Untuk Junior Developer</h1>
            </Col>
          </Row>
          <Row>
            <Col xl="3" md="6" xs="12 mb-2 mt-4 text-center">
              <Card>
                <CardHeader className="text-center bg-danger">HTML</CardHeader>
                <CardImg top width="100%" src="data:image/png;base64,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" alt="Card image cap" />
                <CardBody>
                  <CardText>Hypertext Markup Language (HTML) adalah bahasa markah standar untuk dokumen yang dirancang untuk ditampilkan di peramban internet. </CardText>

                </CardBody>

              </Card>
            </Col>
            <Col xl="3" md="6" xs="12 mb-2 mt-4 text-center">
              <Card>
                <CardHeader className="text-center bg-danger">CSS</CardHeader>
                <CardImg top width="100%" src="data:image/png;base64,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" alt="Card image cap" />
                <CardBody>
                  <CardText>CSS adalah kepanjangan dari Cascading Style Sheet yang berfungsi untuk mengatur tampilan elemen yang tertulis dalam bahasa markup.</CardText>

                </CardBody>

              </Card>
            </Col>
            <Col xl="3" md="6" xs="12 mb-2 mt-4 text-center">
              <Card>
                <CardHeader className="text-center bg-danger">JAVASCRIPT</CardHeader>
                <CardImg top width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjTN1U-2LQJUnoR7L1UhpVT4ldTfdbG-sd8A&usqp=CAU" alt="Card image cap" />
                <CardBody>
                  <CardText>JavaScript adalah salah satu bahasa pemrograman yang sering digunakan oleh website programmer atau website developer</CardText>

                </CardBody>


              </Card>

            </Col>
            <Col xl="3" md="6" xs="12 mb-2 mt-4 text-center">
              <Card>
                <CardHeader className="text-center bg-danger">BOOTSTRAP</CardHeader>
                <CardImg top width="100%" src="data:image/jpeg;base64,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" alt="Card image cap" />
                <CardBody>
                  <CardText>Bootstrap adalah sebuah library framework CSS yang juga sudah dibuat secara khusus guna mengembangkan front end</CardText>

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