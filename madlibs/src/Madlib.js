import React, { useState } from "react";
import Story from "./Story";
function Madlib() {
  const [formData, setFormData] = useState(initForm);
  const [submitted,setSubmitted] = useState(null);
  function handleSubmit(e) {
    e.preventDefault();
    if (Object.values(formData).includes("")) {
      return alert("all feilds must be filled");
    }
    setSubmitted(true)
  }
  function handleChange(e) {
    let { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  return (
    <div>
        {submitted ? <Story formData={formData}/> : <div>
          <h1>Madlibs</h1>
          <form className="d-flex flex-column container col-lg-2 needs-validation">
            <div>
              <input
                className="form-label"
                type="text"
                value={formData.noun1}
                placeholder="noun"
                name="noun1"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                className="form-label"
                type="text"
                value={formData.noun2}
                placeholder="noun2"
                name="noun2"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                className="form-label"
                type="text"
                value={formData.adjective}
                placeholder="adjective"
                name="adjective"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                className="form-label"
                type="text"
                value={formData.color}
                placeholder="color"
                name="color"
                onChange={handleChange}
                required
              />
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </form>
          </div> }
       
    </div>
  );
}

const initForm = {
  noun1: "",
  noun2: "",
  adjective: "",
  color: "",
};
export default Madlib;
