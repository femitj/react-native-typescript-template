import {Dimensions, PixelRatio} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;

// console.log('Screen height', Platform.OS === 'ios', SCREEN_HEIGHT);
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

export function wp2(percentage: any) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}
export function hp2(percentage: any) {
  const value = (percentage * viewportHeight) / 100;
  return Math.round(value);
}

export const RF = (size: number, scale: number = 4) =>
  RFValue(size + scale, SCREEN_HEIGHT);

export const HDP = (size: number) => PixelRatio.roundToNearestPixel(size);

export const WP = (size: any) => widthPercentageToDP(size);

export const HP = (size: any) => heightPercentageToDP(size);

export const calcH = (size: any) => SCREEN_HEIGHT * size;

export const PADDING_HORIZONTAL = 5;
