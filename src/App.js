import './App.css';
import LandingPage from './pages/LandingPage';
import MainPage from './pages/MainPage';
import SingleNewsPage from './pages/SingleNewsPage';
import NotFoundPage from './pages/NotFoundPage';

import AuthProvider from './components/AuthProvider';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="page">
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/news" element={<MainPage />} />
            <Route path="/news/:newsId" element={<SingleNewsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
