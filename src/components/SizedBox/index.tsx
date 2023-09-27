import React from 'react';
import {View} from 'react-native';
import {HP} from '../../utils/devicesize';

/* ANCHOR SIZED BOX */
interface SizedBoxProps {
  width?: number;
  height?: number;
  flex?: number;
  backgroundColor?: any;
  borderColor?: any;
  borderRadius?: number;
}

export const SizedBox = ({
  width,
  height,
  flex,
  backgroundColor,
  borderColor,
  borderRadius,
}: SizedBoxProps) => {
  return (
    <View
      style={[
        {
          width,
          height: HP(height),
          flex,
          backgroundColor,
          borderRadius: borderRadius ? borderRadius : 0,
        },
        borderColor && {borderWidth: 0.331, borderColor},
      ]}
    />
  );
};
