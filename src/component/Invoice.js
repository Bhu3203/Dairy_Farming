import React from 'react'
import { Table, Button } from 'react-bootstrap';

export default function Invoice() {
  return (
    <div className="container mt-4">
    <h2>Invoices & Billing</h2>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Invoice Date</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>12345</td>
          <td>Nov 25, 2024</td>
          <td>$200</td>
          <td>Paid</td>
          <td>
            <Button variant="primary" size="sm">Download</Button>
          </td>
        </tr>
        <tr>
          <td>12346</td>
          <td>Nov 30, 2024</td>
          <td>$150</td>
          <td>Pending</td>
          <td>
            <Button variant="primary" size="sm">Pay Now</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  </div>
  )
}
