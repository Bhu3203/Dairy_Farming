import React from 'react'
import { Card, Table } from 'react-bootstrap';

export default function QualityPricing() {
  return (
    <div className="container mt-4">
    <h2>Quality-Based Pricing</h2>
    <Card className="mt-3">
      <Card.Body>
        <h5>Milk Quality Report</h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Quality Metric</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fat Percentage</td>
              <td>3.8%</td>
            </tr>
            <tr>
              <td>SNF</td>
              <td>8.5%</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  </div>
  )
}
