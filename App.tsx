import React, {useState, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Title} from './components/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {globalStyle} from './assets/styles/globalStyle';
import {UserStory} from './components/UserStory';
import {IUserPost, UserPost} from './components/UserPost';

interface IUserStory {
  firstName: string;
  id: number;
  profileImage: any;
}

const App = () => {
  const userStories: IUserStory[] = [
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

  const userPosts: IUserPost[] = [
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Boston, MA',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      id: 1,
    },
    {
      firstName: 'Jennifer',
      lastName: 'Wilkson',
      location: 'Worcester, MA',
      likes: 1301,
      comments: 25,
      bookmarks: 70,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      id: 2,
    },
    {
      firstName: 'Adam',
      lastName: 'Spera',
      location: 'Worcester, MA',
      likes: 100,
      comments: 8,
      bookmarks: 3,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      id: 3,
    },
    {
      firstName: 'Nata',
      lastName: 'Vacheishvili',
      location: 'New York, NY',
      likes: 200,
      comments: 16,
      bookmarks: 6,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      id: 4,
    },
    {
      firstName: 'Nicolas',
      lastName: 'Namoradze',
      location: 'Berlin, Germany',
      likes: 2000,
      comments: 32,
      bookmarks: 12,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      id: 5,
    },
  ];

  //infinite scroll
  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] =
    useState<number>(1); //local state for counter
  const [userStoriesRenderData, setUserStoriesRenderData] = useState<
    IUserStory[]
  >([]);
  const [isLoadingUserStories, setIsLoadingUserStories] =
    useState<boolean>(false);

  // const userPostsPageSize = 2;
  // const [userPostsCurrentPage, setUserPostsCurrentPage] = useState<number>(1); //local state for counter
  // const [userPostsRenderData, setUserPostsRenderData] = useState<IUserPost[]>(
  //   [],
  // );
  // const [isLoadingUserPosts, setIsLoadingUserPosts] = useState<boolean>(false);

  const pagination = (
    database: IUserStory[],
    currentPage: number,
    pageSize: number,
  ) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialStories = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderData(getInitialStories);
    setIsLoadingUserStories(false);

    // setIsLoadingUserPosts(true);
    // const getInitialPosts = pagination(userPosts, 1, userPostsPageSize);
    // setUserPostsRenderData(getInitialPosts);
    // setIsLoadingUserPosts(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView>
      <View>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={globalStyle.header}>
                <Title title={"Let's Explore"} />
                <TouchableOpacity style={globalStyle.messageIcon}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    color="#898DAE"
                    size={20}
                  />
                  <View style={globalStyle.badge}>
                    <Text style={globalStyle.badgeText}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={globalStyle.userStoryContainer}>
                <FlatList
                  onEndReachedThreshold={0.5} //滑到哪裡的時候開始撈下一步的資料
                  onEndReached={() => {
                    if (isLoadingUserStories) {
                      return;
                    }
                    setIsLoadingUserStories(true);
                    const contentToAppend = pagination(
                      userStories,
                      userStoriesCurrentPage + 1,
                      userStoriesPageSize,
                    );
                    if (contentToAppend.length > 0) {
                      setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                      setUserStoriesRenderData(prev => [
                        ...prev,
                        ...contentToAppend,
                      ]);
                    }
                    setIsLoadingUserStories(false);
                  }}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={userStoriesRenderData}
                  renderItem={({item}) => (
                    <UserStory
                      key={'userStory' + item.id}
                      firstName={item.firstName}
                      profileImage={item.profileImage}
                    />
                  )}
                />
              </View>
            </>
          }
          // onEndReachedThreshold={0.5} //滑到哪裡的時候開始撈下一步的資料
          // onEndReached={() => {
          //   if (isLoadingUserPosts) {
          //     return;
          //   }
          //   setIsLoadingUserPosts(true);
          //   console.log(
          //     '讀取資料中，現在讀取第' + (userPostsCurrentPage + 1) + '頁',
          //   );
          //   const contentToAppend = pagination(
          //     userPosts,
          //     userPostsCurrentPage + 1,
          //     userPostsPageSize,
          //   );
          //   if (contentToAppend.length > 0) {
          //     setUserPostsCurrentPage(userPostsCurrentPage + 1);
          //     setUserPostsRenderData(prev => [...prev, ...contentToAppend]);
          //   }
          //   setIsLoadingUserPosts(false);
          // }}
          data={userPosts}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={globalStyle.userPostContainer}>
              <UserPost
                firstName={item.firstName}
                id={item.id}
                lastName={item.lastName}
                location={item.location}
                likes={item.likes}
                comments={item.comments}
                bookmarks={item.bookmarks}
                image={item.image}
                profileImage={item.profileImage}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
