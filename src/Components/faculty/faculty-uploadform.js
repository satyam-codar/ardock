import React, { useState } from "react";
import ProgressBar from "./FacultyProgressBar";
// import "./cool-gallery.css";
import Title from "../gallery/Title";

import { Form } from "react-bootstrap";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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

const UploadForm = () => {
  const classes = useStyles();
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("");
  const [qualification, setQualification] = useState("");
  const [facultyname, setFacultyname] = useState("");
  const [submit, setSubmit] = useState(null);
  
  


  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(1);
    // var submit = true;
  };

  return (
    <div>
      <Title />
      <form className="form" onSubmit={handleSubmit}>
        <div className="col container">
          <div className="form-group row container">
            <label for="inputCategory3" className="col-sm-3 col-form-label">
              <b className="h5"> Qualification:</b>
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="qualification"
                placeholder="Qualification"
                value={qualification}
                onChange={(e) => {
                  setQualification(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="form-group row container">
            <label for="inputCategory3" className="col-sm-3 col-form-label">
              <b className="h5"> Name:</b>
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="facultyname"
                placeholder="facultyname"
                value={facultyname}
                onChange={(e) => {
                  setFacultyname(e.target.value);
                }}
              />
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
            <label for="inputCategory3" className="col-sm-3 col-form-label">
              <b className="h5">Choose a photo:</b>
            </label>
            <div className="col-sm-2 mt-2">
              <input type="file" onChange={handleChange} />
            </div>
            <div className="col-sm-6 pr-5">
              <div className="output">
                {error && <div className="error">{error}</div>}
                {submit && file && (
                  <ProgressBar
                    file={file}
                    setFile={setFile}
                    category={category}
                    setCategory={setCategory}
                    qualification={qualification}
                    setQualification={setQualification}
                    facultyname={facultyname}
                    setFacultyname={setFacultyname}
                    setSubmit={setSubmit}
                  />
                )}
              </div>
            </div>
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

export default UploadForm;
// {file && <div>{file.name}</div>}
