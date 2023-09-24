import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Screen} from '../../../components/Screens';
import {SizedBox} from '../../../components/SizedBox';
import Header from '../../../components/Header';
import {Container} from '../../../components/Wrappers';
import CustomText from '../../../components/Text';
import OptionModal from '../../../components/BottomModal/OptionModal';
import {colors} from '../../../assets/theme/color';
import {HP, RF} from '../../../utils/devicesize';
import {
  CardMgtIcon,
  ChequeIcon,
  LimitIcon,
  PeopleIcon,
  StandingIcon,
  StatementIcon,
} from '../../../assets/svgs';
import {
  CATEGORY_SCREEN,
  PRODUCT_SCREEN,
  SALES_SCREEN,
} from '../../../constants/routeNames';

const Index = ({navigation}: any) => {
  const [showCardMgt, setShowCardMgt] = useState(false);
  const [showChequeMgt, setShowChequeMgt] = useState(false);

  return (
    <Screen isFixed={true} backgroundColor={colors.white}>
      <Header title="My Services" showLeftIcon={true} showBgImg={false} />
      <SizedBox height={5} />

      <Container marginLeft="auto" marginRight="auto" width="75%">
        <Container dir="row" horizontalAlignment="space-between">
          <TouchableOpacity
            style={[styles.billerItem, {backgroundColor: '#F1FFE2'}]}
            onPress={() => navigation.push(CATEGORY_SCREEN)}>
            <View style={[styles.iconWrapper, {backgroundColor: '#91C958'}]}>
              <StatementIcon />
            </View>
            <CustomText
              fontSize={RF(10)}
              color={colors.portGore}
              fontWeight="500">
              Categories
            </CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.billerItem,
              styles.billerItem2,
              {
                backgroundColor: '#FFEFEB',
              },
            ]}
            onPress={() => navigation.push(PRODUCT_SCREEN)}>
            <View style={[styles.iconWrapper, {backgroundColor: '#FF814A'}]}>
              <LimitIcon />
            </View>
            <CustomText
              fontSize={RF(10)}
              color={colors.portGore}
              fontWeight="500">
              Products
            </CustomText>
          </TouchableOpacity>
        </Container>
        <Container dir="row" horizontalAlignment="space-between">
          <TouchableOpacity
            style={[
              styles.billerItem,
              {
                backgroundColor: '#FFF1CD',
              },
            ]}
            onPress={() => navigation.push(SALES_SCREEN)}>
            <View style={[styles.iconWrapper, {backgroundColor: '#FFB800'}]}>
              <StandingIcon />
            </View>
            <CustomText
              fontSize={RF(10)}
              color={colors.portGore}
              fontWeight="500">
              Sales Order
            </CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.billerItem,
              styles.billerItem2,
              {
                backgroundColor: '#E4EEFF',
              },
            ]}
            disabled={true}
            onPress={() => setShowChequeMgt(true)}>
            <View style={[styles.iconWrapper, {backgroundColor: '#0F599E'}]}>
              <ChequeIcon />
            </View>
            <CustomText
              fontSize={RF(10)}
              color={colors.portGore}
              fontWeight="500">
              Transactions
            </CustomText>
          </TouchableOpacity>
        </Container>
        <Container dir="row" horizontalAlignment="space-between">
          <TouchableOpacity
            disabled={true}
            style={[styles.billerItem, {backgroundColor: '#FFEEF2'}]}
            onPress={() => setShowCardMgt(true)}>
            <View style={[styles.iconWrapper, {backgroundColor: '#E71D36'}]}>
              <CardMgtIcon />
            </View>
            <CustomText
              fontSize={RF(10)}
              color={colors.portGore}
              fontWeight="500">
              Card Mgt.
            </CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.billerItem,
              styles.billerItem2,
              {
                backgroundColor: '#FFEFEB',
              },
            ]}
            disabled={true}
            onPress={() => navigation.push(CATEGORY_SCREEN)}>
            <View style={[styles.iconWrapper, {backgroundColor: '#F0A58E'}]}>
              <PeopleIcon />
            </View>
            <CustomText
              fontSize={RF(10)}
              color={colors.portGore}
              fontWeight="500">
              Staffs
            </CustomText>
          </TouchableOpacity>
        </Container>
      </Container>
      {showCardMgt && (
        <OptionModal
          visible={showCardMgt}
          setVisible={setShowCardMgt}
          handleSubmit={() => {
            setShowCardMgt(false);
          }}
          title="Card Management"
          description="Select the operation you want to perform"
          options={[
            {
              id: 1,
              name: 'Request Card',
              // icon: <TvIcon />,
              bgColor: colors.riceFlower,
              iconBgColor: '#91C958',
              navigateTo: () => {
                navigation.navigate('REQUEST_CARD');
                setShowCardMgt(false);
              },
            },
            {
              id: 2,
              name: 'Manage Card',
              // icon: <InternetIcon />,
              bgColor: '#FFEFEB',
              iconBgColor: '#FF814A',
              navigateTo: () => {
                navigation.navigate('CARD_MGT');
                setShowCardMgt(false);
              },
            },
          ]}
        />
      )}
      {showChequeMgt && (
        <OptionModal
          visible={showChequeMgt}
          setVisible={setShowChequeMgt}
          handleSubmit={() => {
            setShowChequeMgt(false);
          }}
          title="Cheque Management"
          description="Select the operation you want to perform"
          options={[
            {
              id: 1,
              name: 'Request Cheque',
              icon: <StatementIcon />,
              bgColor: colors.riceFlower,
              iconBgColor: '#91C958',
              navigateTo: () => {
                navigation.navigate('REQUEST_CHEQUE');
                setShowChequeMgt(false);
              },
            },
            {
              id: 2,
              name: 'Stop Cheque',
              icon: <StatementIcon />,
              bgColor: '#FFEFEB',
              iconBgColor: '#FF814A',
              navigateTo: () => {
                navigation.navigate('STOP_CHEQUE');
                setShowChequeMgt(false);
              },
            },
          ]}
        />
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#E4E4E4',
    height: HP(6),
  },
  billerItem: {
    width: '45%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  billerItem2: {
    paddingVertical: 22,
  },
  iconWrapper: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default Index;
