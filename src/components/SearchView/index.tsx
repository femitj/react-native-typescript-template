import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Icon from '../Icon';
import SearchBar from './modal/SearchBar';

const SearchView = ({
  title,
  searchPress,
  style,
  noFilter = true,
  filterData,
  setFilterData,
  type = 'default',
}: any) => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      <View style={[styles.title, style]}>
        <Text style={styles.tLeft}>{title || 'Title'}</Text>
        <Icon
          style={styles.tRight}
          type="feather"
          name="search"
          size={25}
          onPress={() => setShowSearch(true)}
        />
      </View>
      {showSearch && type === 'default' && (
        <SearchBar
          setVisible={setShowSearch}
          visible={showSearch}
          searchPress={searchPress}
          noFilter={noFilter}
          data={filterData}
          setData={setFilterData}
        />
      )}
    </>
  );
};

export default SearchView;

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 25,
  },
  tLeft: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.0333333,
    color: '#18191F',
  },
  tRight: {
    color: '#130F26',
  },
});
