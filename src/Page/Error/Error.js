import React from "react";
import Head from "../Head/Head";

const Error = () => {
  return (
    <>
      <Head></Head>
      <div className="error-section">
        <div>
          <h1>
            <i>404</i>
          </h1>
          <p>Page not found </p>
        </div>
      </div>
    </>
  );
};

export default Error;
