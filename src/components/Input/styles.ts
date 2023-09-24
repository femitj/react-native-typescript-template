import {StyleSheet} from 'react-native';
import {HP} from '../../utils/devicesize';
import {colors} from '../../assets/theme/color';

export default StyleSheet.create({
  wrapper: {
    height: HP(7),
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginTop: 5,
    borderColor: colors.alto,
    backgroundColor: colors.white,
  },

  phoneWrapper: {
    height: HP(7),
    paddingHorizontal: 0,
    marginTop: 5,
    backgroundColor: colors.white,
    width: '100%',
  },

  inputContainer: {
    paddingVertical: 8,
  },

  textInput: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 5,
  },

  checkText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 23,
    color: 'rgba(24, 25, 31, 0.5)',
  },

  message: {
    color: 'rgba(24, 25, 31, 0.5)',
    paddingTop: 4,
    fontSize: 12,
  },
  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});
