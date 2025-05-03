'use client';

import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function LoginForm() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  // Track validity per field
  const [validFields, setValidFields] = useState({});

  const Regex = {
    firstname: /^[a-zA-Z]+$/,
    lastname: /^[a-zA-Z]+$/,
    email: /^([a-zA-Z\d]+@)([a-z\d]+\.)([a-zA-Z\d]{1,6}\.?)([a-z]){2,10}?$/,
    phone: /^(?:\+?[\d]{3}|0)[\d]{8,10}$/
  };

  const validateInput = (name, regex, value) => {
    setValidFields(vf => ({
      ...vf,
      [name]: regex.test(value)
    }));
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstname":
        setFirstName(value);
        validateInput(name, Regex[name], value);
        break;
      case "lastname":
        setLastName(value);
        validateInput(name, Regex[name], value);
        break;
      case "email":
        setEmail(value);
        validateInput(name, Regex[name], value);
        break;
      case "phone":
        setPhone(value);
        validateInput(name, Regex[name], value);
        break;
      case "subject":
        setSubject(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        return;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const allFilled = firstname && lastname && email && phone && subject && message;
    const allValid  = Object.keys(Regex).every(
      field => validFields[field]
    );
    if (!allFilled || !allValid) {
      toast.error("Please fill in all fields correctly.");
      return;
    }
    toast.success("Form submitted!");
    setFirstName(""); setLastName(""); setEmail("");
    setPhone(""); setSubject(""); setMessage("");
    setValidFields({});
  };

  // Determines border color for a given field
  const borderColor = (field, value) => {
    if (!Regex[field]) return "border-gray-300";
    if (value === "")       return "border-gray-300";
    if (validFields[field]) return "border-green-500";
    return "border-red-500";
  };

  return (
    <section>
      <h2 className="text-3xl font-bold text-center text-gray-800 mt-4 mb-2">
        Reach Out To Us
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center h-fit bg-gray-100 pb-10 mb-2 pt-6 px-6 gap-10">
  
    {/* First Form */}
        <div className="bg-white shadow-lg rounded-2xl p-6 md:w-[40%] w-full mb-6 md:mb-0">
<h2 className="text-xl font-semibold mb-4">Our Free Webinar Today form</h2>
<div className="space-y-4">
  <div className="p-4 border rounded-lg flex items-center gap-4 bg-purple-100">
    <span className="text-purple-500 text-2xl">📍</span>
    <div>
      <p className="font-semibold">Location</p>
      <p>123 Street, Anytown USA</p>
    </div>
  </div>
  <div className="p-4 border rounded-lg flex items-center gap-4 bg-purple-100">
    <span className="text-purple-500 text-2xl">📞</span>
    <div>
      <p className="font-semibold">Give us a call</p>
      <p>(555) 456-678</p>
      <p>+555 06-1359</p>
    </div>
  </div>
  <div className="p-4 border rounded-lg flex items-center gap-4 bg-purple-100 text-pretty">
    <span className="text-purple-500 text-2xl">✉️</span>
    <div className="">
      <p className="font-semibold">E-mail</p>
      <p className="text-sm max-lg:hidden xl:visible">info@JoinOurFreeWebinar.com</p>
      <pre className="text-wrap visible xl:hidden">info@JoinOur
      FreeWebinar.com</pre>
    </div>
  </div>
</div>
</div>

        {/* Main Form Section */}
        <div className="bg-white shadow-lg rounded-2xl p-6 md:w-2/3 w-full">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Our Free Webinar Today
          </h2>
          <p className="text-center mb-6 text-gray-600">
            Please use the form below to get in touch…
          </p>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="firstname"
                type="text"
                placeholder="First Name"
                className={`${borderColor('firstname', firstname)} p-3 border rounded-lg w-full`}
                value={firstname}
                onChange={handleFormChange}
              />
              <input
                name="lastname"
                type="text"
                placeholder="Last Name"
                className={`${borderColor('lastname', lastname)} p-3 border rounded-lg w-full`}
                value={lastname}
                onChange={handleFormChange}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                name="subject"
                className="p-3 border rounded-lg w-full"
                value={subject}
                onChange={handleFormChange}
              >
                <option value="" disabled>Select Subject</option>
                <option>JavaScript</option>
                <option>Python</option>
                <option>PHP</option>
                <option>Java</option>
                <option>Ruby</option>
              </select>
              <input
                name="phone"
                type="tel"
                placeholder="Phone No"
                className={`${borderColor('phone', phone)} p-3 border rounded-lg w-full`}
                value={phone}
                onChange={handleFormChange}
              />
            </div>
            <input
              name="email"
              type="text"
              placeholder="E-mail"
              className={`${borderColor('email', email)} p-3 border rounded-lg w-full`}
              value={email}
              onChange={handleFormChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              className="p-3 border rounded-lg w-full h-32"
              value={message}
              onChange={handleFormChange}
            />
            <button
              type="submit"
              className="bg-purple-500 text-white py-3 px-6 rounded-lg w-full text-lg font-semibold hover:bg-purple-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
