import React, { useState, useContext } from 'react';

import AuthContext from '../../contexts/AuthContext';

import { socialMediaName } from '../data/data';
// import styles from './index.module.css';

function LogInForm() {
  const EMPTY_STATE = { login: '', password: '' };
  const [form, setForm] = useState(EMPTY_STATE);
  const { handleLogin } = useContext(AuthContext);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin(form);
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
            id="login"
            name="login"
            aria-describedby="login"
            placeholder="Username"
            value={form.login}
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
