import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface HomeIconProps {
  size?: number;
  color?: string;
}

const HomeIcon: React.FC<HomeIconProps> = ({ 
  size = 28, 
  color = '#064148' 
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <Path 
        d="M14 6.63833L19.8333 11.8883V21H17.5V14H10.5V21H8.16667V11.8883L14 6.63833ZM14 3.5L2.33333 14H5.83333V23.3333H12.8333V16.3333H15.1667V23.3333H22.1667V14H25.6667L14 3.5Z" 
        fill={color}
      />
    </Svg>
  );
};

export default HomeIcon;
