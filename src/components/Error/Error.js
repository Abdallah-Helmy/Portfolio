import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Error.css';

function Error() {
  const navigate = useNavigate();
  return (
    <div className="error col-11 d-flex justify-content-center align-items-center">
      <div className="error-details">
        <h1>page not found!</h1>
        <div className="homeback-btn">
          <button className="main-btn" onClick={() => navigate('/Portfolio/')}>
            Back Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Error;
