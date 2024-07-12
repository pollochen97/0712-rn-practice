import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

export const style = StyleSheet.create({
  userContainer: {flexDirection: 'row'},
  userTextContainer: {justifyContent: 'center', marginLeft: 10},
  userPostContainer: {
    marginTop: 35,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
  },
  username: {
    color: '#000',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: 16,
  },
  user: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  location: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: 12,
    color: '#79869F',
    marginTop: 5,
    textAlign: 'left',
  },
  postImage: {
    alignItems: 'center',
    marginTop: 20,
  },
});
