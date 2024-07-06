// src/App.js
import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstTimeUser from './pages/FirstTimeUser';
import Dashboard from './pages/Dashboard';
import AddBusinessIdea from './pages/AddBusinessIdea';
import logo from './assets/SP-logo-short.png';  // Import the logo
import './App.css';

const { Header, Content, Footer } = Layout;

const App = () => {
  const pathname = window.location.pathname;

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        {pathname !== '/dashboard' && (
          <Header className="app-header">
            <div className="logo-container">
              <img src={logo} alt="SP-logo-short.png" className="logo" />
            </div>
          </Header>
        )}
        <Content style={{ padding: '0 50px' }}>
          <Routes>
            <Route path="/" element={<FirstTimeUser />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-business-idea" element={<AddBusinessIdea />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center' }}>SalesPredictor.AI ©2024 Created by YourName</Footer>
      </Layout>
    </Router>
  );
};

export default App;