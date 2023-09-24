import React, {useState} from 'react';
import {View, StyleSheet, Platform, Text, Pressable} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateModal from './DateModal';
import moment from 'moment';
import {colors} from '../../assets/theme/color';
import {CalendarIcon} from '../../assets/svgs';
import {HDP} from '../../utils/devicesize';

interface CustomDatePickerProps {
  label?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  error?: boolean;
  handleSetDate: (x: string) => void;
  display?: string;
}

const CustomDatePicker = ({
  label,
  handleSetDate,
  placeholder,
  placeholderTextColor,
  error,
  display,
}: CustomDatePickerProps) => {
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));
  const [confirmDate, setConfirmDate] = useState(null);
  const [focused, setFocused] = useState(false);

  const showPicker = () => {
    setIsPickerShow(!isPickerShow);
  };

  const onChange = (event: any, value: any) => {
    setDate(value);
    setConfirmDate(value);
    handleSetDate(value);
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
  };

  const getBorderColor = () => {
    if (error) {
      return colors.scarlet;
    }

    if (focused) {
      return colors.chardonnay;
    } else {
      return colors.mercury;
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
    <View style={styles.container}>
      {label && <Text>{label}</Text>}
      <View
        style={[
          styles.pickedDateContainer,
          {
            borderColor: getBorderColor(),
            backgroundColor: getBackgroundColor(),
          },
        ]}>
        <Text
          style={[
            styles.placeholder,
            {color: placeholderTextColor || colors.gray},
          ]}>
          {confirmDate ? moment(date).format('DD-MM-YYYY') : placeholder}
        </Text>
        <Pressable onPress={showPicker}>
          <CalendarIcon color={colors.black} />
        </Pressable>
      </View>

      {isPickerShow && (
        <View style={styles.innerContainer}>
          {Platform.OS === 'android' ? (
            <DateTimePicker
              value={date}
              mode="date"
              // @ts-ignore
              display={display || Platform.OS === 'ios' ? 'spinner' : 'default'}
              is24Hour={true}
              onChange={onChange}
              style={styles.datePicker}
            />
          ) : (
            <DateModal visible={isPickerShow} setVisible={setIsPickerShow}>
              <DateTimePicker
                value={date}
                mode={'date'}
                display={
                  display || Platform.OS === 'ios' ? 'spinner' : 'default'
                }
                is24Hour={true}
                onChange={onChange}
                // style={styles.datePicker}
              />
            </DateModal>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // flex: 1,
    // justifyContent: 'center',
    // padding: 50,
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  pickedDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 12,

    height: HDP(50),
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 5,
    borderColor: colors.alto,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  pickedDate: {
    fontSize: 18,
    color: 'black',
  },
  placeholder: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.doveGray,
  },
  btnContainer: {
    padding: 30,
  },
  datePicker: {
    width: 320,
    height: 260,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default CustomDatePicker;
