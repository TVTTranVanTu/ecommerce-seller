import React from "react";

function LoadingBox(props) {
  return (
    <div className="loading">
      <section>
        <div className="loader loader-1">
          <div className="loader-outter"></div>
          <div className="loader-inner"></div>
        </div>
      </section>
    </div>
  );
}

export default LoadingBox;
