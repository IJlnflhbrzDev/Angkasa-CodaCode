import React from 'react';
import 'boxicons'
import { Alert, Jumbotron, Button, Container, Row, Col, Card, CardTitle, CardText } from 'reactstrap';




const BoxComponent = () => {
  return (
    <div id="CompBoxJumbotrons" >
      <Row>
        <Col>
          <h2 className="mb-2">Selamat Datang Kamu</h2>
        </Col>
      </Row>
      <Row>
        <Col xl="3" sm="6" xs="12" >
          <Card id="CardCompBoxIcon" body>
            <div className="text-center">
              <box-icon color="red" animation="tada" size="lg" name='html5' type='logo' ></box-icon>
            </div>
            <Button>HTML</Button>
          </Card>
        </Col>
        <Col lg="3" sm="6" xs="12">
          <Card id="CardCompBoxIcon" body>
            <div className="text-center">
              <box-icon color="blue" animation="tada" size="lg" name='css3' type='logo' ></box-icon>
            </div>
            <Button>CSS</Button>
          </Card>
        </Col>
        <Col lg="3" sm="6" xs="12">
          <Card id="CardCompBoxIcon" body>
            <div className="text-center">
              <box-icon color="yellowgreen" animation="tada" size="lg" name='javascript' type='logo' ></box-icon>
            </div>
            <Button>JAVASCRIPT</Button>
          </Card>
        </Col>
        <Col lg="3" sm="6" xs="12">
          <Card id="CardCompBoxIcon" body>
            <div className="text-center">
              <box-icon color="purple" animation="tada" size="lg" name='bootstrap' type='logo' ></box-icon>
            </div>
            <Button>BOOTSTRAP</Button>
          </Card>
        </Col>

      </Row>
    </div >
  )

}

class CompJumbotron extends React.Component {
  render() {
    return (


      <Jumbotron id="CompJumbotron" className="d-flex align-items-center flex-column justify-content-center">
        <Row>
          <div id="CompBoxJumbotrons_Content">
            <Col>
              <h1 className="font-weight-bold text-white ">Belajar Budi Daya Code Bersama DeveloperKids</h1>
              <hr className="my-2 mt-3" color="text-primary" />
              <p className="lead">Jangan tunggu nanti, tanamlah sekarang biar cepat panen!</p>
              <p className="lead">

              </p>
            </Col>

          </div>
        </Row>

        <BoxComponent />
      </Jumbotron>




    )
  }
}

export default CompJumbotron;