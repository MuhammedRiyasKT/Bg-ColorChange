import React, { useState } from 'react';
import './ChangeBg.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ChangeBg() {
    const [color, setColor] = useState("white");

    return (
      <div className="container text-center py-5">
        <h2 className="mb-4 fw-bold">Background Color Change</h2>
        
        {/* Responsive color box */}
        <div 
          className="color-box mx-auto mb-4" 
          style={{ backgroundColor: color, width: '100%', height: '200px', maxWidth: '400px' }}
        ></div>
        
        {/* Responsive button group */}
        <div className="d-flex flex-wrap justify-content-center gap-2">
          <button className="btn btn-danger" onClick={() => setColor("red")}>Red</button>
          <button className="btn btn-warning" onClick={() => setColor("yellow")}>Yellow</button>
          <button className="btn btn-primary" onClick={() => setColor("blue")}>Blue</button>
          {/* <button className="btn btn-dark" onClick={() => setColor("black")}>Black</button> */}
          <button className="btn btn-success" onClick={() => setColor("green")}>Green</button>
        </div>
      </div>
    );
}

export default ChangeBg;
