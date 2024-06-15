import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Header from './components//Header/Header';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Home/Projects';
import './App.css';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="*" element={<Navigate to="/Home" />} />
          </Routes>
        </div>
      </Router>
    </I18nextProvider>
  );
};

export default App;
