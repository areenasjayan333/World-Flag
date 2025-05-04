import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { isValidPassword } from "../../utils/validators";
import loginImage from "../../assets/login_image.png";
import styles from "./LoginForm.module.css";
import facebook from "../../assets/FaceBook.png";
import google from "../../assets/Google.png";
import linkedIn from "../../assets/LinkedIn.png";
import twitter from "../../assets/Twitter.png";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [keepMeSignedIn, setKeepMeSignedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidPassword(password)) {
      setError(
        "Password must have 8 characters, 1 capital letter, 1 number, and 1 symbol."
      );
      return;
    }
    navigate("/home");
  };

  return (
    <>
      <Row className="d-flex align-items-center justify-content-around ">
        <Col xs={12} md={4} xl={3}>
          <h1 className="fw-bold text-center text-md-start mb-3">Sign In</h1>
          <p className="fw-bold text-center text-md-start">
            New User?{" "}
            <span className={styles.createAnAccount}>Create an account</span>
          </p>
          <form onSubmit={handleSubmit} className="mt-4">
            <input
              className={styles.loginTextField}
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Username or email"
            />
            <input
              className={styles.loginTextField}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            {error && <div className={styles.errorText}>{error}</div>}
            <label className={styles.keepMeSignedInLabel}>
              <input
                className={styles.customCheckbox}
                type="checkbox"
                checked={keepMeSignedIn}
                onChange={(e) => setKeepMeSignedIn(e.target.checked)}
              />
              Keep me signed in
            </label>
            <button type="submit" className={styles.submitButton}>
              Sign In
            </button>
            <div className={styles.lineWithText}>
              <span>Or Sign In With</span>
            </div>
            <Row className="g-0 p-0 d-flex justify-content-center">
              <Col>
                <img
                  src={google}
                  alt="Google-Icon"
                  className="img-fluid"
                  style={{ scale: 0.8 }}
                />
              </Col>
              <Col>
                {" "}
                <img
                  src={facebook}
                  alt="Facebook-Icon"
                  className="img-fluid"
                  style={{ scale: 0.8 }}
                />
              </Col>
              <Col>
                <img
                  src={linkedIn}
                  alt="LinkedIn-Icon"
                  className="img-fluid"
                  style={{ scale: 0.8 }}
                />
              </Col>
              <Col>
                {" "}
                <img
                  src={twitter}
                  alt="Twitter-Icon"
                  className="img-fluid"
                  style={{ scale: 0.8 }}
                />
              </Col>
            </Row>
          </form>
        </Col>

        {/* Image column: hidden on screens <768px */}
        <Col md={6} className="d-none d-md-block" style={{ scale: "0.8" }}>
          <img src={loginImage} alt="Login-Image" className="img-fluid" />
        </Col>
      </Row>
    </>
  );
};

export default LoginForm;
