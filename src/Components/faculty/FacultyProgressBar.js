import React, { useEffect } from "react";
import useStorage from "./hooks/useStorage";
import { motion } from "framer-motion";
import "./Faculty-gallery.css";

const ProgressBar = ({
  file,
  setFile,
  category,
  setCategory,
  qualification,
  setQualification,
  facultyname,
  setFacultyname,
  setSubmit,
}) => {
  // console.log(file, category);
  const { progress, url } = useStorage(file, category, qualification,facultyname);
  var percentage = Math.floor(progress);
  // console.log(progress, url);
  useEffect(() => {
    if (url) {
      setFile(null);
      setCategory("");
      setSubmit(null);
      setQualification("");
      setFacultyname("");
    }
  }, [url, setFile, setCategory, setSubmit, setQualification, setFacultyname]);

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    >
      <p style={{ paddingTop: "12px" }}>{percentage} %</p>
    </motion.div>
  );
};

export default ProgressBar;
