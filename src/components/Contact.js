import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    emailSubject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/submitform", formData);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again later.");
    }
  };

  return (
    <div className="d-flex row justify-content-center bg-secondary mt-5">
      <div className="contact mt-5 mx-5 bg-success-subtle py-2 px-5 col-4 ">
        <h1 className="mt-5 pb-2">Contact Me!</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              className="form-control mt-2"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Mobile Number"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Email Subject"
              name="emailSubject"
              value={formData.emailSubject}
              onChange={handleChange}
            />
          </div>
          <textarea
            className="form-control mb-3"
            rows="4"
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
