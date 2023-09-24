import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Avatar} from '../../../components/Wrappers';
import {cartPlaceholderImage} from '../../../assets/images';
import {truncateWords} from '../../../utils';
import genStyles from '../genStyles';

type ProductItemProps = {
  item: any;
  handleClick?: any;
  disableClick: boolean;
};

const ProductItem = ({
  item,
  handleClick,
  disableClick = true,
}: ProductItemProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (disableClick) return;
        handleClick({
          productId: item.id,
          name: `${item.name} - ${item.genId}`,
          quantity: 0,
          soldPrice: undefined,
        });
      }}>
      <View style={genStyles.item}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Avatar
            source={item?.logoUrl ? {uri: item?.logoUrl} : cartPlaceholderImage}
            size={16}
            marginRight={2}
          />
          <View>
            <Text style={genStyles.itemTitle}>{`${item?.name} ${
              item?.genId ? `(${item?.genId})` : ''
            }`}</Text>
            <Text style={genStyles.itemName}>
              {truncateWords(item?.description, {length: 40})}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
