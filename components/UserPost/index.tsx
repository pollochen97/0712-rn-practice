/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, View} from 'react-native';
import {UserProfileImage} from '../UserProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {style} from './style';
import {
  faBookmark,
  faHeart,
  faMessage,
} from '@fortawesome/free-regular-svg-icons';

export interface IUserPost {
  id: number;
  firstName: string;
  lastName: string;
  location?: string;
  likes: number;
  comments: number;
  bookmarks: number;
  image: any;
  profileImage: any;
}

export const UserPost = (props: IUserPost) => {
  return (
    <View style={style.userPostContainer}>
      <View style={style.user}>
        <View style={style.userContainer}>
          <UserProfileImage
            profileImage={props.profileImage}
            imageDimensions={48}
          />
          <View style={style.userTextContainer}>
            <Text style={style.username}>
              {props.firstName} {props.lastName}
            </Text>
            {props.location && (
              <Text style={style.location}>{props.location}</Text>
            )}
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsisH} color={'#79869F'} size={24} />
      </View>
      <View style={style.postImage}>
        <Image source={props.image} />
      </View>
      <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 20}}>
        <View style={{flexDirection: 'row'}}>
          <FontAwesomeIcon icon={faHeart} color={'#79869F'} />
          <Text style={{marginLeft: 3, color: '#79869F'}}>{props.likes}</Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 27}}>
          <FontAwesomeIcon icon={faMessage} color={'#79869F'} />
          <Text style={{marginLeft: 3, color: '#79869F'}}>
            {props.comments}
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 27}}>
          <FontAwesomeIcon icon={faBookmark} color={'#79869F'} />
          <Text style={{marginLeft: 3, color: '#79869F'}}>
            {props.bookmarks}
          </Text>
        </View>
      </View>
    </View>
  );
};
