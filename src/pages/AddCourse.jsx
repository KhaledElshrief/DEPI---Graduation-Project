import axios from 'axios';
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ToastContainer } from 'react-bootstrap';
import BaseUrl from '../Api/BaseUrl';
import notify from '../Hook/usenotify';
import { Navigate, useNavigate } from 'react-router-dom';

export default function AddCourse() {
  // State variables
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [level, setLevel] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('');
  const [language, setLanguage] = useState('');
  const [discount, setDiscount] = useState('');
  const [image, setImage] = useState(null);


  const handleImageChange = (e) => {
    setImage(e.target.files[0]); 
  };
  const navigate=useNavigate()
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('level', level);
    formData.append('price', price);
    formData.append('status', status);
    formData.append('language', language);
    formData.append('discount', discount);
    formData.append('image', image);
   

    try {
        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        };
      
        const response = await axios.post('https://e-commerce-3-gu5g.onrender.com/course', formData, config);
      
        if (response.status === 200) {
          notify('تم الإضافة بنجاح', 'success'); 
          setTimeout(() => {
            navigate('/courses'); 
          }, 2000);

        } else {
          notify('تم الإضافة بنجاح', 'success'); 
        }
      
       
      } catch (e) {
        console.log('Error occurred:', e); 
      
       window.alert(`${e.response.data.message}`)
      
      }
      
  
  };

  return (
    <div style={{height:1100, paddingTop:50}}>
      <Container
        fluid
        className="vh-100 d-flex justify-content-center bg-opacity-75"
        style={{ direction: 'rtl' }}
      >
        <Row className="w-100">
          <Col xs={12} md={6} className="mx-auto">
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-center text-primary mb-4">إضافة كورس</h2>
              <Form onSubmit={handleSubmit}>
              
                <Form.Group controlId="formBasicTitle" className="mb-3">
                  <Form.Label>العنوان</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ادخل العنوان"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* Description Field */}
                <Form.Group controlId="formBasicDescription" className="mb-3">
                  <Form.Label>الوصف</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="ادخل الوصف"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* Level Field */}
                <Form.Group controlId="formBasicLevel" className="mb-3">
                  <Form.Label>المستوى</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ادخل المستوى"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* Price Field */}
                <Form.Group controlId="formBasicPrice" className="mb-3">
                  <Form.Label>السعر</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="ادخل السعر"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* Status Field */}
                <Form.Group controlId="formBasicStatus" className="mb-3">
                  <Form.Label>الحالة</Form.Label>
                  <Form.Select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                  >
                    <option value="">اختر الحالة</option>
                    <option value="available">متاح</option>
                    <option value="unavailable">غير متاح</option>
                  </Form.Select>
                </Form.Group>

                {/* Language Field */}
                <Form.Group controlId="formBasicLanguage" className="mb-3">
                  <Form.Label>اللغة</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ادخل اللغة"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* Discount Field */}
                <Form.Group controlId="formBasicDiscount" className="mb-3">
                  <Form.Label>الخصم</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="ادخل نسبة الخصم (إن وجدت)"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                  />
                </Form.Group>

                {/* Image Upload Field */}
                <Form.Group controlId="formBasicImage" className="mb-3">
                  <Form.Label>صورة المنتج</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-3">
                  إضافة المنتج
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
}
