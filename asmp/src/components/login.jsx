// import React, { useState } from 'react';
// import '../styles/Login.css';
// import { Navigate } from 'react-router-dom';
// import UseLogin from '../hooks/useLogin';
// import logo from '../assets/images/mk.png';

// function Login() {
//   const [password, setPassword] = useState('');
//   const [emailId, setEmailId] = useState('');

//   const allFieldsFilled = () => {
//     return (
//       password !== '' &&
//       emailId !== ''
//     );
//   };

//   const { Login, error, setError, success, loading } = UseLogin();

//   const handlePasswordChange = (event) => { setPassword(event.target.value); setError("") }
//   const handleEmailIdChange = (event) => { setEmailId(event.target.value); setError("") };

//   const handleLogin = () => {
//     const userData = {
//       "ldap": emailId,
//       "password": password
//     };

//     Login(userData);
//   };

//   const inputStyle = ['input'];
//   const buttonStyle = ['button'];
//   const disabledButtonStyle = ['button', 'button-disabled'];

//   return (
//     localStorage.getItem('accessToken') !== null ? <Navigate to="/toggle" /> :
//       <div className='form-container'>
//         <div className="image-containerr">
//           <img src={logo} alt="Logo" className="logoo" />
//         </div>
//           <input
//             type="text"
//             placeholder="Email ID"
//             value={emailId}
//             onChange={handleEmailIdChange}
//             className={inputStyle.join(' ')}
//           />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={handlePasswordChange}
//           className={inputStyle.join(' ')}
//         />
//         <div style={{ color: "white" }}>{error}</div>
//         <button style={{fontFamily: 'Fraunces'}}
//           onClick={handleLogin}
//           className={allFieldsFilled() ? buttonStyle.join(' ') : disabledButtonStyle.join(' ')}
//           disabled={!allFieldsFilled()}
//         >
//           LOGIN
//         </button>
//         <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "medium", fontFamily: 'Fraunces'}}>
//           New User ? <a href="/register">Register here</a>
//         </div>
//       </div>
//   );
// }

// export default Login;
import React, { useState } from 'react';
import '../styles/Login.css';
import { Navigate } from 'react-router-dom';
import UseLogin from '../hooks/useLogin';
import logo from '../assets/images/mk.png';

function Login() {
  const [password, setPassword] = useState('');
  const [emailId, setEmailId] = useState('');

  const allFieldsFilled = () => {
    return (
      password !== '' &&
      emailId !== ''
    );
  };

  const { Login, error, setError, success, loading } = UseLogin();

  const handlePasswordChange = (event) => { setPassword(event.target.value); setError("") }
  const handleEmailIdChange = (event) => { setEmailId(event.target.value); setError("") };

  const handleLogin = () => {
    const userData = {
      "ldap": emailId,
      "password": password
    };

    Login(userData);
  };

  const inputStyle = ['input1'];
  const buttonStyle = ['button'];
  const disabledButtonStyle = ['button', 'button-disabled'];

  return (
    localStorage.getItem('accessToken') !== null ? <Navigate to="/toggle" /> :
      <div className='form-container'>
        <div className="image-containerr">
          <img src={logo} alt="Logo" className="logoo" />
        </div>
          <input
            type="text"
            placeholder="Email ID"
            value={emailId}
            onChange={handleEmailIdChange}
            className={inputStyle.join(' ')}
          />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className={inputStyle.join(' ')}
        />
        <div style={{ color: "white" }}>{error}</div>
        <button style={{fontFamily: 'Fraunces'}}
          onClick={handleLogin}
          className={allFieldsFilled() ? buttonStyle.join(' ') : disabledButtonStyle.join(' ')}
          disabled={!allFieldsFilled()}
        >
          LOGIN
        </button>
        <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "medium", fontFamily: 'Fraunces'}}>
          New User ? <a href="/register">Register here</a>
        </div>
      </div>
  );
}

export default Login;
