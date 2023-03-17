import React from 'react';
import {Text, View} from 'react-native';
import {cardStyle} from './styles';
import {CardProps} from './types';

const Card = ({title, content}: CardProps) => {
  const {card, title: titleStyle, content: contentStyle} = cardStyle;
  return (
    <View style={card}>
      <Text style={titleStyle}>{title}</Text>
      <View style={contentStyle}>
        <Text numberOfLines={20}>{content}</Text>
      </View>
    </View>
  );
};

export {Card};
