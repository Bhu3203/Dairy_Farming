import React from 'react'
import { Card } from 'react-bootstrap';

export default function CommunitySupport() {
  return (
    <div className="container mt-4">
    <h2>Community and Support</h2>
    <Card className="mt-3">
      <Card.Body>
        <h5>Veterinary Doctors</h5>
        <p>Contact Dr. John Doe at +123-456-7890 for cattle health support.</p>
      </Card.Body>
    </Card>
    <Card className="mt-3">
      <Card.Body>
        <h5>Resources</h5>
        <ul>
          <li>Best practices for milk production</li>
          <li>Improving cattle health</li>
        </ul>
      </Card.Body>
    </Card>
  </div>
  )
}
