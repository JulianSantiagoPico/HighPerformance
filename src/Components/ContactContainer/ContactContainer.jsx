import Card from 'react-bootstrap/Card';
import ContactForm2 from '../ContactForm/ContactForm2';

const ContactContainer = () => {
  return (
    <div>
        <div style={{display:"flex", justifyContent:"center", marginTop:"1rem", marginBottom:"1rem"}}>
        <Card style={{width:"98%", display:"flex", alignItems:"center", padding:"1rem", backgroundColor:"#fafafa"}}>
          <Card.Body>
              <ContactForm2 />
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default ContactContainer