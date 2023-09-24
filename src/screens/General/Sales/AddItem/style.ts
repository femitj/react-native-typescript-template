import {StyleSheet} from 'react-native';
import {colors} from '../../../../assets/theme/color';

export default StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomModalView: {
    justifyContent: 'flex-end',
  },
  modal: {
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  NewOrderTop: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderRadius: 8,
    marginBottom: 4,
    paddingHorizontal: 20,
  },
  notTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
    paddingTop: 24,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  nottL: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 19,
    color: colors.mineShaft,
  },
  nottR: {},
  md: {
    padding: 16,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: colors.alto,
  },
  mdt: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 8,
  },
  mdb: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
  },
  bot: {},

  NOButt: {
    width: '100%',
  },
});
