import React, {useState} from 'react';
import {RadioButton} from 'react-native-paper';
import {View} from 'react-native';
import Text from '../Text';
import CustomInput from '../Input';
import {colors} from '../../assets/theme/color';
import {HP, RF} from '../../utils/devicesize';

type CustomRBtnProps = {
  item: {
    label: string;
    value: string;
  }[];
  title?: string;
  isSearchable?: boolean;
};

export default function CustomRBtn({
  item,
  title,
  isSearchable = false,
}: CustomRBtnProps) {
  const [value, setValue] = useState(item[0].value);
  return (
    <View>
      {title && (
        <View style={{marginBottom: 10}}>
          <Text
            style={{
              fontWeight: 500,
              fontSize: RF(10),
              lineHeight: 22,
              color: colors.shark,
            }}>
            {title}
          </Text>
        </View>
      )}
      {isSearchable && (
        <View style={{marginBottom: 10}}>
          <CustomInput
            height={HP(6)}
            placeholder="Search for a  model"
            placeholderTextColor={colors.osloGray}
            inputStyle={{
              backgroundColor: colors.alto2,
              borderRadius: 8,
              marginTop: 0,
            }}
          />
        </View>
      )}
      <RadioButton.Group onValueChange={x => setValue(x)} value={value}>
        {item.map(val => (
          <RadioButton.Item
            label={val?.label}
            value={val?.value}
            position="leading"
            style={{
              backgroundColor: colors.white,
              borderColor: colors.iron2,
              borderRadius: 4,
              borderWidth: 1,
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'flex-start',
              marginBottom: 15,
            }}
            labelStyle={{flexShrink: 0, flexGrow: 0}}
            color={colors.royalBlue}
            uncheckedColor={colors.gullGray}
            key={`${item}-${Math.random()}`}
          />
        ))}
      </RadioButton.Group>
    </View>
  );
}
