import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPanel.css';

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState('salat');
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      alert('Access denied! Please log in first.');
      navigate('/adminlogin'); // Redirect to login if not logged in
    }
  }, [navigate]);

  const renderContent = () => {
    switch (activeTab) {
      case 'salat':
        return (
          <div>
            <h2>Change Salat Time</h2>
            {/* Add form or UI for changing salat times */}
          </div>
        );
      case 'dua':
        return (
          <div>
            <h2>Manage Duas</h2>
            {/* Add UI for adding, editing, and deleting Duas */}
          </div>
        );
      case 'qna':
        return (
          <div>
            <h2>Manage QnA</h2>
            {/* Add UI for adding, editing, and deleting QnA */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="admin-panel">
      <div className="admin-header">
      <h1 class="top-title">Admin Panel</h1>
        <button onClick={() => {
          localStorage.removeItem('isLoggedIn'); // Clear login status
          navigate('/adminlogin'); // Redirect to login page
        }} className="logout-button">Logout</button>
      </div>

      <nav className="admin-nav">
        <button onClick={() => setActiveTab('salat')} className={activeTab === 'salat' ? 'active' : ''}>Salat</button>
        <button onClick={() => setActiveTab('dua')} className={activeTab === 'dua' ? 'active' : ''}>Duas</button>
        <button onClick={() => setActiveTab('qna')} className={activeTab === 'qna' ? 'active' : ''}>QnA</button>
      </nav>
      <div className="admin-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminPanel;