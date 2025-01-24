import React from 'react';
import { Title, Text } from '@mantine/core';
import logo from './logo.png';


const MissionPage: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',
        backgroundColor: '#0D1608',
        marginLeft: '150px',
        marginTop: '50px',
      }}
    >
      {/* "Our Mission" Section */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '150px' }}>
        {/* Text Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Title
            order={2}
            style={{
              fontFamily: 'var(--H2)',
              fontSize: '28px',
              fontWeight: 700,
              lineHeight: '32px',
              textAlign: 'left',
              color: '#609D37',
              textUnderlinePosition: 'from-font',
              textDecorationSkipInk: 'none',
              width: '200px',
              height: '32px',
              marginTop: '0px',
              marginBottom: '10px',
            }}
          >
            Our Mission
          </Title>


          {/* "Lorem Ipsum" Text */}
          <div
            style={{
              width: '629px',
              opacity: '1',
              marginTop: '0px',
              marginBottom: '20px',
            }}
          >
            <Text
              style={{
                fontFamily: 'var(--H1)',
                fontSize: '64px',
                fontWeight: 700,
                lineHeight: '71.68px',
                textAlign: 'left',
                background: 'linear-gradient(180deg, #609D37 0%, #B8F000 30%, #F7790A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginTop: '0px',
                marginBottom: '0px',
              }}
            >
              Lorem ipsum odor
              <br />
              amet, consectetuer
              <br />
              adipiscing elit.
            </Text>
            <Text
              style={{
                fontFamily: 'Instrument Sans',
                fontSize: '24px',
                fontWeight: 400,
                lineHeight: '36px',
                textAlign: 'left',
                color: '#FFF4B9',
                paddingTop: '5px',
              }}
            >
              Maecenas dapibus quisque tempor interdum maximus dictumst faucibus porttitor. Nulla faucibus gravida magna id habitant hac cras laoreet. Dictumst adipiscing vehicula turpis aliquet libero venenatis. Duis nostra libero vehicula ultricies, mauris sodales velit. Et dapibus euismod ultrices lobortis ultricies mus semper. Integer sit sagittis, eget aliquet blandit lectus cras donec auctor. Nunc accumsan nec gravida consequat.
            </Text>
          </div>
        </div>


        {/* Rectangle with Image */}
        <div
          style={{
            width: '339px',
            height: '508px',
            borderRadius: 'var(--Radius)',
            backgroundColor: '#D9D9D9',
            opacity: '1',
            flexShrink: 0,
            marginTop: '60px',
            marginBottom: '20px',
          }}
        >
          <img
            src="/path-to-your-image.jpg"
            alt="Mission Visual"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>


      {/* "Why Kissena Synergy?" Section */}
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '150px' }}>
        {/* Text Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Title
            order={2}
            style={{
              fontFamily: 'var(--H2)',
              fontSize: '32px',
              fontWeight: 700,
              lineHeight: '32px',
              textAlign: 'left',
              color: '#609D37',
              backgroundColor: '#0D1608',
              width: '388px',
              height: '32px',
              opacity: '1',
              marginTop: '20px',
              marginBottom: '10px',
            }}
          >
            Why “Kissena Synergy”?
          </Title>
          <Text
            style={{
              fontFamily: 'Instrument Sans',
              fontSize: '24px',
              fontWeight: 400,
              lineHeight: '36px',
              textAlign: 'left',
              color: '#FFF4B9',
              width: '629px',
              backgroundColor: '#0D1608',
              marginTop: '0px',
            }}
          >
            Maecenas dapibus quisque tempor interdum maximus dictumst faucibus porttitor. Nulla faucibus gravida magna id habitant hac cras laoreet. Dictumst adipiscing vehicula turpis aliquet libero venenatis. Duis nostra libero vehicula ultricies, mauris sodales velit. Et dapibus euismod ultrices lobortis ultricies mus semper. Integer sit sagittis, eget aliquet blandit lectus cras donec auctor. Nunc accumsan nec gravida consequat.
          </Text>
        </div>


        {/* Kissena Logo */}
        <div
          style={{
            width: '250px',
            height: '250px',
            flexShrink: 0,
            display: 'flex',
            marginTop: '60px',
            backgroundColor: 'var(--Sign-Green, #0D1608)',
            marginBottom: '20px',
          }}
        >
          <img
            src={logo}  // Use the imported logo here
            alt="Kissena Logo"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              backgroundColor: 'var(--Sign-Green, #0D1608)', // Set the background color here
            }}
          />
        </div>
      </div>
    </div>
  );
};


export default MissionPage;


