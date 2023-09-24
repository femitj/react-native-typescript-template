import React, {type PropsWithChildren} from 'react';
import {Text as PaperText} from 'react-native-paper';
import {colors} from '../../assets/theme/color';
import {RF} from '../../utils/devicesize';

export type TextProps = PropsWithChildren<{
  variant?: any;
  color?: string;
  fontSize?: number;
  fontWeight?: string;
  textAlign?: string;
  [x: string]: any;
}>;

const Text = ({
  variant,
  color,
  fontSize,
  fontWeight,
  textAlign,
  children,
  ...props
}: TextProps) => (
  <PaperText
    variant={variant}
    style={[
      {
        color: color || colors.white,
        fontSize: fontSize ? RF(fontSize) : 14,
        lineHeight: props.lineHeight || 22,
        // fontFamily: fontRegular,
        textAlign,
        flex: props.flex, //added this
        textTransform: props.textTransform,
        fontWeight,
        textDecorationLine: props.decorationLine || 'none',
      },
      props.fontWeight && {fontWeight: props.fontWeight},
      props.style,
    ]}>
    {children}
  </PaperText>
);

export default Text;
