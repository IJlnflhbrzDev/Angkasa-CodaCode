import React from 'react';
import { Row, Container, Col, Button, Jumbotron, CardText, Card } from 'reactstrap';


class CompTentang extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron className="d-flex justify-content-between" style={{ backgroundColor: '#2F4A55' }}>
          <Container>
            <Row>
              <Col md="5">
                <img src="https://bootstrapmade.com/demo/themes/Techie/assets/img/features.svg"></img>
              </Col>
              <Col md="7" className="d-flex justify-content-center align-items-center flex-column">
                <Card className="p-4 text-center mt-3 bg-primary">

                  <h2>Tentang Angkasa Developer</h2>
                  <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptates minima vel cum culpa, similique aperiam. Ex voluptate aut fugit, quo rem obcaecati minima delectus soluta reprehenderit molestias neque tempore.</CardText>
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