import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View} from 'react-native';
import EmptyData from '../../../components/EmptyData';
import Pagination from '../../../components/Pagination';
import {Screen, ScreenList} from '../../../components/Screens';
import NavToggle from '../../../components/TopNav/NavToggle';
import {colors} from '../../../assets/theme/color';
import {useGetProductsQuery} from '../GeneralSlicer';
import genStyles from '../genStyles';
import SearchView from '../../../components/SearchView';
import ProductItem from './ProductItem';

const Index = ({navigation}: any) => {
  const {navigate} = useNavigation();
  const {currentData, isFetching, refetch} = useGetProductsQuery();
  const [paginationData, setPaginationData] = useState({
    pageNumber: 1,
    pageSize: 10,
    totalPages: 0,
    hasMore: false,
    hasPrev: false,
  });
  const [filterData, setFilterData] = useState({});
  // console.log('>>>>>', isFetching, currentData?.data[0]);

  return (
    <Screen
      isFixed={true}
      backgroundColor={colors.white}
      paddingHorizontal={15}>
      <NavToggle />
      <SearchView
        title="My Products"
        searchPress={() => {}}
        type="default"
        filterData={filterData}
        setFilterData={setFilterData}
      />

      <View style={genStyles.itemList}>
        <ScreenList
          onRefresh={() => {
            refetch();
          }}
          refreshing={isFetching}
          data={currentData?.data}
          ListEmptyComponent={<EmptyData message="No product found" />}
          renderItem={({item}: any) => (
            <ProductItem item={item} disableClick={true} />
          )}
        />
      </View>

      <Pagination
        handlePrevious={() =>
          setPaginationData({
            ...paginationData,
            pageNumber: paginationData.pageNumber - 1,
          })
        }
        handleNext={() =>
          setPaginationData({
            ...paginationData,
            pageNumber: paginationData.pageNumber + 1,
          })
        }
        handleChange={(item: any) =>
          setPaginationData({...paginationData, pageNumber: item})
        }
        hasPrev={paginationData.hasPrev}
        hasNext={paginationData.hasMore}
        pageNumber={paginationData.pageNumber}
        totalPages={paginationData.totalPages}
      />
    </Screen>
  );
};

export default Index;
