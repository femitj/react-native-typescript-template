import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {DeleteIcon} from '../../../../assets/svgs';
import {currencyFormat} from '../../../../utils/currency';
import {colors} from '../../../../assets/theme/color';

interface CartListProps {
  editQuantity: () => void;
  description: string;
  name: string;
  price: number;
  handleRemove: () => void;
  showItem: boolean;
}

const CartList = ({
  editQuantity,
  description,
  name,
  price,
  handleRemove,
  showItem,
}: CartListProps) => {
  // const [showItem, hideItem] = useState(false);
  return (
    <View>
      {showItem && (
        <View style={styles.container}>
          <View style={[styles.cartItem]}>
            <Text style={styles.cartItemText}>{description}</Text>
            <View style={styles.cartItemP}>
              <Text style={[styles.cartItemText, {marginRight: 5}]}>
                {currencyFormat(price)}
              </Text>
              <Pressable onPress={handleRemove}>
                <DeleteIcon />
              </Pressable>
            </View>
          </View>
          <Pressable onPress={editQuantity}>
            <Text style={styles.cartItemBT}>Edit Quantity</Text>
          </Pressable>
        </View>
      )}
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
    color: colors.doveGray,
  },
  cartItemP: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
