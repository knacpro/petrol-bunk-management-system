import React, { useState, ChangeEvent, FormEvent } from 'react';
import './Event_register.css'; // Assuming you save the CSS in a file named EventRegister.css
import { Link } from 'react-router-dom';

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  eventDate?: string;
}

const Event_register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
  });

  const [errors, setErrors] = useState<Partial<FormErrors>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors: Partial<FormErrors> = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.phone) formErrors.phone = "Phone number is required";
    if (!formData.eventDate) formErrors.eventDate = "Event date is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted", formData);
      alert("You have successfully registered!");
    }
  };

  return (
    <div className="registration-container">
        <Link to="/event-dashboard" className="text-sm text-blue-900 hover:underline">
        Back
          </Link>
      <h2>Event Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label>Event Date:</label>
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
          />
          {errors.eventDate && (
            <span className="error-message">{errors.eventDate}</span>
          )}
        </div>

        <button className="btn" type="submit">Register</button>
      </form>
    </div>
  );
};

export default Event_register;
