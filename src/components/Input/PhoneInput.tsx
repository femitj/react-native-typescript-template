import React, {useRef, useState} from 'react';
import {View, Text} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import styles from './styles';
import {colors} from '../../assets/theme/color';
import {HP, wp2} from '../../utils/devicesize';

interface PhoneNumberInputProps {
  onChangeText: (value: any) => void;
  style?: any;
  value?: string;
  label?: string;
  error?: boolean;
  message?: string;
  defaultCode?: any;
  disabled?: boolean;
}

const PhoneNumberInput = ({
  label,
  value,
  onChangeText,
  defaultCode,
  error,
  style,
  message,
  disabled,
}: PhoneNumberInputProps) => {
  const phoneInput = useRef(null);
  const [focused, setFocused] = useState(false);

  const getBorderColor = () => {
    if (error) {
      return colors.danger;
    }

    if (focused) {
      return colors.primary;
    } else {
      return colors.grey;
    }
  };
  return (
    <View style={styles.inputContainer}>
      {label && <Text style={{color: colors.black}}>{label}</Text>}

      <PhoneInput
        ref={phoneInput}
        value={value}
        disabled={disabled || false}
        onChangeFormattedText={onChangeText}
        defaultValue={value}
        defaultCode={defaultCode || 'NG'}
        textInputStyle={style}
        layout="first"
        containerStyle={[
          styles.phoneWrapper,
          {
            borderColor: getBorderColor(),
            backgroundColor: 'transparent',
            height: HP(7) || 'auto',
          },
        ]}
        codeTextStyle={{
          display: 'none',
        }}
        // flagButtonStyle={{
        //   backgroundColor: '#fff',
        // }}
        textContainerStyle={{
          borderRadius: 8,
          paddingVertical: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 10,
          width: wp2(80),
          borderColor: colors.iron2,
          borderWidth: 1,
        }}
        countryPickerButtonStyle={{
          backgroundColor: 'white',
          width: wp2(20),
          borderRadius: 10,
          borderColor: colors.iron2,
          borderWidth: 1,
        }}
      />
      {message && (
        <Text style={error ? styles.error : styles.message}>{message}</Text>
      )}
    </View>
  );
};

export default PhoneNumberInput;
