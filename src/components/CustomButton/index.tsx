import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './style';

interface CustomButtonProps {
  onPress?: (value: any) => void;
  disabled?: boolean;
  loading?: boolean;
  textStyle?: any;
  content?: any;
  backgroundColor?: string;
  bordered?: boolean;
  message?: any;
  containerStyle?: any;
  color?: string;
}

const CustomButton = ({
  onPress,
  disabled,
  loading,
  backgroundColor,
  bordered,
  containerStyle,
  content,
  textStyle,
  color,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View
        style={[
          styles.container,
          bordered && styles.borderStyle,
          {backgroundColor: backgroundColor},
          containerStyle,
        ]}>
        {/* {loading && <AcivityIndicator color={colors.white} />} */}
        {content ? (
          <Text
            style={[
              styles.text,
              bordered && styles.borderTextStyle,
              {color: color},
              textStyle,
            ]}>
            {loading ? 'Please wait...' : content}
          </Text>
        ) : (
          <View />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
