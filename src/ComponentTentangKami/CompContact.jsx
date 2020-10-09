import React from 'react';
import 'boxicons'
import { Row, Col, Button, Form, FormGroup, Label, Input, Container, Card } from 'reactstrap';


export default function CompContact() {
  return (
    <>
      <Container>

        <div className="text-center container p-5">
          <h2 className="font-weight-bold mb-4">CONTACT
        <hr color="text-danger" />
          </h2>
          {/* #Bagian Contact Ini akan Saya responkan Dengan Json Secara Dinamis dibagian <p> */}
          <p>Apa yg ingin anda tanyakan Terutama Tentang artikel ini Mari Berikan Saran Anda Kepada Kami supaya Kami gampang MenDevelop Kekurangan pada Artikel Web ini Terimakasih</p>
        </div>

        <div id="CompContact" className="">
          <Row>
            <Col xl="6" md="12 mb-2" xs="12 mb-1">
              <Card className="font-weight-bold text-center d-block p-2  ">
                <box-icon name='map' size="md" color="blue" type='solid' ></box-icon>
                <h2>Our Adress</h2>
                <p className="mt-4 font-italic">71520 Cibitung City, INDONESIA  </p>
              </Card>
            </Col>
            <Col xl="3" md="6" xs="12 mb-1">
              <Card className="font-weight-bold text-center d-block p-2  ">
                <box-icon type='solid' color="white" name='message-detail' size="md"></box-icon>
                <h2 className="mt-1">Email Us</h2>
                <p className="mt-4">IJlnflhbrzDev@gmail.com</p>
              </Card>
            </Col>
            <Col xl="3" md="6" xs="12 mb-2">
              <Card className="font-weight-bold text-center d-block p-2  ">
                <box-icon type='solid' color="yellow" name="map" size="md"></box-icon>
                <h2 className="mt-1">Call Us</h2>
                <p className="mt-4">+628 9673 584023</p>
              </Card>
            </Col>

          </Row>
          <Row>

            <Col xl="6 " md="6" xs="12">
              <div id="CompIframe" className="embed-responsive embed-responsive-16by9 align-self-center">
                <iframe className="embed-responsive-item" src="https://github.com/IJlnflhbrzDev/IJlnflhbrzDev-Cv" allowFullScreen></iframe>
              </div>
            </Col>
            <Col xl="6" md="6" xs="12" className="p-3">
              <Form>
                <FormGroup>
                  <Label for="email">Your Email</Label>
                  <Input type="email" name="email" id="email" placeholder="Masukan Email Anda"></Input>
                </FormGroup>
                <FormGroup>
                  <Label for="text">Your Subject</Label>
                  <Input type="text" name="text" id="text" placeholder="Masukan Saran Anda"></Input>
                </FormGroup>
                <FormGroup>
                  <Label for="textarea">Your Message</Label>
                  <Input type="textarea" name="textarea" id="textarea" placeholder="Masukan Pesan Anda Kepada Kami"></Input>
                </FormGroup>
                <Button className="bg-primary w-100">Kirim</Button>
              </Form>
            </Col>
          </Row>
        </div>
      </Container >
    </>
  )
}
