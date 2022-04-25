import React from "react";
import { ContactContainer, ContactEmailInput, ContactForm, ContactInputWrapper, ContactNameInput, ContactRowWrapper, ContactSubjectInput, ContactSubmit, ContactTextarea, ContactWrapper } from "./ContactElements";

const Contact = () => {
  return (
    <>
      <ContactContainer>
        <ContactForm>
          <ContactWrapper>
            <ContactRowWrapper>
              <ContactInputWrapper>
                <ContactNameInput placeholder="Name"/>
              </ContactInputWrapper>
              <ContactInputWrapper>
                <ContactEmailInput placeholder="Email" />
              </ContactInputWrapper>
            </ContactRowWrapper>
            <ContactRowWrapper>
                <ContactInputWrapper>
                    <ContactSubjectInput placeholder="Subject"/>
                </ContactInputWrapper>
            </ContactRowWrapper>
            <ContactRowWrapper>
                <ContactInputWrapper>
                    <ContactTextarea  rows="10"  placeholder="Message"/>
                </ContactInputWrapper>
            </ContactRowWrapper>
            <ContactRowWrapper>
                <ContactInputWrapper>
                    <ContactSubmit type="submit"/>
                </ContactInputWrapper>
            </ContactRowWrapper>

          </ContactWrapper>
        </ContactForm>
      </ContactContainer>
    </>
  );
};

export default Contact;
