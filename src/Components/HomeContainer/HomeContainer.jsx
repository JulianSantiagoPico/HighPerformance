import Card from 'react-bootstrap/Card';

const HomeContainer = () => {
  return (
    <div>
      <div style={{display:"flex", justifyContent:"center", marginTop:"1rem", marginBottom:"1rem", height:"31.8vh"}}>
        <Card style={{width:"98%", display:"flex", alignItems:"center", padding:"1rem"}}>
          <Card.Img variant="bottom" src="" />
          <Card.Body>
            <Card.Text>
              We're in the home page.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default HomeContainer