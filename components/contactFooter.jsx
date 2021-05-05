import React from "react";
import styled from "styled-components";
import Form from "./form";

export const SubFooter = styled.div`
  padding: 40px 0;
`;

const ContactFooter = () => {
  return (
    <SubFooter className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="display-2">Contacto</h2>
          </div>
          <div className="col-md-6">
            <Form />
          </div>
        </div>
      </div>
    </SubFooter>
  );
};

export default ContactFooter;
