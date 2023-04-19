import React, { useState } from 'react';
import './ImageUpload.css';

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="image-upload-box">
      <label htmlFor="file-input">
        {selectedFile ? (
          <img src={URL.createObjectURL(selectedFile)} alt="Selected file" />
        ) : (
          <span>Select an image</span>
        )}
      </label>
      <input id="file-input" type="file" onChange={handleFileChange} />
    </div>
  );
}

export default ImageUpload;