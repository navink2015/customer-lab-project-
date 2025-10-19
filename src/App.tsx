import React, { useState } from 'react';
import SegmentModal from './components/SegmentModal';
import './App.css';

// Replace this with your webhook URL from https://webhook.site/
const WEBHOOK_URL = 'https://webhook.site/123';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <div className="app-container">
        <div className="view-audience-header">
          <button className="back-nav" onClick={() => console.log('Navigate back')}>
            &#8249;
          </button>
          <h1>View Audience</h1>
        </div>
        
        <div className="content">
          <button className="save-segment-button" onClick={handleOpenModal}>
            Save segment
          </button>
        </div>
      </div>

      <SegmentModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        webhookUrl={WEBHOOK_URL}
      />
    </div>
  );
};

export default App;


