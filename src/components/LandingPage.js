import React from 'react';
import styled from 'styled-components';
import Map from './Map';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LandingPage = () => {
  return (
    <Container>
      <Map
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '400px', width: '600px' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </Container>
  );
};

export default LandingPage;
