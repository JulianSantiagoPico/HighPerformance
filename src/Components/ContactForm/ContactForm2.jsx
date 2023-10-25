import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ContactForm2 = () => {
  return (
    <Container fluid>
        <Row>
            <Col>
                <div style={{display:"flex", justifyContent:"center", marginTop:"1rem", marginBottom:"1rem"}}>
                    <Card style={{width:"98%", display:"flex", alignItems:"center", padding:"1rem", backgroundColor:"#fafafa"}}>
                        <Card.Body>

                            <Row style={{gap:"3rem", alignItems:"center"}}>
                                <Col sm={12} lg={4} style={{textAlign:"center"}}>
                                    <h2 className="mb-3">How to get here!</h2>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.700881774662!2d-118.05699772475052!3d34.05154321776807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2d0f28545cb13%3A0x5c4661eea1a5d1cc!2s9832%20Rush%20St%2C%20El%20Monte%2C%20CA%2091733%2C%20EE.%20UU.!5e0!3m2!1ses!2sco!4v1697682184180!5m2!1ses!2sco" width="400" height="300" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>
                                </Col>

                                <Col sm={12} lg={7}>

                                    <h1 className='mb-3'>Have questions or ready to schedule repairs? <br/> Contact us now!</h1>

                                    <Form>

                                        <FloatingLabel controlId="floatingInput" label="Name" className='mb-3'>
                                            <Form.Control type="text" placeholder="Name" />
                                        </FloatingLabel>

                                        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                                            <Form.Control type="email" placeholder="Email Adress" />
                                        </FloatingLabel>

                                        <FloatingLabel controlId="floatingInput" label="Subject" className='mb-3'>
                                            <Form.Control type="text" placeholder="Subject" />
                                        </FloatingLabel>

                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label> Your message here! </Form.Label>
                                        <Form.Control as="textarea" rows={5} />
                                        </Form.Group>

                                        <Button type="submit">Submit</Button>
                                    </Form>
                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </div>
            </Col>
    </Row>
    </Container>
  )
}

export default ContactForm2