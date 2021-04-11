import React, { useState } from 'react';
import '../../App.css';
import FormSendMail from '../FormSendMail';
import FormSuccess from '../FormSuccess';
import './Contact.css'
import Footer from '../Footer';



const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);


  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className="container">
        <h3>
          Robna kuća Zećanka, <br></br>
          Donja Gorica, Cetinjski put bb - Podgorica
        </h3>
        <br></br>
        <h5>
          +382 63 232 300
          <br></br>
          rkpodgorica@kavaricgroup.me
        </h5>
        <div className="form-container">
          {!isSubmitted ? <FormSendMail submitForm={submitForm}></FormSendMail> : <FormSuccess></FormSuccess>}
        </div>
        <iframe className="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23564.602731874238!2d19.21449!3d42.415487!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x480c69eaf8681f3a!2sZe%C4%87anka%20Home%20Store!5e0!3m2!1sen!2sus!4v1617794735089!5m2!1sen!2sus" width={500} height={600} style={{ border: 0 }} allowFullScreen loading="lazy" />
      </div>
      <Footer></Footer>
    </>
  )
}
export default Contact;

