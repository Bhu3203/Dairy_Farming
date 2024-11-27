import React from 'react'

export default function Forgot_Password() {
  return (
    <>
    <div class="forgot-password-container">
    <h1>Forgot Password</h1>
        <p>Enter your email address, and we’ll send you a link to reset your password.</p>
        <form action="/forgot-password" method="POST">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required/> <br />
            <label htmlFor="">Get OTP</label>
            <input type="Number"placeholder='Enter OTP' required /> <br />
            <label htmlFor="">Changed Password</label>
            <input type="text" /> <br />
            <label htmlFor="">Confirm Password</label>
            <input type="text" />
            <button type="submit">Send Reset Link</button>
        </form>
        <div class="back-to-login">
            <p><a href="/login">Back to Login</a></p>
        </div>
    </div>
    </>
  )
}
