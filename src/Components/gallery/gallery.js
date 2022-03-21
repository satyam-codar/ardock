import React, { useState } from "react";
import Title from "./Title";
import UploadForm from "./UploadForm";
import ImageGridGallery from "./ImageGridGallery";
import Modal from "./Modal";
import "./cool-gallery.css";


function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="Gallery">
      {/* <UploadForm /> */}
      <ImageGridGallery setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default Gallery;
