import React, {FC} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';
import {colors} from '../../assets/theme/color';

interface CustomInputProps {
  onChangeText?: (value: any) => void;
  iconPosition?: string;
  icon?: any;
  style?: any;
  value?: string;
  label?: string;
  error?: boolean;
  placeholder?: string;
  message?: any;
  wrapperStyle?: any;
  inputStyle?: any;
  placeholderTextColor?: string;
  color?: string;
  labelColor?: string;
  editable?: boolean;
  height?: any;
  keyboadType?: any;
  [x: string]: any;
}

const CustomInput: FC<CustomInputProps> = ({
  onChangeText,
  iconPosition,
  icon,
  style,
  value,
  label,
  error,
  placeholder,
  message,
  wrapperStyle,
  inputStyle,
  placeholderTextColor,
  color = colors.black,
  editable = true,
  labelColor,
  height,
  keyboadType = 'default',
  multiline,
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };

  const getBorderColor = () => {
    if (error) {
      return colors.scarlet;
    }

    if (focused) {
      return colors.chardonnay;
    } else {
      return colors.iron2;
    }
  };

  const getBackgroundColor = () => {
    if (focused) {
      return colors.bridalHealth;
    } else {
      return colors.alabaster;
    }
  };

  return (
    <View style={[styles.inputContainer, wrapperStyle]}>
      {label && (
        <Text style={{color: labelColor || colors.black}}>{label}</Text>
      )}
      <View
        style={[
          styles.wrapper,
          {alignItems: icon ? 'center' : 'baseline'},
          {
            borderColor: getBorderColor(),
            flexDirection: getFlexDirection(),
            backgroundColor: getBackgroundColor(),
          },
          height && {height},
          inputStyle,
        ]}>
        {icon && icon}

        <TextInput
          style={[styles.textInput, {color}, style]}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          editable={editable}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          placeholderTextColor={placeholderTextColor || colors.gray}
          keyboardType={keyboadType || 'default'}
          multiline={multiline}
          {...props}
        />
      </View>
      {message && (
        <Text style={error ? styles.error : styles.message}>{message}</Text>
      )}
    </View>
  );
};

export default CustomInput;

// interface CheckInputProps {
//   onClick: () => void;
//   style?: any;
//   checked?: boolean;
//   rightText?: string;
//   leftText?: string;
//   checkedCheckBoxColor?: string;
//   disabled?: boolean;
// }

// export const CheckBoxInput = ({
//   checked,
//   onClick,
//   leftText,
//   rightText,
//   style,
//   disabled,
//   checkedCheckBoxColor,
// }: any) => {
//   return (
//     <Container dir="row" verticalAlignment="center">
//       <CheckBox
//         disabled={false}
//         boxType="square"
//         onTintColor={colors.concrete}
//         tintColor={colors.concrete}
//         value={checked}
//         onValueChange={onClick}
//       />
//       {rightText && rightText}
//     </Container>
//   );
// };
