import React from 'react';
import {Image, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {userStoryStyle} from './style';
// interface IFlatListUserStory {
//   firstName: string;
//   profileImage: object;
// }

export const UserStory = props => {
  return (
    <View style={userStoryStyle.storyContainer}>
      <View style={userStoryStyle.userImageContainer}>
        <Image source={props.profileImage} style={userStoryStyle.image} />
      </View>
      <Text style={userStoryStyle.firstName}>{props.firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.object.isRequired,
};
