import React from "react";
import { Form, Field } from "react-final-form";

function Formularios() {
  function onSubmit(values) {
    // Aquí puedes usar values para enviar la información
  }

  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" id="email" type="email" />
          <label htmlFor="password">Password</label>
          <Field
            name="password"
            component="input"
            id="password"
            type="password"
          />
          <button type="submit">Enviar</button>
        </form>
      )}
    </Form>
  );
}
export default Formularios