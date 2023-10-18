import Card from 'react-bootstrap/Card';
import ContactForm from '../ContactForm/ContactForm';

const ContactContainer = () => {
  return (
    <div>
        <div style={{display:"flex", justifyContent:"center", marginTop:"1rem", marginBottom:"1rem"}}>
        <Card style={{width:"98%", display:"flex", alignItems:"center", padding:"1rem", backgroundColor:"#fafafa"}}>
          <Card.Body>
              <ContactForm />
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default ContactContainer