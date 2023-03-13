import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const getIconName = (name: string) => {
  switch (name) {
    case 'Home':
      return 'home-outline';
    case 'Notifications':
      return 'notifications-outline';
    default:
      return 'alert-outline';
  }
};

const TabBarIcon = ({
  name,
  color,
  size,
}: {
  name: string;
  color: string;
  size: number;
}) => {
  return <Ionicons name={getIconName(name)} size={size} color={color} />;
};

export {TabBarIcon};
