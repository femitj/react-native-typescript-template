import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Avatar} from '../../../components/Wrappers';
import {cartPlaceholderImage} from '../../../assets/images';
import {truncateWords} from '../../../utils';
import genStyles from '../genStyles';
import Text from '../../../components/Text';
import {colors} from '../../../assets/theme/color';
import useToast from '../../../hooks/useToast';

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
  const toast = useToast();

  return (
    <TouchableOpacity
      onPress={() => {
        if (disableClick) return;
        if (!item?.quantityInStock) {
          toast.show('Product is out of stock', {
            placement: 'top',
            duration: 4000,
            animationType: 'slide-in',
            type: 'success',
          });
          return;
        }
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
          <View style={{width: '80%'}}>
            <Text style={genStyles.itemTitle}>{`${item?.name} ${
              item?.genId ? `(${item?.genId})` : ''
            }`}</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={genStyles.itemName}>
                {truncateWords(item?.description, {length: 40})}
              </Text>
              <Text color={colors.mineShaft} fontWeight="bold" fontSize={12}>
                {item.quantityInStock}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
