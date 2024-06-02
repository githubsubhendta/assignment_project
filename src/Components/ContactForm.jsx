import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="flex flex-col justify-around mt-9">
      <form
        className="bg-white p-6 rounded shadow-lg mb-6 md:mb-0 mt-6 md:w-1/2 mx-auto"
        onSubmit={handleSubmit}
      >
        <h2 className="font-medium text-left text-xl mb-4">Talk to us</h2>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Work email*"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border-b outline-none focus:ring-1 focus:ring-blue-600"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="firstName"
            placeholder="First name*"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border-b focus:outline-none focus:ring-1 focus:ring-blue-600"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="lastName"
            placeholder="Last name*"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border-b focus:outline-none focus:ring-1 focus:ring-blue-600"
            required
          />
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span className="ml-2">
              I agree to Fyle's terms and conditions, and provide consent to
              send me communication.
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
        >
          Contact Us
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
