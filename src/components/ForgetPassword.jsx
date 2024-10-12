import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import notify from '../Hook/usenotify'; // Assuming you want to use notifications
import { ToastContainer } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate=useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setError('يرجى إدخال عنوان بريد إلكتروني صحيح.');
            return;
        }

        setError('');

        try {
            const response = await fetch('http://localhost:8000/auth/forgetPassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }), // sending email as the body
            });

            const result = await response.json();
            console.log(response)

            if (response.ok) {
                notify("تم إرسال الكود إلى بريدك الإلكتروني", "success");
                setTimeout(() => {
                    navigate("/verifyresetcodepage")
                }, (2000));
               
            } else {
                notify(result.message || "حدث خطأ ما، حاول مرة أخرى", "error");
            }
        } catch (error) {
            console.error('Error:', error);
            notify("حدث خطأ في الاتصال ", "error");
        }

        setEmail(''); // Clear the email field after submission
    };

    return (
        <Container fluid className="vh-100 d-flex justify-content-center bg-opacity-75" style={{ direction: 'rtl' }}>
            <Row className="w-100">
                <Col xs={12} md={6} className="mx-auto">
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-center text-primary mb-4">نسيت كلمة المرور</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicEmail" className="mb-3">
                                <Form.Label>عنوان البريد الإلكتروني</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="أدخل بريدك الإلكتروني"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    isInvalid={!!error} // Show error state if there's an error
                                />
                                <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100 mt-3">
                                استعادة كلمة المرور
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
            <ToastContainer />
        </Container>
    );
};

export default ForgetPassword;
