import React, { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import "./Register.css";

export default function Register() {
  const [step, setStep] = useState(1); // Step 1: Register details, Step 2: OTP verification
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    otp: "",
  });

  const [errors, setErrors] = useState({});
  const [otpSent, setOtpSent] = useState(false);

  const validateFields = () => {
    let validationErrors = {};
    if (!formData.username.trim()) validationErrors.username = "Username is required.";
    if (!formData.firstName.trim()) validationErrors.firstName = "First Name is required.";
    if (!formData.lastName.trim()) validationErrors.lastName = "Last Name is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      validationErrors.email = "Valid email is required.";
    if (!formData.mobile.trim() || !/^\d{10}$/.test(formData.mobile))
      validationErrors.mobile = "Valid 10-digit mobile number is required.";
    if (!formData.password.trim() || formData.password.length < 6)
      validationErrors.password = "Password must be at least 6 characters.";
    return validationErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("OTP sent to:", formData.mobile); // Simulated OTP sending
      setOtpSent(true);
      setStep(2);
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (formData.otp.trim() === "1234") {
      alert("Registration successful!");
    } else {
      setErrors({ otp: "Invalid OTP. Please try again." });
    }
  };

  return (
    <div id="reg">
      <div className="wrapper">
        <div className="form-box register">
          {step === 1 && (
            <form onSubmit={handleSendOtp}>
              <h1>Register</h1>
              <div className="input-box">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
                <FaUser className="icon" />
                {errors.username && <p className="error">{errors.username}</p>}
              </div>
              <div className="input-box">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                {errors.firstName && <p className="error">{errors.firstName}</p>}
              </div>
              <div className="input-box">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                {errors.lastName && <p className="error">{errors.lastName}</p>}
              </div>
              <div className="input-box">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <FaUser className="icon" />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className="input-box">
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile No"
                  value={formData.mobile}
                  onChange={handleInputChange}
                />
                {errors.mobile && <p className="error">{errors.mobile}</p>}
              </div>
              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <FaLock className="icon" />
                {errors.password && <p className="error">{errors.password}</p>}
              </div>
              <button type="submit">Send OTP</button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleVerifyOtp}>
              <h1>Verify OTP</h1>
              <div className="input-box">
                <input
                  type="number"
                  name="otp"
                  placeholder="Enter OTP"
                  value={formData.otp}
                  onChange={handleInputChange}
                />
                {errors.otp && <p className="error">{errors.otp}</p>}
              </div>
              <button type="submit">Verify OTP</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
