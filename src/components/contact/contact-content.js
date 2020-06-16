import React, { useContext } from 'react';
import styled from '@emotion/styled';
import Button from '../ui/button';

import { ThemeContext } from '../../context/theme/ThemeContext';

const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  
  h1 {
    color: var(--orange);
    text-align: center;
    font-size: 3rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
  background-color: ${props => props.dark ? '#383A3F' : '#F2F2F2'};
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  @media screen and (min-width: 768px) {
    width: 40rem;
    margin: 0 auto;
  }
`;

const Field = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  border: none;
  margin: 0.6rem 0;
  outline: none;
  border: 1px solid #ccc;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background-color: ${props => props.dark ? '#F3F3F3' : '#FDFDFD'};
`;

const FieldArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  margin: 0.6rem 0;
  border: none;
  outline: none;
  border: 1px solid #ccc;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background-color: ${props => props.dark ? '#F3F3F3' : '#FDFDFD'};
`;

const ButtonForm = styled(Button)`
  margin-top: 0.5rem;
  width: 100%;
  height: 2.8rem;
`;

function ContactContent() {

  const { dark } = useContext(ThemeContext);

  return (
    <Container>
      <h1>Contact</h1>
      <Form dark={dark} method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <Field
          type="text"
          placeholder="Name"
          name="name"
          dark={dark}
        />
        <Field
          type="email"
          placeholder="Email"
          name="email"
          dark={dark}
        />
        <FieldArea
          type="text"
          placeholder="Message"
          name="message"
          dark={dark}
        />
        <ButtonForm>Send</ButtonForm>
      </Form>
    </Container>
  )
}

export default ContactContent;