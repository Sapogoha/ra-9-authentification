import React from 'react';
import AuthContext from '../../contexts/AuthContext';
import useStorage from '../../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';

export default function AuthProvider(props) {
  const [token, setToken] = useStorage(localStorage, 'token');
  const [profile, setProfile] = useStorage(localStorage, 'profile', true);
  const navigate = useNavigate();

  const handleLogin = async ({ login, password }) => {
    try {
      const loginResponse = await fetch(process.env.REACT_APP_AUTH_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login, password }),
      });

      const { token } = await loginResponse.json();

      const profileResponse = await fetch(
        `${process.env.REACT_APP_DATA_URL}me`,
        {
          method: 'GET',
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const profile = await profileResponse.json();

      setToken(token);
      setProfile(profile);

      navigate('/news');
    } catch (e) {
      setToken(null);
      setProfile(null);
      throw new Error('Fail');
    }
  };

  const handleLogout = () => {
    setToken(null);
    setProfile(null);
  };

  return (
    <AuthContext.Provider value={{ handleLogin, handleLogout, token, profile }}>
      {props.children}
    </AuthContext.Provider>
  );
}
