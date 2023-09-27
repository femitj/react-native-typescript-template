import {isNumber} from 'lodash';
import React from 'react';
import {
  ImageBackground,
  View,
  StyleSheet,
  Dimensions,
  PixelRatio,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');

interface MarginProps {
  margin?: number;
  marginRight?: number;
  marginLeft?: number;
  marginTop?: any;
  marginBottom?: number;
  marginVertical?: number;
  marginHorizontal?: number;
}

interface PaddingProps {
  padding?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingVertical?: number;
  paddingHorizontal?: any;
}

interface BorderRadiusProps {
  borderRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
}

interface BorderWidth {
  borderBottomWidth?: number;
  borderTopWidth?: number;
  borderLeftWidth?: number;
  borderRightWidth?: number;
  borderWidth?: number;
  borderColor?: any;
  borderStyle?: any;
}

export const scaleFont = (val: any) => {
  let factor = PixelRatio.get();
  factor > 2.2 ? (factor = 2) : null;
  let size = ((factor * width) / 1000) * val;
  return size + 7;
};

export const Elevation = (elevation: any) => {
  let response = {};
  elevation == null || undefined
    ? (response = {})
    : (response = {
        elevation,
        shadowColor: '#0001',
        shadowOffset: {width: 0, height: elevation * 0.6},
        shadowOpacity: 0.8,
        shadowRadius: elevation * 0.5,
      });
  return response;
};

export const Height = (val: any) => {
  let res;
  if (isNumber(val)) {
    res = (val / 100) * height;
  } else {
    val === undefined || null ? (res = undefined) : (res = val);
  }
  return res;
};

export const Width = (val: any) => {
  let res;
  if (isNumber(val)) {
    res = (val / 100) * width;
  } else {
    val === undefined || null ? (res = undefined) : (res = val);
  }
  return res;
};
export const Container = ({...props}: any) => {
  return (
    <View
      {...props}
      onLayout={props.onLayout}
      style={[
        {
          // overflow: props.overflow ? 'hidden' : null,
          opacity: props.opacity,
          ...Elevation(props.elevation),
          flexDirection: props.dir,
          alignSelf: props.selfAlignment,
          flexWrap: props.wrap,
          flex: props.flex,
          height: Height(props.height),
          width: Width(props.width) || props.widthPercent,
          justifyContent:
            props.dir === 'row'
              ? props.horizontalAlignment
              : props.verticalAlignment,
          alignItems:
            props.dir === 'row'
              ? props.verticalAlignment
              : props.horizontalAlignment,
          backgroundColor:
            props.elevation > 0 && props.backgroundColor == null
              ? '#fff'
              : props.backgroundColor,
          borderRadius: props.borderRadius,
          borderBottomLeftRadius: props.borderBottomLeftRadius,
          borderBottomRightRadius: props.borderBottomRightRadius,
          borderTopLeftRadius: props.borderTopLeftRadius,
          borderTopRightRadius: props.borderTopRightRadius,
          margin: Width(props.margin),
          marginVertical: Height(props.marginVertical),
          marginHorizontal: Width(props.marginHorizontal),
          paddingVertical: Height(props.paddingVertical),
          paddingHorizontal: Width(props.paddingHorizontal),
          marginRight: Width(props.marginRight),
          marginLeft: Width(props.marginLeft),
          marginTop: Height(props.marginTop),
          marginBottom: Height(props.marginBottom),
          paddingRight: Width(props.paddingRight),
          paddingLeft: Width(props.paddingLeft),
          paddingTop: Height(props.paddingTop),
          paddingBottom: Height(props.paddingBottom),
          padding: Width(props.padding),
          borderBottomWidth: props.borderBottomWidth,
          borderTopWidth: props.borderTopWidth,
          borderLeftWidth: props.borderLeftWidth,
          borderRightWidth: props.borderRightWidth,
          borderWidth: props.borderWidth,
          borderStyle: props.borderStyle,
          borderColor: props.borderColor,
          maxWidth: props.maxWidth,
          maxHeight: props.maxHeight,
          minWidth: props.minWidth,
          minHeight: props.minHeight,
          position: props.position,
          left: props.left, //added this
          right: props.right, //added this
          top: props.top, //added this
          bottom: props.bottom, //added this
        },
        props.style,
      ]}>
      {props.children}
    </View>
  );
};

/* ANCHOR IMAGE WRAP */

export const ImageWrap = ({...props}: any) => {
  return (
    <ImageBackground
      source={props.source || {uri: props.url}}
      resizeMode={props?.fit || 'cover'}
      style={[
        styles.overflow,
        {
          position: props.position,
          width: Width(props.width) || props.widthPercent || '100%',
          height: Height(props.height) || '100%',
          backgroundColor: props.backgroundColor,
          borderRadius: props.borderRadius,
          borderTopLeftRadius: props.borderTopLeftRadius,
          borderBottomLeftRadius: props.borderBottomLeftRadius,
          borderWidth: props.borderWidth, //added this
          borderColor: props.borderColor, //added this
          margin: props.margin,
          marginVertical: props.marginVertical,
          marginHorizontal: props.marginHorizontal,
          marginRight: props.marginRight,
          marginLeft: props.marginLeft,
          marginTop: props.marginTop,
          marginBottom: props.marginBottom,
          padding: props.padding,
        },
      ]}>
      <Container
        flex={props.flex}
        backgroundColor={props.overlayColor}
        height={props.height}>
        {props.children}
      </Container>
    </ImageBackground>
  );
};

// Avatar compoment works well

/* ANCHOR AVATAR */
interface AvatarProps {
  marginLeft?: number;
  marginRight?: number;
  borderWidth?: number;
  borderColor?: any;
  url?: string;
  source?: any;
  elevation?: number;
  size?: number;
  backgroundColor?: any;
  position?: 'absolute' | 'relative';
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  fit?: 'cover' | 'contain';
}

export const Avatar = ({
  ...props
}: AvatarProps &
  MarginProps &
  PaddingProps &
  BorderWidth &
  BorderRadiusProps) => {
  return (
    <Container
      style={[
        {
          ...Elevation(props.elevation),
          position: props.position,
          top: Height(props.top),
          bottom: Height(props.bottom),
          left: Width(props.left),
          right: Width(props.right),
          height: Width(props.size) || Width(10),
          width: Width(props.size) || Width(10),
          backgroundColor: props.backgroundColor,
          // @ts-ignore
          borderRadius: Width(props.size) / 2 || Width(10) / 2,
          marginRight: Width(props.marginRight),
          marginLeft: Width(props.marginLeft),
        },
      ]}>
      <ImageBackground
        source={props.source || {uri: props.url}}
        resizeMode={props.fit || 'cover'}
        style={[
          styles.overflow,
          // @ts-ignore
          {
            height: Width(props.size) || Width(10),
            width: Width(props.size) || Width(10),
            // @ts-ignore
            borderRadius: Width(props.size) / 2 || Width(10) / 2,
            borderWidth: props.borderWidth,
            borderColor: props.borderColor,
          },
        ]}
      />
    </Container>
  );
};

export const TouchWrap = ({...props}: any) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={props.disabled}
      // activeOpacity={0.9}
      style={[
        {
          ...Elevation(props.elevation),
          opacity: props.opacity,
          padding: Width(props.padding),
          paddingTop: Width(props.paddingTop),
          paddingBottom: Width(props.paddingBottom),
          paddingLeft: Width(props.paddingLeft),
          paddingRight: Width(props.paddingRight),
          paddingVertical: Height(props.paddingVertical),
          paddingHorizontal: Width(props.paddingHorizontal),
          flex: props.flex,
          backgroundColor: props.backgroundColor,
          borderBottomColor: props.borderBottomColor,
          borderBottomWidth: Width(props.borderBottomWidth),
          borderWidth: props.borderWidth,
          borderLeftWidth: props.borderLeftWidth,
          borderColor: props.borderColor,
          borderStyle: props.borderStyle,
          width: Width(props.width) || props.widthPercent,
          height: Height(props.height),
          borderRadius: props.borderRadius,
          justifyContent: props.verticalAlignment,
          alignItems: props.horizontalAlignment,
          marginBottom: Height(props.marginBottom),
        },
        props.style,
      ]}>
      {props.children}
    </TouchableOpacity>
  );
};

/* ANCHOR  STYLES*/
const styles = StyleSheet.create({
  overflow: {overflow: 'hidden'},
  flex: {flex: 1},
  input: {paddingLeft: 15},
  rounded: {justifyContent: 'center', alignItems: 'center'},
});
