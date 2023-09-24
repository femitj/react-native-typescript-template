import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from '../Icon';
import BellIcon from '../../assets/svgs/bellIcon';
import {NOTIFICATIONS} from '../../constants/routeNames';

interface TopNavProps {
  navigation: any;
  fromLocation?: string;
  noIcon?: boolean;
  isNotAuto?: boolean;
  handleGoBack?: any;
}

const TopNav = ({
  navigation,
  fromLocation,
  noIcon,
  isNotAuto,
  handleGoBack,
}: TopNavProps) => {
  const {navigate} = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
      }}>
      <TouchableOpacity
        style={{paddingRight: 35}}
        onPress={() => {
          if (isNotAuto) {
            if (fromLocation) {
              // return navigate(fromLocation);
            } else {
              handleGoBack();
            }
          } else {
            navigation.goBack();
          }
        }}>
        <Icon type="fa" name="angle-left" size={25} />
      </TouchableOpacity>
      {!noIcon ? (
        <TouchableOpacity onPress={() => {}}>
          <BellIcon />
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
};

export default TopNav;
