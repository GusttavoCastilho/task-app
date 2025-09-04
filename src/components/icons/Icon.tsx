import React from 'react';
import CalendarIcon from './CalendarIcon';
import Check1Icon from './Check1Icon';
import Check2Icon from './Check2Icon';
import FolderIcon from './FolderIcon';
import HistoryIcon from './HistoryIcon';
import HomeIcon from './HomeIcon';
import InsightsIcon from './InsightsIcon';
import NotificationIcon from './NotificationIcon';
import PlusIcon from './PlusIcon';
import ProfileIcon from './ProfileIcon';
import WorkIcon from './WorkIcon';

export type IconName = 'calendar' | 'check1' | 'check2' | 'folder' | 'history' | 'home' | 'insights' | 'notification' | 'plus' | 'profile' | 'work';

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 16, color = '#161616' }) => {
  const iconProps = { size, color };

  switch (name) {
    case 'calendar':
      return <CalendarIcon {...iconProps} />;
    case 'check1':
      return <Check1Icon {...iconProps} />;
    case 'check2':
      return <Check2Icon {...iconProps} />;
    case 'folder':
      return <FolderIcon {...iconProps} />;
    case 'history':
      return <HistoryIcon {...iconProps} />;
    case 'home':
      return <HomeIcon {...iconProps} />;
    case 'insights':
      return <InsightsIcon {...iconProps} />;
    case 'notification':
      return <NotificationIcon {...iconProps} />;
    case 'plus':
      return <PlusIcon {...iconProps} />;
    case 'profile':
      return <ProfileIcon {...iconProps} />;
    case 'work':
      return <WorkIcon {...iconProps} />;
    default:
      return null;
  }
};

export default Icon;
