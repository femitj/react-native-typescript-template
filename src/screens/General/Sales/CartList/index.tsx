import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {DeleteIcon} from '../../../../assets/svgs';
import {currencyFormat} from '../../../../utils/currency';
import {colors} from '../../../../assets/theme/color';
import {truncateWords} from '../../../../utils';

interface CartListProps {
  editQuantity: () => void;
  handleRemove: () => void;
  item: any;
}

const CartList = ({editQuantity, handleRemove, item}: CartListProps) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={[styles.cartItem]}>
          <Text style={styles.cartItemText}>
            {truncateWords(item.name, {length: 35})}
          </Text>
          <View style={styles.cartItemP}>
            <Text style={[styles.cartItemText, {marginRight: 5}]}>
              {currencyFormat(item.soldPrice * item.quantity)}
            </Text>
            <Pressable onPress={handleRemove}>
              <DeleteIcon />
            </Pressable>
          </View>
        </View>
        <Pressable onPress={editQuantity} style={{flexDirection: 'row'}}>
          <Text>2 x {item.soldPrice}</Text>
          <Text style={styles.cartItemBT}>Edit Quantity</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CartList;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.contrete,
    paddingVertical: 16,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 17,
    justifyContent: 'space-between',
  },
  cartItemBT: {
    color: colors.primary,
    fontWeight: '500',
    lineHeight: 17,
    marginLeft: 'auto',
  },
  cartItemText: {
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '500',
    // color: colors.doveGray,
  },
  cartItemP: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
