import React from "react";
import { MDBFooter, MDBContainer, MDBBtn } from "mdb-react-ui-kit";
import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";

export default function App() {
  return (
    <MDBFooter className="bg-slate-300 text-center text-white">
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#3b5998" }}
            href="https://www.facebook.com/ElAltoSeguridadCiudadana"
            role="button"
          >
            <FacebookIcon size={25} round />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#55acee" }}
            href="https://twitter.com/?lang=es"
            role="button"
          >

            <TwitterIcon size={25} round />

          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#075E54" }}
            href="https://wa.me/59174011226"
            role="button"
          >
        
            <WhatsappIcon size={25} round />

          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright: Harold Bustamante
        <a className="text-white" href="https://www.google.com/">
        www.Google.com
        </a>
      </div>
    </MDBFooter>
  );
}
