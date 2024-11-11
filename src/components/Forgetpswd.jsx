
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Forgetpswd = () => {
    const [email, setEmail] = useState('');

    const handleContinue = (e) => {
      e.preventDefault();
      // Here you would handle the continuation logic, e.g., send a request
      alert(`Password assistance request sent for: ${email}`);
      setEmail('');
    };

  return (
<div className="container mt-5 mb-4">
      <h1 className="text-center" style={{fontSize:'35px', fontWeight:'bold'}}>Delhi Book Store</h1>
      <div className="text-center mt-3">
        <h1 style={{fontSize:'30px'}}>Password Assistance</h1>
        <p>Enter the email address or mobile phone number associated <br></br> with your Delhi Book Store account.</p>
      </div>
      <form onSubmit={handleContinue} className="text-center mt-4">
        <div className=""style={{width:'500px', margin:'auto'}}>
          <input
            type="email"
            className="form-control"
            placeholder="Email or Mobile Phone Number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-6 mb-6"style={{padding:'12.5px 50px'}}>
          Continue
        </button>
        <Link to={'/signin'}>
        <h1 style={{ fontWeight:'bold'}}>Back to Login ...</h1>
        </Link>
        <h1>Has your email or mobile number changed?</h1>
        <p>If you no longer use the email address associated with your Delhi Book Store account,<br></br> you may contact Customer Service for help restoring access to your account.</p>
      </form>
    </div>
  );
};


export default Forgetpswd