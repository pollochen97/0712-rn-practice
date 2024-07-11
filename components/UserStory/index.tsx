import React from 'react';
import {Text, View} from 'react-native';
// import PropTypes from 'prop-types';
import {style} from './style';
import {UserProfileImage} from '../UserProfileImage';

interface IFlatListUserStory {
  firstName: string;
  profileImage: object;
}

export const UserStory = (props: IFlatListUserStory) => {
  return (
    <View style={style.storyContainer}>
      <UserProfileImage
        profileImage={props.profileImage}
        imageDimensions={65}
      />
      <Text style={style.firstName}>{props.firstName}</Text>
    </View>
  );
};
