import React from 'react'
import { ProgressBar } from 'react-bootstrap';
import Button from '@mui/material/Button';

export default function Payment() {
  return (
   
    <div className="container mt-4">
     
    <h2>Payment Management</h2>
    <p>Status: <strong>In Progress</strong></p>
    <ProgressBar now={50} label="50%" />
    <Button variant="contained" className="mt-3">Complete Payment</Button>
  </div>
  )
}
