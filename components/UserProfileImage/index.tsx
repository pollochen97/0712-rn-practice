import React from 'react';
import {Image, View} from 'react-native';
import {style} from './style';

interface IUserProfileImage {
  profileImage: any;
  imageDimensions: number;
}

export const UserProfileImage = (props: IUserProfileImage) => {
  return (
    <View
      style={[style.userImageContainer, {borderRadius: props.imageDimensions}]}>
      <Image
        source={props.profileImage}
        style={{width: props.imageDimensions, height: props.imageDimensions}}
      />
    </View>
  );
};
