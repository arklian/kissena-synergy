import React from 'react';
import { Title } from '@mantine/core';

const WhoWeArePage: React.FC = () => {
  return (
    <div
      style={{
        position: 'relative', // Enables layering
        width: '100%', // Full width container
        height: '300px', // Height of the section
        display: 'flex', // Flexbox for layout
        justifyContent: 'center', // Center content horizontally
        alignItems: 'center', // Center content vertically
        backgroundColor: '#00000054', // Black background with opacity
        overflow: 'hidden', // Prevent content from overflowing
      }}
    >
      {/* Left Image (20% width) */}
      <img
        src="/path-to-image-1.jpg" // Replace with your left image path
        alt="Left Image"
        style={{
          position: 'absolute',
          left: '0',
          width: '15%', // 20% width for the left image
          height: '100%', // Match container height
         objectFit: 'cover', // Maintain aspect ratio while filling
        }}
      />

      {/* Right Image (10% width) */}
      <img
        src="/path-to-image-2.jpg" // Replace with your right image path
        alt="Right Image"
        style={{
        //  position: 'absolute',
          right: '0',
          width: '10%', // 10% width for the right image
          height: '100%', // Match container height
          objectFit: 'cover', // Maintain aspect ratio while filling
        }}
      />

      {/* "Who We Are" Positioned between the two images */}
      <Title
        order={1}
        style={{
          position: 'absolute', // Overlay the text
          left: '0%', // Position after the first image (20%)
          right: '0%', // Ensure it stops before the second image (10%)
          bottom: '10%', // Center the text vertically in the remaining space
          color: '#B8F000', // White text for better contrast
          fontSize: '30px', // Adjust font size
          fontWeight: '700', // Bold font weight
          textAlign: 'left', // Center text horizontally
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.8)', // Text shadow for readability
          zIndex: 2, // Bring text on top of images
        }}
      >
        Who We Are
      </Title>
    </div>
  );
};

export default WhoWeArePage;
