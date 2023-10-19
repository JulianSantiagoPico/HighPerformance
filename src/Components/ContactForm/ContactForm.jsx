import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ContactForm = () => {
  return (
    <div>
        <h1 className='mb-3' style={{fontSize:"2rem", textAlign:"center"}}>Have questions or ready to schedule repairs? <br/> Contact us now!</h1>
        <div>
        <Form>

            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control type="email" placeholder="Email Adress" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="Subject" className='mb-3'>
                <Form.Control type="text" placeholder="Subject" />
            </FloatingLabel>

            <Button type="submit">Submit</Button>
        </Form>
        </div>
    </div>
  )
}

export default ContactForm