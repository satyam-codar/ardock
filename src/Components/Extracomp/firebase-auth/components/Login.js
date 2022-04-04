import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

import { sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase/config";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const provider = new GoogleAuthProvider();

export default function LoginAuth() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      // .then((userCredential) => {
      //   // Signed in
      //   const user = userCredential.user;
      //   console.log("hello from login");
      //   console.log(user);
      //   console.log("goodbye from login");

      //   // ...
      // })
      // .catch((error) => {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      // });
      history.push("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  // Sign up with google account
  const signinWithGoogle = () => {
    try {
      signInWithRedirect(auth, provider).catch(alert);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }
  };

  // Sign up with google account
  // async function signinWithGoogle(e) {
  //   e.preventDefault();
  //   try {
  //     setError("");
  //     setLoading(true);
  //     await signInWithRedirect(auth, provider).catch(alert);
  //     history.push("/");
  //   } catch {
  //     setError("Failed to create an account");
  //   }
  //   setLoading(false);
  // }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
      <br />
      <h3>OR</h3>
      <div>
        <center>
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={signinWithGoogle}
          >
            Sign In with Google
          </button>
        </center>
      </div>
    </>
  );
}
