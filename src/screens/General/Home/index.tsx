import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Screen} from '../../../components/Screens';
import {useGetCategoriesQuery} from '../GeneralSlicer';
import {colors} from '../../../assets/theme/color';
import NavToggle from '../../../components/TopNav/NavToggle';
import {SizedBox} from '../../../components/SizedBox';
import CustomText from '../../../components/Text';
import {Container, ImageWrap, TouchWrap} from '../../../components/Wrappers';
import {currencyFormat} from '../../../utils/currency';
import {HDP} from '../../../utils/devicesize';
import {
  cancelIcon,
  cartIcon,
  markUpIcon,
  pendingIcon,
} from '../../../assets/images';

const Index = () => {
  useGetCategoriesQuery();

  return (
    <Screen
      isFixed={true}
      backgroundColor={colors.white}
      paddingHorizontal={15}>
      <NavToggle />
      <View>
        <Text
          style={{
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: 18,
            lineHeight: 22,
            paddingVertical: 10,
          }}>
          Good Morning
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 8,
        }}>
        <CustomText color={colors.textGrey} fontSize={12}>
          Your Dashboard
        </CustomText>
        {/* <CustomText color={colors.chambray}>Filter</CustomText> */}
      </View>

      <SizedBox height={HDP(1)} />

      <TouchWrap
        backgroundColor={colors.mako}
        height={13}
        verticalAlignment="center"
        horizontalAlignment="center"
        borderRadius={10}>
        <CustomText color={colors.white} fontSize={14}>
          Payments made this week
        </CustomText>
        <CustomText
          color={colors.white}
          fontSize={20}
          style={{
            fontWeight: 'bold',
            marginTop: 5,
          }}>
          {currencyFormat(0)}
        </CustomText>
      </TouchWrap>

      <SizedBox height={HDP(1)} />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          justifyItems: 'space-around',
          paddingVertical: 10,
          flexWrap: 'wrap',
        }}>
        <Container
          backgroundColor={colors.white}
          widthPercent="48%"
          height={HDP(13)}
          verticalAlignment="center"
          horizontalAlignment="center"
          marginBottom={1.5}
          borderRadius={10}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Container>
              <ImageWrap source={cartIcon} width={8} height={4} fit="cover" />
            </Container>
            <Container>
              <CustomText
                color={colors.black}
                fontSize={10}
                lineHeight={15}
                numberOfLines={1}>
                Orders this week
              </CustomText>
              <SizedBox height={0.5} />
              <CustomText
                color={colors.black}
                style={styles.dashCount}
                fontSize={25}
                lineHeight={30}>
                0
              </CustomText>
            </Container>
          </View>
        </Container>
        <Container
          backgroundColor={colors.white}
          widthPercent="48%"
          height={HDP(13)}
          verticalAlignment="center"
          horizontalAlignment="center"
          marginBottom={1.5}
          borderRadius={10}>
          <Container dir="row">
            <Container>
              <ImageWrap
                source={pendingIcon}
                width={8}
                height={4}
                fit="cover"
              />
            </Container>
            <Container>
              <CustomText
                color={colors.black}
                fontSize={10}
                lineHeight={15}
                numberOfLines={1}>
                Total Pending
              </CustomText>
              <SizedBox height={HDP(0.5)} />
              <CustomText
                color={colors.black}
                style={styles.dashCount}
                fontSize={25}
                lineHeight={30}>
                0
              </CustomText>
            </Container>
          </Container>
        </Container>

        <Container
          backgroundColor={colors.white}
          widthPercent="48%"
          height={HDP(13)}
          verticalAlignment="center"
          horizontalAlignment="center"
          marginBottom={1.5}
          borderRadius={10}>
          <Container dir="row">
            <Container>
              <ImageWrap source={markUpIcon} width={8} height={4} fit="cover" />
            </Container>
            <Container>
              <CustomText
                color={colors.black}
                fontSize={10}
                lineHeight={15}
                numberOfLines={1}>
                Total Fulfilled
              </CustomText>
              <SizedBox height={HDP(0.5)} />
              <CustomText
                color={colors.black}
                style={styles.dashCount}
                fontSize={25}
                lineHeight={30}>
                {'0'}
              </CustomText>
            </Container>
          </Container>
        </Container>
        <Container
          backgroundColor={colors.white}
          widthPercent="48%"
          height={HDP(13)}
          verticalAlignment="center"
          horizontalAlignment="center"
          marginBottom={1.5}
          borderRadius={10}>
          <Container dir="row">
            <Container>
              <ImageWrap source={cancelIcon} width={8} height={4} fit="cover" />
            </Container>
            <Container>
              <CustomText
                color={colors.black}
                fontSize={10}
                lineHeight={15}
                numberOfLines={1}>
                Total Cancelled
              </CustomText>
              <SizedBox height={HDP(0.5)} />
              <CustomText
                color={colors.black}
                style={styles.dashCount}
                fontSize={25}
                lineHeight={30}>
                {'0'}
              </CustomText>
            </Container>
          </Container>
        </Container>
      </View>

      <SizedBox height={HDP(1)} />

      {/* {mostTradedDistributor && (
        <MostTradedCard
          data={{
            email: mostTradedDistributor?.emailAddress,
            phoneNumber: mostTradedDistributor?.phoneNumber,
            name: mostTradedDistributor?.name,
            item: mostTradedDistributor,
          }}
          title='Most traded distributor'
        />
      )} */}
      <SizedBox height={HDP(5)} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  dashCount: {
    fontWeight: 'bold',
  },
});

export default Index;
