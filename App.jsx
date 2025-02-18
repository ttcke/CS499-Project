import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './base/LoginPage';
import RegisterPage from './base/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}