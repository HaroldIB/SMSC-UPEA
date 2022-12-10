import React from "react";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
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
            href="#!"
            role="button"
          >
            <a href="https://www.facebook.com/ElAltoSeguridadCiudadana">
              <FacebookIcon size={25} round />
            </a>
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#55acee" }}
            href="#!"
            role="button"
          >
            <a href="https://www.facebook.com/ElAltoSeguridadCiudadana">
              <TwitterIcon size={25} round />
            </a>
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#075E54" }}
            href="#!"
            role="button"
          >
            <a href="https://www.facebook.com/ElAltoSeguridadCiudadana">
              <WhatsappIcon size={25} round />
            </a>
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
