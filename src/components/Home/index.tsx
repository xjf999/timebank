import React from 'react';
import './index.css';
import './Header-rightEntry/RightEntry'
import RightEntry from './Header-rightEntry/RightEntry';
import CenterEntry from './Header-centerEntry/CenterEntry';

const homeHeaderStyle: React.CSSProperties = {
  display: 'flex',
  width: '100%',
  height: 120,
};

const Home:React.FC = () => {
  return (
    <>
    <div style={homeHeaderStyle}>
      <CenterEntry />
      <RightEntry />
    </div>
    </>
  );
}

export default Home;