import {StyleSheet} from 'react-native';
import {colors} from '../../assets/theme/color';

export default StyleSheet.create({
  logoImage: {
    height: 150,
    width: 150,
    // alignSelf: 'center',
    marginTop: 50,
  },
  icon: {},
  logoDiv: {},
  logoText: {},
  ltName: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    marginTop: 8,
    marginBottom: 4,
  },
  ltRole: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 15,
    marginBottom: 33,
    color: colors.doveGray,
  },
  ordTitle: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 15,
    textTransform: 'uppercase',
    marginBottom: 10,
    color: colors.doveGray,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Ditem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  itemText: {
    fontSize: 17,
    paddingVertical: 7,
    paddingLeft: 20,
  },
});
