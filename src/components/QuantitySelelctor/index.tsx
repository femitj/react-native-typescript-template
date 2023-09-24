import {View, Text, Pressable, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {colors} from '../../assets/theme/color';

const QuantitySelector = ({
  quantity,
  setQuantity,
  rootStyle,
  buttonStyle,
}: any) => {
  const onMinus = () => {
    const calcMin = Math.max(0, quantity - 1);
    if (calcMin) setQuantity(calcMin);
  };
  const onPlus = () => {
    setQuantity(quantity + 1);
  };
  return (
    <View style={[styles.root, rootStyle]}>
      <Pressable
        onPress={onMinus}
        style={[
          styles.button,
          {backgroundColor: 'rgba(255, 103, 103, 0.08)'},
          buttonStyle,
        ]}>
        <Text style={[styles.buttonText, {color: '#FF6767'}]}>-</Text>
      </Pressable>
      <View>
        {/* <Text style={styles.quantity}>{quantity}</Text> */}
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: colors.alto,
            borderRadius: 4,
            width: 56,
            height: 40,
            textAlign: 'center',
          }}
          keyboardType="numeric"
          onChangeText={value => {
            setQuantity(Number(value.replace(/[^0-9]/g, '')));
          }}
          value={`${quantity}`}
        />
      </View>
      <Pressable
        onPress={onPlus}
        style={[
          styles.button,
          {backgroundColor: ' rgba(41, 191, 106, 0.08)'},
          buttonStyle,
        ]}>
        <Text style={[styles.buttonText, {color: '#29BF6A'}]}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: '#e3e3e3',
    justifyContent: 'space-between',
    width: '100%',
    padding: 16,
  },
  button: {
    width: 56,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d1d1d1',
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 18,
  },
  quanBox: {
    width: 76,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.alto,
    borderRadius: 4,
  },
  quantity: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default QuantitySelector;
