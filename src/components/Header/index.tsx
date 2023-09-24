import React from 'react';
import {ImageBackground, Pressable, View} from 'react-native';
import {SizedBox} from '../SizedBox';
import {Container} from '../Wrappers';
import Icon from '../Icon';
import CustomText from '../Text';
import {useNavigation} from '@react-navigation/native';
import {bgImg} from '../../assets/images';
import {RF} from '../../utils/devicesize';
import {colors} from '../../assets/theme/color';

type HeaderProps = {
  title?: string;
  backgroundColor?: string;
  icon?: any;
  iconPosition?: any;
  height?: any;
  textSize?: any;
  showBgImg?: boolean;
  showLeftIcon?: boolean;
};

const Index = ({
  title,
  backgroundColor,
  icon,
  iconPosition,
  height,
  textSize,
  showBgImg = true,
  showLeftIcon = true,
}: HeaderProps) => {
  const navigate = useNavigation();
  return (
    <ImageBackground
      // resizeMethod={'auto'}
      source={showBgImg ? bgImg : undefined}
      style={{
        width: '100%',
        height: height || RF(180),
        backgroundColor: backgroundColor || colors.mako,
        position: 'relative',
        overflow: 'hidden',
      }}
      imageStyle={{
        resizeMode: 'stretch',
        alignSelf: 'flex-end',
        height: RF(290),
      }}>
      {showLeftIcon && <SizedBox height={5} />}
      <Container
        dir="row"
        horizontalAlignment={iconPosition || 'flex-start'}
        verticalAlignment="center"
        paddingHorizontal={8}>
        {showLeftIcon && icon ? (
          icon
        ) : showLeftIcon ? (
          <Pressable onPress={() => navigate.goBack()}>
            <Icon
              type="material"
              name="arrow-back-ios"
              size={20}
              color={colors.white}
            />
          </Pressable>
        ) : (
          ''
        )}
      </Container>
      <SizedBox height={3} />
      <Container
        dir="row"
        horizontalAlignment="center"
        marginLeft="auto"
        marginRight="auto"
        style={!showLeftIcon ? {marginTop: 'auto', marginBottom: 'auto'} : {}}>
        <CustomText
          fontSize={textSize || RF(17)}
          lineHeight={26}
          color={colors.white}
          fontWeight="700">
          {title || ''}
        </CustomText>
      </Container>
    </ImageBackground>
  );
};

export default Index;
