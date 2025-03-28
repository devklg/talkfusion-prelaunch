import React, { useState } from "react";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) newErrors.email = "Valid email is required.";
    if (!formData.password) newErrors.password = "Password is required.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await api.post("/api/auth/signup", formData);
      console.log("Signup successful:", response.data);
      navigate("/"); // Redirect to home page after signup
    } catch (err) {
      console.error("Signup error:", err);
      alert(err.response?.data?.message || "Something went wrong. Try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-12 flex flex-col items-center">
      <div className="max-w-3xl w-full text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-300">Sign Up</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-gray-900 shadow-xl rounded-lg p-8 w-full max-w-2xl">
        <div className="mb-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800 text-white border border-gray-700 w-full"
          />
          {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800 text-white border border-gray-700 w-full"
          />
          {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
        </div>

        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800 text-white border border-gray-700 w-full"
          />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="mb-6">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800 text-white border border-gray-700 w-full"
          />
          {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded text-lg"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
