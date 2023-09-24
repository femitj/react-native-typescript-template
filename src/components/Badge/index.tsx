import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../assets/theme/color';

const styles = StyleSheet.create({
  IconBadge: {
    position: 'absolute',
    minWidth: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 3,
    height: 15,
    right: -10,
    top: -7,
    backgroundColor: colors.danger,
  },
});

type IconProps = {
  MainElement: any;
  BadgeElement: any;
  MainViewStyle?: {};
  IconBadgeStyle?: {};
  Hidden?: boolean;
};

const IconBadge = ({
  MainViewStyle,
  MainElement,
  Hidden = true,
  IconBadgeStyle,
  BadgeElement,
}: IconProps) => {
  return (
    <View style={[MainViewStyle || {}]}>
      {MainElement}
      {!Hidden && (
        <View style={[styles.IconBadge, IconBadgeStyle || {}]}>
          {BadgeElement}
        </View>
      )}
    </View>
  );
};

export default memo(IconBadge);
