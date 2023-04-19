import React, { useState } from 'react';
import './VideoUpload.css';

function VideoUpload() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleFileChange = (event) => {
    setSelectedVideo(event.target.files[0]);
  };

  return (
 <div className="App">
  <h1>Accident Detection Using Surveillance Camera</h1>
 <h2>Upload Video:</h2>
  <div className="contain"> 
    
    <div className="video-upload-box">
      <label htmlFor="file-input">
        {selectedVideo ? (
          <video controls>
            <source src={URL.createObjectURL(selectedVideo)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <span></span>
        )}
      </label>
      <br/>
      <input id="file-input" type="file" accept="video/*" onChange={handleFileChange} />
    </div>
   </div>
   <button type="submit" className="mybtn">Detect</button>
  </div>
  );
}

export default VideoUpload;
