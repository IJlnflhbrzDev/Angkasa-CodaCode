import React from 'react';
import { Row, Container, Col, Button, Jumbotron, CardText, Card } from 'reactstrap';


class CompTentang extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron className="d-flex justify-content-between" id="CompTentangKami">
          <Container>
            <Row>
              <Col md="5">
                <img src="https://bootstrapmade.com/demo/themes/Techie/assets/img/features.svg"></img>
              </Col>
              <Col md="7" className="d-flex justify-content-center align-items-center flex-column ">
                <Card className="p-4 text-center mt-3 bg-primary bg-transparent">
                  <h2 className="mb-4 ">Tentang Angkasa Developer</h2>
                  <CardText>Kami Adalah Artikel Web Yg Insyallah Akan Membuat Pembelajaran Pemrograman Secara Gratis Terutama untuk Bagian Web Developer</CardText>
                  <Button className="btn-outline-primary w-100">Join Now!</Button>
                </Card>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}


export default CompTentang;