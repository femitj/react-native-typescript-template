import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import EmptyData from '../../../components/EmptyData';
import Pagination from '../../../components/Pagination';
import {Screen, ScreenList} from '../../../components/Screens';
import NavToggle from '../../../components/TopNav/NavToggle';
import {colors} from '../../../assets/theme/color';
import genStyles from '../genStyles';
import SearchView from '../../../components/SearchView';
import {useGetSalesOrderItemsQuery} from './SaleSlicer';
import {Avatar, Container} from '../../../components/Wrappers';
import {cartPlaceholderImage} from '../../../assets/images';
import Text from '../../../components/Text';
import {truncateWords} from '../../../utils';
import {currencyFormat} from '../../../utils/currency';

const Index = ({navigation}: any) => {
  const {params} = useRoute<any>();
  const {currentData, isFetching, refetch} = useGetSalesOrderItemsQuery(
    params?.id,
  );

  const [paginationData, setPaginationData] = useState({
    pageNumber: 1,
    pageSize: 10,
    totalPages: 0,
    hasMore: false,
    hasPrev: false,
  });
  const [filterData, setFilterData] = useState({});

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
          onRefresh={() => refetch()}
          refreshing={isFetching}
          data={currentData?.data}
          ListEmptyComponent={<EmptyData message="No product found" />}
          renderItem={({item}: any) => (
            <View style={genStyles.item}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Avatar
                  source={
                    item?.image ? {uri: item?.image} : cartPlaceholderImage
                  }
                  size={16}
                  marginRight={2}
                />
                <View style={{width: '80%'}}>
                  <Container dir="row" horizontalAlignment="space-between">
                    <Text style={genStyles.itemTitle}>{`${
                      item?.product?.name
                    } ${
                      item?.product?.genId ? `(${item?.product?.genId})` : ''
                    }`}</Text>
                    <Text
                      color={colors.mineShaft}
                      fontWeight="bold"
                      fontSize={12}>
                      {currencyFormat(item?.soldPrice)}
                    </Text>
                  </Container>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={genStyles.itemName}>
                      {truncateWords(item?.product?.description, {length: 40})}
                    </Text>
                    <Text
                      color={colors.mineShaft}
                      fontWeight="bold"
                      fontSize={12}>
                      {item.quantity}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
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
