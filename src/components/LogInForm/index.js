import React, { useState, useContext } from 'react';
// import PropTypes from 'prop-types'

import AuthContext from '../../contexts/AuthContext';
// import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';

import { socialMediaName } from '../data/data';
// import styles from './index.module.css';

function LogInForm() {
  const EMPTY_STATE = { username: '', password: '' };
  const [form, setForm] = useState(EMPTY_STATE);
  // const navigate = useNavigate();
  // const auth = {
  //   username: form.username.trim(),
  //   password: form.password.trim(),
  // };

  const { handleLogin } = useContext(AuthContext);

  // const { token, profile, handleLogin, handleLogout } = useContext(AuthContext);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // if (form.username.trim() === '' || form.password.trim() === '') {
    //   return;
    // }

    // navigate('/news');

    console.log(form);
    // handleLogin(auth);
    handleLogin(form);

    setForm(EMPTY_STATE);

    // console.log(auth);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return (
    <div className="login">
      <h1 className="login-logo">{socialMediaName}</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            aria-describedby="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3 password">
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            aria-describedby="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        <button
          className="btn btn-outline-success"
          type="submit"
          // htmlType="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

// LogInForm.propTypes = {}

export default LogInForm;
