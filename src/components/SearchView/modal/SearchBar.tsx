import {View, StyleSheet} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import Button from '../../CustomButton';
import Icon from '../../Icon';
import CustomInput from '../../Input';
import {SizedBox} from '../../SizedBox';
import CustomDatePicker from '../../DatePicker';
import {colors} from '../../../assets/theme/color';

const SearchBar = ({
  visible,
  setVisible,
  searchPress,
  noFilter,
  setData,
  data,
}: any) => {
  const toggleModal = () => {
    setVisible(!visible);
  };

  const validate = () => {
    if (!data?.query && !data?.dateStart && !data?.orderNumber) {
      return true;
    }
    return false;
  };

  return (
    <View style={styles.container}>
      <Modal
        style={styles.bottomModalView}
        isVisible={visible}
        backdropOpacity={0.1}
        onBackdropPress={toggleModal}
        useNativeDriverForBackdrop>
        <View style={styles.modal}>
          <View style={styles.closeBar}>
            <Icon
              type="fa"
              name="angle-left"
              style={styles.back}
              size={25}
              onPress={toggleModal}
            />
          </View>
          <View>
            <View style={styles.searchField}>
              <CustomInput
                icon={
                  <Icon
                    type="feather"
                    name="search"
                    style={styles.sfIcon}
                    size={25}
                  />
                }
                iconPosition="left"
                inputStyle={styles.searchWrap}
                placeholder="Search for anything"
                placeholderTextColor={colors.alto}
                onChangeText={value => setData({...data, query: value})}
              />
            </View>
            {!noFilter && (
              <>
                <View style={styles.input}>
                  <CustomDatePicker
                    label="From"
                    handleSetDate={value =>
                      setData({...data, dateStart: value})
                    }
                  />
                </View>
                <SizedBox height={20} />
                <View style={styles.input}>
                  <CustomDatePicker
                    label="To"
                    handleSetDate={value => setData({...data, dateEnd: value})}
                  />
                </View>

                {/* <SizedBox height={10} /> */}

                {/* <View style={styles.input}>
                  <CustomInput
                    label="Order Number"
                    placeholder="Select"
                    value={data?.orderNumber}
                    onChangeText={value =>
                      setData({...data, orderNumber: value})
                    }
                  />
                </View> */}

                <SizedBox height={5} />
              </>
            )}

            <View style={styles.searchBtn}>
              <Button
                content="Search"
                backgroundColor={validate() ? '#B9C2CB' : colors.primary}
                disabled={validate()}
                color="#fff"
                onPress={() => {
                  searchPress();
                  toggleModal();
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomModalView: {
    justifyContent: 'flex-end',
    margin: 0,
    marginTop: 100,
  },
  modal: {
    backgroundColor: colors?.white,
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 22,
    boxShadow: '0px -4px 40px rgba(0, 0, 0, 0.08)',
    borderRadius: 10,
  },
  searchField: {
    marginBottom: 15,
  },
  searchWrap: {
    borderWidth: 0,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F3F3',
    fontSize: 14,
  },
  sfIcon: {
    color: colors.alto,
    marginRight: 15,
  },
  searchBtn: {
    marginTop: 30,
  },
  filterHead: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 19,
    color: colors.mineShaft,
    paddingVertical: 16,
  },
  filterTitle: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 28,
    color: '#675CE8',
    paddingVertical: 8,
  },
  filterItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    // paddingRight: 30,
  },
  filText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: 'rgba(55, 55, 55, 0.7)',
  },
  filCheck: {},
  selectedFilters: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  sFil: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 4,
    padding: 4,
    marginRight: 8,
  },
  sFilText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: colors.mineShaft,
    marginRight: 9,
  },
});
