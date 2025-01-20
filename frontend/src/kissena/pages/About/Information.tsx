// src/kissena/pages/About/Information.tsx

import React from 'react';
import Header from '../../components/Header';  // Import the Header component
import WhoWeArePage from './WhoWeArePage';    // Import the WhoWeArePage
import MissionPage from './MissionPage';      // Import the MissionPage

const Information: React.FC = () => {
  return (
    <div>
      {/* Header Component */}
      <Header />

      {/* "Who We Are" Section */}
      <WhoWeArePage />

      {/* "Mission" Section */}
      <MissionPage />
    </div>
  );
};

export default Information;
