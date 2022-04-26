import React from "react";
import emailjs from 'emailjs-com'
import { ContactContainer, ContactEmailInput, ContactForm, ContactInputWrapper, ContactNameInput, ContactRowWrapper, ContactSubjectInput, ContactSubmit, ContactTextarea, ContactWrapper } from "./ContactElements";

const Contact = () => {

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
      <ContactContainer>
        <ContactForm onSubmit={sendEmailHandler}>
          <ContactWrapper>
            <ContactRowWrapper>
              <ContactInputWrapper>
                <ContactNameInput placeholder="Name" name="name" />
              </ContactInputWrapper>
              <ContactInputWrapper>
                <ContactEmailInput placeholder="Email" name="email" />
              </ContactInputWrapper>
            </ContactRowWrapper>
            <ContactRowWrapper>
                <ContactInputWrapper>
                    <ContactSubjectInput placeholder="Subject" name="subject"/>
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
