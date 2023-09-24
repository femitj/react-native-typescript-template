import React from 'react';
import {Pressable, Text, View} from 'react-native';
import DropdownComponent from '../Dropdown/input';
import Icon from '../Icon';
import {colors} from '../../assets/theme/color';
import {HDP} from '../../utils/devicesize';
import {getDropdownOptions} from '../../utils';

interface PaginationProps {
  handleNext: () => void;
  handlePrevious: () => void;
  handleChange: (x: any) => void;
  hasNext: boolean;
  hasPrev: boolean;
  pageNumber: number;
  totalPages: number;
}

const Pagination = ({
  handleNext,
  handlePrevious,
  handleChange,
  hasNext,
  hasPrev,
  pageNumber,
  totalPages,
}: PaginationProps) => {
  const getColor = (type: string) => {
    if (type === 'next') {
      if (hasNext) {
        return colors.primary;
      } else {
        return colors.grey;
      }
    } else {
      if (hasPrev) {
        return colors.primary;
      } else {
        return colors.grey;
      }
    }
  };

  return (
    <View
      style={{
        marginTop: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: HDP(20),
      }}>
      <Pressable
        onPress={handlePrevious}
        disabled={hasPrev ? false : true}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <Icon type="fa" name="angle-left" size={23} color={getColor('prev')} />
        <Text
          style={{
            fontSize: 14,
            letterSpacing: 0.5,
            paddingLeft: 5,
            color: getColor('prev'),
            fontWeight: '500',
          }}>
          Previous Page
        </Text>
      </Pressable>
      {/* <Pressable
        onPress={() => {}}
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          width: 60,
          height: 40,
          alignItems: 'center',
          justifyContent: 'space-between',
          borderWidth: 1,
          borderColor: colors.primary,
          borderRadius: 4,
          paddingHorizontal: 10,
        }}
      >
        <Text style={{ color: colors.dark }}>{pageNumber}</Text>
        <Icon type='fa' name='angle-down' size={23} color={colors.alto} />
      </Pressable> */}

      <DropdownComponent
        options={getDropdownOptions(totalPages)}
        resize={true}
        width={90}
        value={pageNumber}
        setValue={handleChange}
      />

      <Pressable
        disabled={hasNext ? false : true}
        onPress={handleNext}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <Text
          style={{
            color: getColor('next'),
            paddingRight: 5,
            fontSize: 14,
            letterSpacing: 0.5,
            fontWeight: '500',
          }}>
          {'   '}Next Page
        </Text>
        <Icon type="fa" name="angle-right" size={23} color={getColor('next')} />
      </Pressable>
    </View>
  );
};

export default Pagination;
