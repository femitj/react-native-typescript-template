import {StyleSheet} from 'react-native';
import {RF, WP} from '../../../utils/devicesize';
import {colors} from '../../../assets/theme/color';

export default StyleSheet.create({
  container: {
    // padding: 20,
    backgroundColor: colors.white,
    flexGrow: 1,
  },
  image: {
    marginTop: 15,
    borderRadius: 5,
    marginBottom: 54,
    height: RF(30),
    width: WP(33),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  wrapper: {
    padding: 30,
  },
  forget: {
    textAlign: 'right',
    fontStyle: 'normal',
    color: colors.white,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 15,
    marginTop: 5,
    marginBottom: 35,
  },
});
