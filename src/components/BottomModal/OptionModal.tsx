import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import Icon from '../Icon';
import {SizedBox} from '../SizedBox';
import CustomText from '../Text';
import {Container} from '../Wrappers';
import {colors} from '../../assets/theme/color';
import {RF} from '../../utils/devicesize';

const Index = ({
  visible,
  setVisible,
  avoidKeyboard,
  title,
  description,
  options,
}: any) => {
  const toggleModal = () => {
    setVisible(!visible);
  };

  return (
    <Modal
      testID={'modal'}
      avoidKeyboard={avoidKeyboard || false}
      isVisible={visible}
      onBackdropPress={toggleModal}
      onSwipeComplete={() => setVisible(false)}
      swipeDirection={['up', 'left', 'right', 'down']}
      style={styles.view}>
      <View style={styles.content}>
        <Pressable onPress={toggleModal} style={{marginLeft: 'auto'}}>
          <Icon name="close-a" size={18} type="fontisto" color="black" />
        </Pressable>
        <Container verticalAlignment="center">
          <CustomText
            color={colors.portGore}
            fontSize={RF(22)}
            lineHeight={28}
            fontWeight="700">
            {title}
          </CustomText>
          <Text style={styles.contentTitle}>{description}</Text>
        </Container>

        <SizedBox height={30} />
        <Container>
          <Container dir="column">
            {options.map((item: any) => (
              <TouchableOpacity
                key={item.id}
                style={[styles.billerItem, {backgroundColor: item.bgColor}]}
                onPress={item.navigateTo}>
                <View
                  style={[
                    styles.iconWrapper,
                    {backgroundColor: item.iconBgColor},
                  ]}>
                  {item.icon}
                </View>
                <CustomText
                  fontSize={RF(10)}
                  color={colors.portGore}
                  fontWeight="500">
                  {item.name}
                </CustomText>
              </TouchableOpacity>
            ))}
          </Container>
        </Container>

        <SizedBox height={40} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  content: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 15,
    marginVertical: 18,
    color: colors.dustyGray,
  },
  billerItem: {
    paddingHorizontal: 27,
    paddingVertical: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    flexDirection: 'row',
  },
  billerItem2: {
    paddingHorizontal: 33,
    paddingVertical: 26,
  },
  iconWrapper: {
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
});

export default Index;
