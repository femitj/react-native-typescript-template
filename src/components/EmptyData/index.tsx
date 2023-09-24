import React from 'react';
import {Text, View} from 'react-native';

const EmptyData = ({message, loading}: any) => {
  return (
    <>
      <View style={{flex: 1, alignItems: 'center', marginTop: 10}}>
        <Text>{loading ? 'loading' : message}</Text>
      </View>
    </>
  );
};

export default EmptyData;
