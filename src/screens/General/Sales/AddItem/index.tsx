import {Text, View} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import styles from './style';
import Icon from '../../../../components/Icon';
import Button from '../../../../components/CustomButton';
import {colors} from '../../../../assets/theme/color';
import CustomInput from '../../../../components/Input';
import QuantitySelector from '../../../../components/QuantitySelelctor';
import {SizedBox} from '../../../../components/SizedBox';

interface AddItemProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  handleSelected: (price: string, quantity: number) => void;
  mode: string;
  selected: any;
}

const AddItem = ({
  visible,
  setVisible,
  mode,
  selected,
  handleSelected,
}: AddItemProps) => {
  const [quantity, setQuantity] = useState(Number(selected?.quantity) || 0);
  const [price, setPrice] = useState('');

  const toggleModal = () => {
    setVisible(!visible);
  };

  const handleValidate = () => {
    if (price && price > 0) {
      if (quantity || quantity > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  return (
    <View style={styles.container}>
      <Modal
        style={styles.bottomModalView}
        isVisible={visible}
        backdropOpacity={0.4}
        onBackdropPress={toggleModal}
        useNativeDriverForBackdrop>
        <View style={styles.modal}>
          <View style={styles.NewOrderTop}>
            <View style={styles.notTop}>
              <Text style={styles.nottL}>
                {mode === 'add' ? 'Add Item' : 'Edit Item'}
              </Text>
              <Icon
                onPress={toggleModal}
                style={styles.nottR}
                name="close-a"
                size={20}
                type="fontisto"
              />
            </View>
            <View style={styles.md}>
              <Text style={styles.mdt}>{selected?.name}</Text>
              {/* <Text style={styles.mdb}>
                {currencyFormat(selected?.unitPrice)} PER {selected?.unit}
              </Text> */}
            </View>
            <SizedBox height={1} />
            <View style={{}}>
              <CustomInput
                keyboadType="numeric"
                label="Price"
                placeholder="₦ 0.00"
                value={price}
                onChangeText={value => setPrice(value)}
              />
            </View>
            <View style={styles.bot}>
              <QuantitySelector
                quantity={quantity}
                setQuantity={setQuantity}
                rootStyle={{
                  borderRadius: 10,
                }}
              />
            </View>
            <SizedBox height={1} />
          </View>
          <View style={styles.NOButt}>
            <Button
              content={mode === 'add' ? 'Add Item' : 'Update Item'}
              color="#fff"
              onPress={() => {
                const confirm = handleValidate();
                if (confirm) {
                  handleSelected(price, quantity);
                }
              }}
              backgroundColor={colors.mako}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddItem;
