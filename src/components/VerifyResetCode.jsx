import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import notify from '../Hook/usenotify'; // Assuming you want to use notifications
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const VerifyResetCode = () => {
    const [verificationCode, setVerificationCode] = useState(''); 
    const navigate = useNavigate();

    const handleCodeSubmit = async (e) => {
        e.preventDefault();

       
        if (verificationCode.length !== 6) {
            notify("يرجى إدخال الكود المكون من 6 أرقام.", "error");
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/auth/verifyResetCode', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ resetCode: verificationCode }), 
            });

            const result = await response.json();
            console.log(result)
            if (response.ok) {
                notify("تم التحقق بنجاح", "success");
                setTimeout(() => {
                    navigate('/resetpassword'); 
                }, 2000); 
            } else {
                notify(result.message || "الكود غير صحيح، حاول مرة أخرى", "error");
            }
        } catch (error) {
            console.error('Error:', error);
            notify("حدث خطأ في الاتصال ", "error");
        }

        setVerificationCode(''); // Clear the verification code field after submission
    };

    return (
        <Container fluid className="vh-100 d-flex justify-content-center bg-opacity-75" style={{ direction: 'rtl' }}>
            <Row className="w-100">
                <Col xs={12} md={6} className="mx-auto">
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-center text-primary mb-4">أدخل الكود المكون من 6 أرقام</h2>
                        <Form onSubmit={handleCodeSubmit}>
                            <Form.Group controlId="formBasicCode" className="mb-3">
                                <Form.Label>الكود</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="أدخل الكود"
                                    value={verificationCode}
                                    onChange={(e) => setVerificationCode(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100 mt-3">
                                تحقق
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
            <ToastContainer />
        </Container>
    );
};

export default VerifyResetCode;
