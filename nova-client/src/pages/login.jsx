// login.jsx
import React, { useState } from "react";
import { Col, Row, Button, FormGroup, Input } from "reactstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { storeUser } from "../helpers";
import Swal from 'sweetalert2';
import conf from "../conf";

const initialUser = { password: "", identifier: "" };

const Login = () => {
  const [user, setUser] = useState(initialUser);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    const url = `${conf.apiPrefix}/api/auth/local`;
    try {
      if (user.identifier && user.password) {
        setLoading(true);
        const { data } = await axios.post(url, user);
        if (data.jwt) {
          storeUser(data);
          setUser(initialUser);
          navigate("/");
          Swal.fire({
            icon: 'success',
            title: 'เข้าสู่ระบบสำเร็จ',
            text: 'ยินดีต้อนรับเข้าสู่เว็บไซต์ NovaByte Shop',
          });
        }
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'การเข้าสู่ระบบล้มเหลว',
        text: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง กรุณาลองอีกครั้ง.',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <Row className="login">
      <Col sm="12" md={{ size: 4, offset: 4 }}>
        <div>
          <h2>Login:</h2>
          <FormGroup>
            <Input
              type="email"
              name="identifier"
              value={user.identifier}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              placeholder="Enter your email"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              placeholder="Enter password"
            />
          </FormGroup>
          <Button color="primary" onClick={handleLogin} disabled={loading}>
            {loading ? "Loading..." : "Login"}
          </Button>
          <div>
            <Link to="/register">คลิกตรงนี้</Link> เพื่อสมัครสมาชิก
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
