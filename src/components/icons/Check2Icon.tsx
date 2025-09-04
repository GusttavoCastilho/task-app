import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Check2IconProps {
  size?: number;
  color?: string;
}

const Check2Icon: React.FC<Check2IconProps> = ({ 
  size = 10, 
  color = 'white' 
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 10 10" fill="none">
      <Path 
        d="M8.95835 2.29167L3.51565 7.70834L1.04169 5.24621" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Check2Icon;
