import React, { useContext, useRef, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Button from '../ui/button';
import { yupResolver } from '@hookform/resolvers';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import * as yup from 'yup';

import { ThemeContext } from '../../context/theme/ThemeContext';

const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: var(--orange);
    text-align: center;
    font-size: 3rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  margin: 0 auto;
  background-color: ${props => (props.dark ? '#383A3F' : '#F2F2F2')};
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
  background-color: ${props => (props.dark ? '#F3F3F3' : '#FDFDFD')};
`;

const FieldArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  margin: 0.6rem 0;
  border: none;
  outline: none;
  resize: vertical;
  border: 1px solid #ccc;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background-color: ${props => (props.dark ? '#F3F3F3' : '#FDFDFD')};
`;

const Error = styled.p`
  color: #fff;
  background-color: #e53a40;
  padding: 10px;
  text-align: left;
  border-radius: 10px;
`;

const Message = styled.p`
  color: #fff;
  background-color: #8cd790;
  padding: 10px;
  text-align: center;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const ButtonForm = styled(Button)`
  margin-top: 0.5rem;
  width: 100%;
  height: 2.8rem;
`;

const schema = yup.object({
  name: yup.string().required('the name is required.'),
  email: yup
    .string()
    .required('the email is required.')
    .email('enter a valid email.'),
  message: yup.string().required('the message is required.')
});

function ContactContent() {
  const { dark } = useContext(ThemeContext);
  const formRef = useRef(null);
  const {
    handleSubmit,
    errors,
    register,
    formState: { isSubmitting },
    reset
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all'
  });
  const [success, setSuccess] = useState(false);

  const onSubmit = async values => {
    const params = new URLSearchParams();
    params.append('name', values.name);
    params.append('email', values.email);
    params.append('form-name', 'contact');
    params.append('message', values.message);
    await axios.post('/', params);
    setSuccess(true);
    reset();
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(!success);
      }, 3000);
    }
  }, [success]);

  return (
    <Container>
      <h1>Contact</h1>
      {success && <Message>Your message has been sent successfully.</Message>}
      <Form
        dark={dark}
        method="post"
        ref={formRef}
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <Field
          ref={register}
          type="text"
          placeholder="Name"
          name="name"
          dark={dark}
        />
        {errors.name && <Error>{errors.name?.message}</Error>}
        <Field
          ref={register}
          type="email"
          placeholder="Email"
          name="email"
          dark={dark}
          required={false}
        />
        {errors.email && <Error>{errors.email?.message}</Error>}

        <FieldArea
          type="text"
          ref={register}
          placeholder="Message"
          name="message"
          dark={dark}
        />
        {errors.message && <Error>{errors.message?.message}</Error>}

        <ButtonForm disabled={isSubmitting} type="submit">
          Send
        </ButtonForm>
      </Form>
    </Container>
  );
}

export default ContactContent;
