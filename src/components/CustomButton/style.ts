import {StyleSheet} from 'react-native';
import {colors} from '../../assets/theme/color';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  borderStyle: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '500',
  },
  borderTextStyle: {
    color: colors.primary,
  },
});
