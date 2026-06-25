import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { G } from '../../screens/_partials/gardenUi';

const HealthStemArt = ({ width = 56, height = 84 }) => (
  <Svg width={width} height={height} viewBox="0 0 56 84" fill="none">
    {/* Main stem */}
    <Path 
      d="M28 84V20" 
      stroke={G.sage} 
      strokeWidth="3.5" 
      strokeLinecap="round" 
    />
    
    {/* Top leaf */}
    <Path 
      d="M28 20C28 20 18 10 28 4C38 10 28 20 28 20Z" 
      fill={G.sage} 
    />
    
    {/* Upper left leaf */}
    <Path 
      d="M28 34C28 34 14 34 8 24C14 18 28 34 28 34Z" 
      fill={G.sage} 
      opacity="0.9"
    />
    
    {/* Upper right leaf */}
    <Path 
      d="M28 40C28 40 42 40 48 30C42 24 28 40 28 40Z" 
      fill={G.sage} 
      opacity="0.9"
    />
    
    {/* Lower left leaf */}
    <Path 
      d="M28 54C28 54 12 54 6 44C12 38 28 54 28 54Z" 
      fill={G.sage} 
      opacity="0.8"
    />
    
    {/* Lower right leaf */}
    <Path 
      d="M28 60C28 60 44 60 50 50C44 44 28 60 28 60Z" 
      fill={G.sage} 
      opacity="0.8"
    />
  </Svg>
);

export default HealthStemArt;
