import React, { useState } from 'react';
import logo from '../assets/images/mk.png';
import '../styles/Register.css';
import Select from 'react-select';
import UseSignup from '../hooks/useSignup';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';

function Register() {
  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "rgba(255, 255, 255, 0.3)",
      borderRadius: state.isFocused ? "5px 5px 5px 5px" : 5,
      borderColor: state.isFocused ? "transparent" : "transparent",
      boxShadow: state.isFocused ? null : null,
      marginBottom: 10,
      paddingLeft: 15,
      "&:hover": {
        borderColor: state.isFocused ? "transparent" : "transparent"
      }
    }),
    singleValue: provided => ({
      ...provided,
      color: 'white',
      fontSize: 16,
      marginTop: 5,
    }),
    input: base => ({
      ...base,
      color: "white",
      height: 40,
    }),
    indicatorSeparator: base => ({
      ...base,
      display: 'none'
    }),
    dropdownIndicator: base => ({
      ...base,
      color: "white"
    }),
    menu: base => ({
      ...base,
      borderRadius: 0,
      marginTop: 0,
      background: "rgba(255, 255, 255)"
    }),
    menuList: base => ({
      ...base,
      padding: 0,
      background: "rgba(255, 255, 255, 0.3)"
    }),
    placeholder: base => ({
      ...base,
      color: 'rgba(255, 255, 255, 0.7)'
    })
  };

  const [department, setDepartment] = useState('');
  const [name, setName] = useState('');
  const [degree, setDegree] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [emailId, setEmailId] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleConfirmPasswordChange = (event) => {
    const confirmPasswordValue = event.target.value;
    setConfirmPassword(confirmPasswordValue);
    if (confirmPasswordValue === '') setPasswordMatch(true);
    else setPasswordMatch(password === confirmPasswordValue);
  };

  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    if (passwordValue === '') setPasswordMatch(true);
    else setPasswordMatch(passwordValue === confirmPassword);
  }

  const handleDepartmentChange = (event) => setDepartment(event.value);
  const handleNameChange = (event) => setName(event.target.value);
  const handleDegreeChange = (event) => setDegree(event.value);
  const handleContactNumberChange = (event) => setContactNumber(event.target.value);
  const handleEmailIdChange = (event) => setEmailId(event.target.value);
  const handleRollNumberChange = (event) => setRollNumber(event.target.value);

  const allFieldsFilled = () => {
    return (
      department !== '' &&
      degree !== '' &&
      name !== '' &&
      contactNumber !== '' &&
      rollNumber !== '' &&
      password !== '' &&
      emailId !== '' &&
      confirmPassword !== '' &&
      passwordMatch
    );
  };

  const degreeOptions = [
    { value: 'btech', label: 'B.Tech' },
    { value: 'bs', label: 'B.S' },
    { value: 'dual_degree', label: 'Dual Degree' },
    { value: 'mtech', label: 'M.Tech' },
    { value: 'msc', label: 'M.Sc' },
    { value: 'phd', label: 'PhD' },
    { value: 'other_degree', label: 'Other Degree' },
  ];

  const branchOptions = [
    { value: 'aero', label: 'Aerospace Engineering' },
    { value: 'cse', label: 'Computer Science Engineering' },
    { value: 'ee', label: 'Electrical Engineering' },
    { value: 'mech', label: 'Mechanical Engineering' },
    { value: 'chem', label: 'Chemistry' },
    { value: 'biosci', label: 'Biosciences & Bioengineering' },
    { value: 'che', label: 'Chemical Engineering' },
    { value: 'eco', label: 'Economics' },
    { value: 'ieor', label: 'Industrial Engineering and Operations Research' },
    { value: 'metallurgy', label: 'Metallurgical Engineering and Material Science' },
    { value: 'engphy', label: 'Engineering Physics' },
    { value: 'envsci', label: 'Environmental Science & Engineering' },
    { value: 'energy', label: 'Energy Science & Engineering' },
    { value: 'math', label: 'Mathematics' },
    { value: 'civil', label: 'Civil Engineering' },
    { value: 'earthsci', label: 'Earth Sciences and Resource Engineering' },
    { value: 'rural', label: 'Technology for Rural Areas' },
    { value: 'design', label: 'Design' },
    { value: 'other', label: 'Other (If not mentioned above)' },
  ];

  const { signup, loading, error, success } = UseSignup();

  const handleRegistration = async () => {
    const userData = {
      fullname: name,
      email: emailId,
      roll: rollNumber,
      dept: department,
      degree: degree,
      password: password,
      contact: contactNumber,
    };
    signup(userData)
  };

  const inputStyle = ['input'];
  const buttonStyle = ['button'];
  const disabledButtonStyle = ['button', 'button-disabled'];

  return (
    localStorage.getItem('accessToken') !== null ? <Navigate to="/mentorCards" /> :
      <div className='form-container'>
        <div className="image-containerr">
          <img src={logo} alt="Logo" className="logoo" />
        </div>
          <input
            type="email"
            placeholder="EMAIL ID"
            value={emailId}
            onChange={handleEmailIdChange}
            className='input'
          />
        <input
          type="text"
          placeholder="NAME"
          value={name}
          onChange={handleNameChange}
          className='input'
          required
        />
        <input
          type="text"
          placeholder="ROLL NUMBER"
          value={rollNumber}
          onChange={handleRollNumberChange}
          className='input'
        />
        <Select
          options={degreeOptions}
          styles={customStyles}
          placeholder="DEGREE"
          onChange={handleDegreeChange}
        />
        <Select
          options={branchOptions}
          styles={customStyles}
          placeholder="DEPARTMENT"
          onChange={handleDepartmentChange}
        />
        <input
          type="text"
          placeholder="CONTACT NUMBER"
          value={contactNumber}
          onChange={handleContactNumberChange}
          className='input'
        />
          <input
            type="password"
            placeholder="PASSWORD"
            value={password}
            onChange={handlePasswordChange}
            className='input'
          />
          <input
            type="password"
            placeholder="CONFIRM PASSWORD"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className='input'
          />
        {!passwordMatch && <p style={{ color: 'white'}}>Passwords do not match.</p>}
        <button style={{fontFamily: 'Fraunces'}}
          className={allFieldsFilled() ? buttonStyle.join(' ') : disabledButtonStyle.join(' ')}
          onClick={handleRegistration}
          disabled={!allFieldsFilled() || loading}
        >
          {loading ? 'REGISTERING...' : 'REGISTER'}
        </button>
        {success && Swal.fire('REGISTRATION SUCCESSFUL')}
        {error && Swal.fire('REGISTRATION FAILED', error, 'ERROR')}
        <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "medium", fontFamily: 'Fraunces'}}>
          Already Registered ? <a href="/login">LOG IN</a>
        </div>
      </div>
  );
}

export default Register;
