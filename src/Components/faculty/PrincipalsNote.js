import React, { useState } from "react";
import ProgressBar from "./FacultyProgressBar";
// import "./cool-gallery.css";
import Title from "../gallery/Title";
import { firebase, timestamp } from "../gallery/firebase/config";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const PrincipalNoteUploadForm = () => {
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const messageRef = firebase.database().ref("Message");
    // const createdAt = firebase.database.ServerValue.TIMESTAMP;
    // console.log(createdAt);
    const principalMessage = {
      message,
      category,
    };
    messageRef.push(principalMessage);
    setMessage("");
    setCategory("");
    // var submit = true;
  };
  // console.log("message");
  // console.log(message);

  return (
    <div>
      <div className="title">
        <h2>Principal's Message</h2>
        <p>Write the category name and a message to upload.</p>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="col container">
          <div className="form-group row container">
            <label for="inputCategory3" className="col-sm-3 col-form-label">
              <b className="h5"> Message:</b>
            </label>
            <div className="col-sm-9">
              <textarea
                id="message"
                name="message"
                rows="10"
                cols="70"
                className="form-control"
                placeholder="Message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
            </div>
          </div>

          <div className="form-group row container">
            <label for="inputCategory3" className="col-sm-3 col-form-label">
              <b className="h5"> Category Name:</b>
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="category"
                placeholder="Category"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="form-group row container mt-2">
            <div className="col-sm-1">
              <button
                type="submit"
                className="btn btn-primary"
                style={{ float: "right" }}
                onSubmit={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PrincipalNoteUploadForm;
// {file && <div>{file.name}</div>}
