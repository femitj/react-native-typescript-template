import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from '../Icon';
import {colors} from '../../assets/theme/color';

interface CustomDropdownProps {
  onPress?: (value: any) => void;
  placeholder?: string;
  onSelect?: any;
  data?: any;
  defaultValue?: string;
  defaultValueByIndex?: any;
  label?: string;
  labelStyle?: any;
  dropdownStyle?: any;
  buttonStyle?: any;
  dropdown1BtnTxtStyle?: any;
  dropdown1RowStyle?: any;
  dropdown1RowTxtStyle?: any;
  color?: string;
  error?: boolean;
  rowTextForSelection?: any;
  buttonTextAfterSelection?: any;
  dropdownOverlayColor?: any;
}

export default function Dropdown({
  dropdownStyle,
  placeholder,
  onSelect,
  data,
  defaultValue,
  defaultValueByIndex,
  buttonStyle,
  dropdown1BtnTxtStyle,
  dropdown1RowStyle,
  dropdown1RowTxtStyle,
  label,
  labelStyle,
  onPress,
  error,
  rowTextForSelection,
  buttonTextAfterSelection,
  dropdownOverlayColor,
}: CustomDropdownProps) {
  return (
    <View style={styles.container}>
      {label && (
        <Text
          style={[
            labelStyle,
            {
              marginBottom: 8,
              textTransform: 'uppercase',
            },
          ]}>
          {label}
        </Text>
      )}
      <SelectDropdown
        search
        searchInputStyle={styles.dropdown3searchInputStyleStyle}
        searchPlaceHolder={'Search here'}
        searchPlaceHolderColor={'#F8F8F8'}
        data={data}
        defaultValueByIndex={defaultValueByIndex}
        defaultValue={defaultValue}
        onSelect={onSelect}
        defaultButtonText={placeholder}
        buttonTextAfterSelection={selectedItem =>
          buttonTextAfterSelection
            ? buttonTextAfterSelection(selectedItem)
            : selectedItem
        }
        rowTextForSelection={item =>
          rowTextForSelection ? rowTextForSelection(item) : item
        }
        buttonStyle={{...buttonStyle, ...styles.dropdown1BtnStyle}}
        buttonTextStyle={{
          ...dropdown1BtnTxtStyle,
          ...styles.dropdown1BtnTxtStyle,
        }}
        renderDropdownIcon={isOpened => {
          return (
            <Icon
              type="fa"
              name={isOpened ? 'chevron-up' : 'chevron-down'}
              color={colors.alto}
              size={16}
            />
          );
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={(styles.dropdownStyle, dropdownStyle)}
        rowStyle={{...dropdown1RowStyle, ...styles.dropdown1RowStyle}}
        rowTextStyle={{...dropdown1RowTxtStyle, ...styles.dropdown1RowTxtStyle}}
        dropdownOverlayColor={dropdownOverlayColor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginVertical: 10},
  dropdown1BtnStyle: {
    backgroundColor: colors.alabaster,
    width: '100%',
    borderWidth: 1,
    borderColor: colors.mercury,
    boxSizing: 'border-box',
    borderRadius: 8,
    height: 52,
  },
  dropdown1BtnTxtStyle: {
    textAlign: 'left',
    marginLeft: 0,
    paddingHorizontal: 3,
    color: colors.gray,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19,
  },
  dropdownStyle: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    marginTop: 10,
  },
  dropdown1RowStyle: {
    backgroundColor: '#EFEFEF',
    borderBottomColor: '#C5C5C5',
  },
  dropdown1RowTxtStyle: {
    color: 'rgba(24, 25, 31, 0.5)',
    textAlign: 'left',
    padding: 10,
    fontSize: 18,
  },
  dropdown3searchInputStyleStyle: {
    backgroundColor: 'slategray',
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
  },
});
