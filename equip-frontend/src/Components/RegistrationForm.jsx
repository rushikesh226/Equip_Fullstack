import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    password: '',
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profilePicture: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label style={styles.label}>First Name</label>
      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} style={styles.input} required />

      <label style={styles.label}>Last Name</label>
      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} style={styles.input} required />

      <label style={styles.label}>Mobile Number</label>
      <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} style={styles.input} required pattern="\d{10}" />

      <label style={styles.label}>Password</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} style={styles.input} required />

      <label style={styles.label}>Profile Picture</label>
      <input type="file" name="profilePicture" onChange={handleFileChange} style={styles.input} required />

      <button type="submit" style={styles.button}>Register</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: 'auto',
  },
  label: {
    margin: '10px 0 5px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default RegistrationForm;
