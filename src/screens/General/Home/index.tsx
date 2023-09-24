import React from 'react';
import {Screen} from '../../../components/Screens';
import {View} from 'react-native';
import Text from '../../../components/Text';
import {useGetCategoriesQuery} from '../GeneralSlicer';

const Index = () => {
  useGetCategoriesQuery();

  return (
    <Screen>
      <View>
        <Text>Hello</Text>
      </View>
    </Screen>
  );
};

export default Index;
