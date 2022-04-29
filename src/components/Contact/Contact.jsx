import React from "react";
import emailjs from 'emailjs-com'
import { ContactContainer, ContactForm, ContactInput, ContactInputWrapper,  ContactRowWrapper, ContactSubmit, ContactTextarea, ContactWrapper } from "./ContactElements";

const Contact = ({dark, lightBg}) => {

const sendEmailHandler = (e) => {
  e.preventDefault();

  emailjs.sendForm('gmail', 'template_bv9h30i', e.target , 'Qiar-hV1CHsibwdNM')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    e.target.reset();
}



  return (
    <div id="contact">
      <ContactContainer dark={dark}  lightBg={lightBg} >
        <ContactForm onSubmit={sendEmailHandler}>
          <ContactWrapper>
            <ContactRowWrapper>
              <ContactInputWrapper>
                <ContactInput placeholder="Name" name="name" type="text"/>
              </ContactInputWrapper>
              <ContactInputWrapper>
                <ContactInput placeholder="Email" name="email" type="email" />
              </ContactInputWrapper>
            </ContactRowWrapper>
            <ContactRowWrapper>
                <ContactInputWrapper>
                    <ContactInput placeholder="Subject" name="subject" type="text" />
                </ContactInputWrapper>
            </ContactRowWrapper>
            <ContactRowWrapper>
                <ContactInputWrapper>
                    <ContactTextarea  rows="10"  placeholder="Message" name="message" />
                </ContactInputWrapper>
            </ContactRowWrapper>
            <ContactRowWrapper>
                <ContactInputWrapper>
                    <ContactSubmit type="submit" >Send Message</ContactSubmit>
                </ContactInputWrapper>
            </ContactRowWrapper>

          </ContactWrapper>
        </ContactForm>
      </ContactContainer>
    </div>
  );
};

export default Contact;
