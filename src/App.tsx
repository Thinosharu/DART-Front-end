import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import WelcomeToDart from './components/WelcomeToDart';
import Signup from './components/signup';
import Login from './components/login';
import UserForm from './components/userform';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/welcome" element={<WelcomeToDart />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userform" element={<UserForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;