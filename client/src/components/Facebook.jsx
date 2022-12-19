import React from "react";

function Facebook() {
  return (
    <div>
      <aside>
        <div id="fb-root"></div>
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v15.0"
          nonce="DSf0yQmX"
        ></script>
        <div
          className="fb-page"
          data-href="https://www.facebook.com/ElAltoSeguridadCiudadana"
          data-tabs="timeline"
          data-width=""
          data-height=""
          data-small-header="true"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="false"
        >
          <blockquote
            cite="https://www.facebook.com/ElAltoSeguridadCiudadana"
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/ElAltoSeguridadCiudadana">
              Secretaría Municipal de Seguridad Ciudadana SMSC - GAMEA
            </a>
          </blockquote>
        </div>
      </aside>
    </div>
  );
}

export default Facebook;
