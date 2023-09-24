import React from 'react';
import {StyleSheet} from 'react-native';
import {Button as PaperButton, ButtonProps} from 'react-native-paper';
import {colors} from '../../assets/theme/color';
import {HP} from '../../utils/devicesize';

const Button = ({
  icon,
  mode,
  buttonColor,
  textColor,
  onPress,
  children,
  loading,
  uppercase,
  onPressIn,
  onPressOut,
  onLongPress,
  disabled,
  contentStyle,
  style,
  labelStyle,
}: ButtonProps) => {
  return (
    <PaperButton
      icon={icon}
      mode={mode || 'contained'}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onLongPress={onLongPress}
      loading={loading}
      buttonColor={buttonColor || colors.cinder}
      textColor={textColor || colors.white}
      uppercase={uppercase}
      contentStyle={[styles.contentStyle, contentStyle]}
      style={[styles.btn, style]}
      labelStyle={labelStyle}
      disabled={disabled}>
      {children}
    </PaperButton>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderRadius: 8,
  },
  contentStyle: {
    height: HP(6),
    justifyContent: 'center',
  },
});

export default Button;
