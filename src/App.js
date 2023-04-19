// import logo from './logo.svg';
// import React, { useState } from 'react';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import  Header  from './components/Header';
import Upload from './components/Upload';
import Greet from './components/Greet';
import Sidenav from './components/Sidenav';
import Sidebar from './components/Sidebar';
import ImageUpload from './components/ImageUpload';
import VideoUpload from './components/VideoUpload'


// function App() {
//   const [file, setFile] = useState();
//   function handleChange(e) {
//       console.log(e.target.files);
//       setFile(URL.createObjectURL(e.target.files[0]));
//   }

//   return (
//       <div className="App">
//           <h2>Add Image:</h2>
//           <input type="file" onChange={handleChange} />
//           <img src={file} />

//       </div>

//   );
// }
// function App() {
   
//     return (
//         <div className="App">
//             <Header name="Accident" />
//             {/* <Greet user="Naman" heroName="SpiderMan"> <p>This is children prop</p></Greet>
//             <Greet user="Clark" heroName="Iron Man"> <button>Action</button> </Greet> */}

          
//             <Upload />
//             <Sidebar />
//             <VideoUpload />
//         </div>
  
//     );
//   }

  function App() {
   
    return (
        <div className="App">
            <Router>
            <Sidebar>
                <Routes>
                    <Route path="/" element={<Header />} />
                    <Route path="/Uploadimage" element={<Upload />} />
                    <Route path="/Uploadvideo" element={<VideoUpload />} />
                </Routes>
            </Sidebar>
            </Router>
            
        </div>
  
    );
  }

export default App;
