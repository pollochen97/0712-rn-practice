import React from 'react';
import {Text} from 'react-native';
import {styles} from './style';
interface ITitle {
  title: string;
}

export const Title = (props: ITitle) => {
  return <Text style={styles.title}>{props.title}</Text>;
};
