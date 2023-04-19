import React, { useState } from "react";

import './Upload.css';


function Upload() {
  const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
      <div className="App">
       <h1>Accident Detection Using Surveillance Camera</h1>
          <h2>Upload Image:</h2>
          <div className="image-upload-box">
            {/* <img src={file} height='281' width='462' /> */}
            <img src={file} />
          </div>
          <input type="file" className='btn' onChange={handleChange} />
           <br/>
          <button type="submit" className="mybtn">Detect</button>

      </div>

  );
}

export default Upload;
