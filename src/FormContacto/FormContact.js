
import React from 'react';
import Swal from 'sweetalert2'

import { Formik } from 'formik';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  Text,
  resize
} from "@chakra-ui/react"

const required = <Text
bg=" red"
bgClip="text"
fontSize="1xl"
fontWeight="200px"
>
Campo obligatorio</Text>
const invalidEmail = <Text
bg=" red"
bgClip="text"
fontSize="1xl"
fontWeight="200px"
>
Email invalido</Text>

const FormMessage = () => (
  <div>
    <h1>Formulario de mensaje</h1>
    <Formik
      initialValues={{ email: '', name: '', message:'' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = required;
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = invalidEmail;
        }
        if (!values.name) {
          errors.name = required;
        }
         if (!values.message) {
          errors.message = required;
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          Swal.fire('Mensaje enviado')

          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (

      <form onSubmit={handleSubmit}>
      
          <FormControl id="nameFormMsg" isRequired>
              <FormLabel>Nombre</FormLabel>
              <Input placeholder="Nombre"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              />
            </FormControl>
          {errors.name && touched.name && errors.name}

          <FormControl id="emailFormMsg" isRequired>
          <FormLabel>Email</FormLabel>
          <Input placeholder="Email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          />
        </FormControl>
          

          {errors.email && touched.email && errors.email}


          <FormControl id="msgForm" isRequired>
              <FormLabel>Mensaje</FormLabel>
              <Textarea  resize="none"  placeholder="Mensaje"
              name="message"
              onChange={handleChange} 
              onBlur={handleBlur}
              value={values.message}
              />
            </FormControl>
            {errors.message && touched.message && errors.message}
            <Button type={"submit"} mt="3" colorScheme="blue" variant="outline" disabled={isSubmitting}>Enviar</Button>

        </form>
      )}
    </Formik>
  </div>
);

export default FormMessage
