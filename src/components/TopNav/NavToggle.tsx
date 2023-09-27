import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from '../Icon';
import IconBadge from '../Badge';
import BellIcon from '../../assets/svgs/bellIcon';
import {colors} from '../../assets/theme/color';
import {BroadcastIcon} from '../../assets/svgs';
import {BROADCAST_MESSAGES, NOTIFICATIONS} from '../../constants/routeNames';

type NavToggleProps = {
  showIcon?: boolean;
};

const NavToggle = ({showIcon = true}: NavToggleProps) => {
  const {toggleDrawer, navigate} = useNavigation<any>();
  const notificationCount = 0;
  const broadcastCount = 0;

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
      }}>
      <TouchableOpacity
        onPress={() => {
          toggleDrawer();
        }}>
        <Icon type="entypo" size={30} name="menu" />
      </TouchableOpacity>

      {showIcon && (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              marginRight: 10,
              paddingLeft: 10,
              paddingTop: 10,
              paddingRight: 10,
            }}>
            <IconBadge
              MainElement={<BroadcastIcon />}
              BadgeElement={
                <Text style={{color: colors.white, fontSize: 9}}>
                  {broadcastCount}
                </Text>
              }
              Hidden={!broadcastCount}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              // backgroundColor: 'green',
              paddingTop: 10,
              paddingRight: 10,
            }}>
            <IconBadge
              MainElement={<BellIcon size={24} />}
              BadgeElement={
                <Text style={{color: colors.white, fontSize: 9}}>
                  {notificationCount}
                </Text>
              }
              Hidden={!notificationCount}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default NavToggle;
