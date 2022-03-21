import React, { useState } from "react";
import Modal from "./Modal";
import "./Faculty-gallery.css";
import FacultyImageGrid from "./FacultyImageGrid";
import UploadForm from "./faculty-uploadform";

function FacultyGallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="Gallery">
      <UploadForm />
      <FacultyImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}

      <br />
      <br />
      <br />
    </div>
  );
}

export default FacultyGallery;
