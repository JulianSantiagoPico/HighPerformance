import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const InsuranceContainer2 = () => {
  return (
    <div>
        <div style={{display:"flex", justifyContent:"center", marginTop:"1rem", marginBottom:"1rem"}}>
            <Card style={{width:"98%", display:"flex", alignItems:"center", padding:"1rem", backgroundColor:"#fafafa"}}>
                <Card.Body>
                    <Container fluid>
                        <Row>
                            <Col>
                                <div style={{display:"flex", justifyContent:"center"}} className='my-4'>
                                    <Row style={{display:"flex", alignItems:"center", justifyContent:"center"}} className='sm:gap-4 lg:gap-0'>
                                        <Col sm={12} lg={6} className='text-center'>
                                            <h1>
                                                Going through insurance?
                                            </h1>
                                            <h4 className="px-12">
                                                We work with a variety of insurances that cover most of your needs related to ADAS calibrations!
                                            </h4>
                                            <Button variant="danger" href='HighPerformance/contact' size="lg" style={{marginTop:"1rem"}}>Contact us!</Button>
                                        </Col>

                                        <Col sm={12} lg={6}>
                                            <Image src="https://res.cloudinary.com/duqtm5tnb/image/upload/v1698021884/HighPerformance/image-asset_1_o4vrwt.jpg" rounded />
                                        </Col>
                                    </Row>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    </div>
  )
}

export default InsuranceContainer2