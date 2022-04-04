import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { getAuth, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase/config";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const provider = new GoogleAuthProvider();

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      console.log(emailRef.current.value);
      console.log(passwordRef.current.value);
      await signup(emailRef.current.value, passwordRef.current.value);
      await sendEmailVerification(auth.currentUser).then(() => {
        // Email verification sent!
        alert(
          "An email has been sent to you. Please verify and login again to view your profile."
        );
      });

      history.push("/");
    } catch {
      setError("Failed to create an account");
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
  // async function signinWithGoogle(e) {
  //   e.preventDefault();
  //   try {
  //     setError("");
  //     setLoading(true);
  //     await signInWithRedirect(auth, provider).catch(alert);
  //     console.log("hi there signinWithGoogle");

  //     history.push("/");
  //     console.log("hi there signinWithGoogle2");
  //   } catch {
  //     setError("Failed to create an account");
  //   }
  //   setLoading(false);
  // }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
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
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
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
