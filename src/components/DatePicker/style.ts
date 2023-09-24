import {StyleSheet} from 'react-native';
import {colors} from '../../assets/theme/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
  },
  bottomModalView: {
    justifyContent: 'flex-end',
    margin: 15,
  },

  modal: {
    width: '100%',
    height: '50%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    fontSize: 20,
  },
  NewOrderTop: {
    backgroundColor: colors.white,
    width: '100%',
    borderRadius: 8,
    marginBottom: 4,
    padding: 16,
  },
  notTop: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  nottL: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 19,
    color: colors.mineShaft,
  },
  nottR: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 15,
    color: colors.blackPearl,
  },
  notMd: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 15,
    color: colors.blackPearl,
    textTransform: 'uppercase',
    color: colors.mineShaft,
    marginBottom: 8,
  },
  NOButt: {
    width: '100%',
  },
  dropdownStyle: {
    borderColor: colors.alto,
    paddingVertical: 13,
    paddingHorizontal: 16,
  },
  btnText: {
    width: '100%',
    color: '#0088ff',
    textAlign: 'center',
  },
  dvText: {
    color: colors.alto,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
  },
  dvIcon: {
    color: colors.doveGray,
    fontWeight: '500',
    fontSize: 13,
  },
  dropView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
