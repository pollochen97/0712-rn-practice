import {StyleSheet} from 'react-native';
import {getFontFamily} from '../fonts/helper';

export const globalStyle = StyleSheet.create({
  header: {
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  messageIcon: {padding: 14, borderRadius: 100, backgroundColor: '#F9FAFB'},
  badge: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    width: 10,
    height: 10,
    position: 'absolute',
    top: 10,
    right: 8,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 6,
    fontFamily: getFontFamily('Inter', '600'),
  },
  userStoryContainer: {
    marginTop: 20,
    marginHorizontal: 28,
  },
  userPostContainer: {
    marginHorizontal: 24,
  },
});
