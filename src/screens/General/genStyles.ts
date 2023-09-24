import {StyleSheet} from 'react-native';
import {RF} from '../../utils/devicesize';
import {colors} from '../../assets/theme/color';

const genStyles = StyleSheet.create({
  title: {
    fontWeight: '600',
    fontSize: RF(18),
    lineHeight: RF(22),
    letterSpacing: 0.0333333,
    color: colors.ultramarine,
  },
  tHead: {
    fontWeight: '600',
    fontSize: RF(24),
    lineHeight: RF(29),
    letterSpacing: 0.0333333,
    color: colors.ultramarine,
  },
  description: {
    fontSize: RF(14),
    lineHeight: 17,
    fontWeight: '300',
    color: colors.textGrey,
  },
  itemList: {
    flex: 1,
  },
  item: {
    paddingTop: 24,
    paddingBottom: 10,
    borderBottomColor: colors.contrete,
    borderBottomWidth: 1,
  },
  itemTitle: {
    fontWeight: '600',
    fontSize: RF(16),
    lineHeight: RF(19),
    color: colors.mineShaft,
    marginBottom: 8,
  },
  itemName: {
    fontWeight: '400',
    fontSize: RF(12),
    lineHeight: RF(17),
    color: colors.doveGray,
  },
  itemPrice: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    color: colors.mineShaft,
  },
});

export default genStyles;
