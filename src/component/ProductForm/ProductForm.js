import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const ProductForm = () => {
    const [formData, setFormData] = useState({
        productName: '',
        category: '',
        price: '',
        quantity: '',
        description: '',
        image: null,  
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        
        if (name === 'image') {
        
            setFormData({ ...formData, [name]: files[0] });
        } else {
            
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        
        console.log('Product Details:', formData);
        
        alert('Product details submitted successfully!');
        
     
        setFormData({
            productName: '',
            category: '',
            price: '',
            quantity: '',
            description: '',
            image: null,
        });
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Product Listing Form</h1>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group controlId="productName">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter product name"
                                name="productName"
                                value={formData.productName}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="category">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter product category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group controlId="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter price"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                min="0"
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="quantity">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter quantity"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                min="1"
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter product description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                {/*  Upload image Field */}
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="image">
                            <Form.Label>Product Image</Form.Label>
                            <Form.Control
                                type="file"
                                name="image"
                                onChange={handleChange}
                                accept="image/*"
                                required
                            />
                            {formData.image && (
                                <div className="mt-2">
                                    <img
                                        src={URL.createObjectURL(formData.image)}
                                        alt="Product Preview"
                                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                    />
                                </div>
                            )}
                        </Form.Group>
                    </Col>
                </Row>

                <Button variant="primary" type="submit" className="w-100">
                    Submit Product
                </Button>
            </Form>
        </div>
    );
};

export default ProductForm;
