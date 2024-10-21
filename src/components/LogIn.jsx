import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import notify from '../Hook/usenotify';
import { ToastContainer, toast } from 'react-toastify';
import { loginUser, loginUser2 } from '../Redux/Actions/AuthAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState(null);
  const [log, setLog] = useState(true);
  const [load, setload] = useState(true);
  const [role, setRole] = useState('');


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((state) => state.authReducer.loginuser);
  const err = useSelector((state) => state.authReducer.error);

  const handelLogin = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('phone', phone);
    formData.append('profileImage', image);
    formData.append("role",role)

    setload(true);
    await dispatch(loginUser(formData));
    setload(false);

    setImage(null);
    setPhone('');
    setName('');
    setPassword('');
    setEmail('');
  };

  useEffect(() => {
    if (data) {
      if (data.status === 200) {
        notify('تم الدخول بحسابك', 'success');
        localStorage.setItem('token', data.data.token);
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else  {
        setTimeout(() => {
          notify(`${data.data.message}`, 'error');
        }, 100);
      }
    }
  }, [data, err]);

  const handleSignUp = () => {
    setLog(false);
  };

  const handleSignin = () => {
    setLog(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file); // Store the image file in the state
  };

  const submitSignUp = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    setload(true);
    const data = {
      email: email,
      password: password,
    };
    setload(true);
    await dispatch(loginUser2(data));
    setload(false);
  };
console.log(data)
  return (
    <div>
      {log ? (
        <Container
          fluid
          className="vh-100 d-flex justify-content-center bg-opacity-75"
          style={{ direction: 'rtl' }}
        >
          <Row className="w-100">
            <Col xs={12} md={6} className="mx-auto">
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-center text-primary mb-4">تسجيل الدخول</h2>
                <Form onSubmit={handelLogin}>
                  <Form.Group controlId="formBasicEmail" className="mb-3">
                    <Form.Label>الايميل</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="ادخل البريد الإلكتروني"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword" className="mb-3">
                    <Form.Label>الباسورد</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="ادخل كلمة المرور"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Button
                    onClick={submitSignUp}
                    variant="primary"
                    type="submit"
                    className="w-100 mt-3"
                  >
                    دخول
                  </Button>

                  <Button
                    variant="link"
                    onClick={handleSignUp}
                    className="w-100 mt-2"
                  >
                    انشاء حساب
                  </Button>

                  <a className="forgot-password-link" href="/Forgetpassword">
                    هل نسيت كلمه المرور؟
                  </a>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container
        fluid
        className="vh-100 d-flex justify-content-center bg-opacity-75"
        style={{ direction: 'rtl' }}
      >
        <Row className="w-100">
          <Col xs={12} md={6} className="mx-auto">
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-center text-primary mb-4">إنشاء حساب</h2>
              <Form onSubmit={handelLogin}>
                <Form.Group controlId="formBasicName" className="mb-3">
                  <Form.Label>الاسم</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ادخل اسمك"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>
      
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>الايميل</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="ادخل البريد الإلكتروني"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
      
                <Form.Group controlId="formBasicPassword" className="mb-3">
                  <Form.Label>الباسورد</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="ادخل كلمة المرور"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
      
                <Form.Group controlId="formBasicPhone" className="mb-3">
                  <Form.Label>رقم الهاتف</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="ادخل رقم هاتفك"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </Form.Group>
      
                <Form.Group controlId="formBasicProfileImage" className="mb-3">
                  <Form.Label>صورة الملف الشخصي</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange} // Image is handled here
                    required
                  />
                </Form.Group>
      
                {/* Role Selection - Radio Buttons */}
                <Form.Group controlId="formBasicRole" className="mb-3">
                  <Form.Label>اختر الدور</Form.Label>
                  <div>
                    <Form.Check
                      type="radio"
                      label="مستخدم"
                      value="user"
                      name="role"
                      onChange={(e) => setRole(e.target.value)}
                      required
                    />
                  
                    <Form.Check
                      type="radio"
                      label="معلم"
                      value="teacher"
                      name="role"
                      onChange={(e) => setRole(e.target.value)}
                      required
                    />
                    <Form.Check
                      type="radio"
                      label="مؤسسة"
                      value="Institution"
                      name="role"
                      onChange={(e) => setRole(e.target.value)}
                      required
                    />
                  </div>
                </Form.Group>
      
                <Button variant="primary" type="submit" className="w-100 mt-3">
                  تسجيل
                </Button>
                <Button
                  variant="link"
                  onClick={handleSignin}
                  className="w-100 mt-2"
                >
                  لدى حساب
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      
      )}
      <ToastContainer />
    </div>
  );
};

export default LogIn;
