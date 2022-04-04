import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Hello from "./hello";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  var divStyle = {
    // color: 'white',
    // backgroundImage: 'url(' + imgUrl + ')',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    // backgroundColor: "blue",
  };
  var divStyle2 = {
    // color: 'white',
    // backgroundImage: 'url(' + imgUrl + ')',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px",
    paddingBottom: "0px",
    // backgroundColor: "blue",
  };
  var divStyleLogout = {
    // color: 'white',
    // backgroundImage: 'url(' + imgUrl + ')',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px",
    paddingBottom: "15px",
    // backgroundColor: "blue",
  };

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      {currentUser.emailVerified ? (
        <Card>
          <Card.Body>
            <Hello />
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email:</strong> {currentUser.email}
            <Link
              to="admin/update-profile"
              className="btn btn-primary w-100 mt-3"
            >
              Update Profile
            </Link>
          </Card.Body>
        </Card>
      ) : (
        <div>
          <div className="row" style={divStyle2}>
            <p className="alert alert-danger mb-0" role="alert">
              To view and edit your profile you must verify your email first.
            </p>
          </div>
        </div>
      )}
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
}
