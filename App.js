import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Title} from './components/title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {globalStyle} from './assets/styles/globalStyle';
import {UserStory} from './components/UserStory/UserStory';

const App = () => {
  const userStories = [
    {
      firstName: 'John',
      id: 1,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Jane',
      id: 2,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Jack',
      id: 3,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Jill',
      id: 4,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Jenny',
      id: 5,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Andy',
      id: 6,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Ethan',
      id: 7,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Phoebe',
      id: 8,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Jean',
      id: 9,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Tom',
      id: 10,
      profileImage: require('./assets/images/default_profile.png'),
    },
  ];

  return (
    <SafeAreaView>
      <View style={globalStyle.header}>
        <Title title={"Let's Explore"} />
        <TouchableOpacity style={globalStyle.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} color="#898DAE" />
          <View style={globalStyle.badge}>
            <Text style={globalStyle.badgeText}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={globalStyle.userStoriesContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={userStories}
          renderItem={({item}) => (
            <UserStory
              firstName={item.firstName}
              profileImage={item.profileImage}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
