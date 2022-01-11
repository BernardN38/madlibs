import React from "react";

function Story({ formData }) {

  
  return (
    <div>
      Story Time!
      <p>{`There was a ${formData.color} ${formData.noun1} who loved a ${formData.adjective} ${formData.noun2}`}</p>
    </div>
  );
}

export default Story;
