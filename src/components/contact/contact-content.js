import React from 'react';
import styled from '@emotion/styled';
import Button from '../ui/button';

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
  width: 40rem;
  margin: 0 auto;
`;

const Field = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  border: none;
  margin: 0.6rem 0;
  outline: none;
  border: 1px solid var(--black);

  &:focus {
    border: 1px solid var(--orange);
  }
`;

const FieldArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  margin: 0.6rem 0;
  border: none;
  outline: none;
  border: 1px solid var(--black);

  &:focus {
    border: 1px solid var(--orange);
  }
`;

function ContactContent() {
  return (
    <Container>
      <h1>Contact</h1>
      <Form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <Field
          type="text"
          placeholder="Name"
          name="name"
        />
        <Field
          type="email"
          placeholder="Email"
          name="email"
        />
        <Field
          type="text"
          placeholder="Subject"
          name="subject"
        />
        <FieldArea
          type="text"
          placeholder="Mesage"
          name="message"
        />
        <Button>Send</Button>
      </Form>
    </Container>
  )
}

export default ContactContent;