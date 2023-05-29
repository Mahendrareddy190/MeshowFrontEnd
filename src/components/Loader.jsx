import React from "react";
import { MagnifyingGlass } from "react-loader-spinner";
const Loader = () => {
  const center = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "600px",
  };
  return (
    <div className="container-fluid w-100" style={center}>
      <div>
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      </div>
    </div>
  );
};

export default Loader;
