import Card from 'react-bootstrap/Card';

const ServicesContainer = () => {
  return (
    <div>
        <div style={{display:"flex", justifyContent:"center", marginTop:"1rem"}}>
        <Card style={{width:"98%", display:"flex", alignItems:"center", padding:"1rem"}}>
          <Card.Img variant="bottom" src="" />
          <Card.Body>
            <Card.Text>
              We're in the services page.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default ServicesContainer