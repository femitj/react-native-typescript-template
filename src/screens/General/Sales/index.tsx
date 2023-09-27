import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import EmptyData from '../../../components/EmptyData';
import Pagination from '../../../components/Pagination';
import {formatDate, truncateWords} from '../../../utils';
import {Screen, ScreenList} from '../../../components/Screens';
import NavToggle from '../../../components/TopNav/NavToggle';
import {colors} from '../../../assets/theme/color';
import genStyles from '../genStyles';
import {useGetSalesOrderQuery} from './SaleSlicer';

const Index = ({navigation}: any) => {
  const {currentData, isFetching, refetch} = useGetSalesOrderQuery();
  const [paginationData, setPaginationData] = useState({
    pageNumber: 1,
    pageSize: 10,
    totalPages: 0,
    hasMore: false,
    hasPrev: false,
  });

  // console.log('>>>>>', isFetching, currentData?.data);

  return (
    <Screen
      isFixed={true}
      backgroundColor={colors.white}
      paddingHorizontal={20}>
      <NavToggle />
      {/* <SearchView
        title="My Distributors"
        noFilter
        searchPress={() => handleGetMyDistributors()}
        type="distributor"
        filterData={filterData}
        setFilterData={setFilterData}
      /> */}

      <View style={genStyles.itemList}>
        <ScreenList
          onRefresh={() => {
            refetch();
          }}
          refreshing={isFetching}
          data={currentData?.data}
          ListEmptyComponent={<EmptyData message="No category found" />}
          renderItem={({item}: any) => (
            <TouchableOpacity onPress={() => {}}>
              <View style={genStyles.item}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View>
                    <Text style={genStyles.itemTitle}>{`${
                      item?.orderNumber || ''
                    }`}</Text>
                    <Text style={genStyles.itemName}>
                      {truncateWords(item?.paymentMethod, {length: 40})}
                    </Text>
                    <Text style={genStyles.itemName}>
                      {formatDate(item?.createdAt, 'ddd, MMM DD, hh:mm A') ||
                        ''}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
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
