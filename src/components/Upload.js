import React, { useState } from "react";
import AWS from 'aws-sdk';
import { uploadFile } from 'react-s3';
import './Upload.css';
import { Buffer } from 'buffer'


global.Buffer = global.Buffer || require('buffer').Buffer;

const S3_BUCKET = 'YOUR_ACCESS_KEY';
const REGION = 'YOUR_REGION';
const ACCESS_KEY = 'YOUR_ACCESS_KEY';
const SECRET_ACCESS_KEY = 'YOUR_SECRET_ACCESS_KEY';



function Upload() {
  //const [file, setFile] = useState();
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFilePicked, setIsFilePicked] = useState(false);

  const handleChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  }

  const handleUpload = async(selectedFile) => {
    if (!selectedFile) return;

     const fileName = selectedFile.name;
     const fileType = selectedFile.type;

    const config = {
      bucketName: S3_BUCKET,
      region: REGION,
      accessKeyId: ACCESS_KEY,
      secretAccessKey: SECRET_ACCESS_KEY,
      ACL: 'public-read',
      Key: fileName,
      Body: selectedFile,
      ContentType: fileType
    }

      try {
      const { location } = await uploadFile(selectedFile, config);
      console.log(`File uploaded successfully. File location: ${location}`);
        } 
      catch (error) {
      console.log(error.message);
    }

  }
  
  
  return (
      <div className="App">
       <h1>Accident Detection Using Surveillance Camera</h1>
          <h2>Upload Image:</h2>
          <div className="image-upload-box">
            {/* <img src={file} height='281' width='462' /> */}
            {isFilePicked && (
            <img src={URL.createObjectURL(selectedFile)} alt="preview" />
           )}
          </div>
          <input type="file" className='btn' onChange={handleChange} />
           <br/>
          <button type="submit" className="mybtn" onClick={() => handleUpload(selectedFile)}>Detect</button>
          
      </div>

  );
}

export default Upload;

