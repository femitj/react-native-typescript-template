import React from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import styles from './style';
import Button from '../Button';

const DateModal = ({visible, setVisible, children}: any) => {
  const toggleModal = () => {
    setVisible(!visible);
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
              <Text style={styles.nottL}>Select date</Text>
            </View>

            <View>{children}</View>

            <View>
              <Button
                contentStyle={styles.btnText}
                style={styles.dropdownStyle}
                onPress={toggleModal}>
                Confirm
              </Button>
            </View>
          </View>
          <View style={styles.NOButt}>
            <Button
              buttonColor="#fff"
              textColor="#0088ff"
              onPress={toggleModal}>
              Close
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DateModal;
