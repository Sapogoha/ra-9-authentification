import React from 'react';
import AuthContext from '../../contexts/AuthContext';
import useStorage from '../../hooks/useLocalStorage';

export default function AuthProvider(props) {
  const [token, setToken] = useStorage(localStorage, 'token');
  const [profile, setProfile] = useStorage(localStorage, 'profile', true);

  const handleLogin = async (values) => {
    console.log(values);
    try {
      const response = await fetch(process.env.REACT_APP_AUTH_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: { ...values },
        // body: JSON.stringify({ username, password }), // for demo only: read it from form!
      });
      if (!response.ok) {
        throw new Error('Auth failed');
      }
      const { token, profile } = await response.json();
      setToken(token);
      setProfile(profile);
    } catch (error) {
      console.error(error);
      setToken(null);
      setProfile(null);
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

// export default function AuthProvider(props) {
//   const [token, setToken] = useStorage(localStorage, 'token');
//   const [profile, setProfile] = useStorage(localStorage, 'profile', true);

//   const handleLogin = async ({ username, password }) => {
//     try {
//       const responseToken = await fetch('http://localhost:7070/auth', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });
//       if (!responseToken.ok) {
//         throw new Error('Auth failed');
//       }
//       const { token } = await responseToken.json();

//       const responseProfile = await fetch(`${'http://localhost:7070/auth'}me`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       if (!responseProfile.ok) {
//         throw new Error('Profile is not exist');
//       }
//       const profile = await responseProfile.json();

//       setToken(token);
//       setProfile(profile);
//     } catch (e) {
//       setToken(null);
//       setProfile(null);
//     }
//   };

//   const handleLogout = () => {
//     setToken(null);
//     setProfile(null);
//   };

//   return (
//     <AuthContext.Provider value={{ handleLogin, handleLogout, token, profile }}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// }
