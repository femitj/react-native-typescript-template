import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Button from '../../../components/CustomButton';
import CustomInput from '../../../components/Input';
import {SizedBox} from '../../../components/SizedBox';
import TopNav from '../../../components/TopNav';
import {colors} from '../../../assets/theme/color';
import {Screen} from '../../../components/Screens';
import {ICategory} from '../../../models/main.model';
import genStyles from '../genStyles';
import useToast from '../../../hooks/useToast';
import {usePostCategoriesMutation} from '../GeneralSlicer';
import {CATEGORY_SCREEN} from '../../../constants/routeNames';
import HandleError from '../../../utils/errorMsg';

interface AddCategoryProps {
  navigation: any;
}

const AddCategory = ({navigation}: AddCategoryProps) => {
  const toast = useToast();
  const [postCategories, {isLoading}] = usePostCategoriesMutation();
  const [errors, setErrors] = useState({});
  const [data, setData] = useState<ICategory>({
    title: '',
    description: '',
    code: '',
  });

  const handleSubmit = async () => {
    try {
      const res = await postCategories(data).unwrap();
      if (res?.status) {
        toast.show(res.message, {
          placement: 'top',
          duration: 4000,
          animationType: 'slide-in',
          type: 'success',
        });
        resetState();
        navigation.navigate(CATEGORY_SCREEN);
      }
    } catch (error: any) {
      const err = HandleError(error);
      toast.show(err, {
        placement: 'top',
        duration: 4000,
        animationType: 'slide-in',
        type: 'danger',
      });
    }
  };

  const onChange = ({name, value}: any) => {
    setData({...data, [name]: value});
  };

  const resetState = () => {
    setData({
      title: '',
      description: '',
    });
    setErrors({});
  };

  return (
    <Screen
      isFixed={false}
      backgroundColor={colors.white}
      paddingHorizontal={20}>
      <View>
        <TopNav navigation={navigation} />

        <SizedBox height={2} />
        <Text style={genStyles.title}>Add Category</Text>

        <SizedBox height={2} />

        <View style={{}}>
          <CustomInput
            label="Title"
            placeholder="Enter title"
            value={data.title}
            onChangeText={value => {
              onChange({name: 'title', value});
            }}
            error={errors?.title || false}
            message={errors?.title || null}
          />
        </View>

        <View style={{}}>
          <CustomInput
            label="Description"
            value={data.description}
            onChangeText={value => {
              onChange({name: 'description', value});
            }}
            error={errors?.description || false}
            message={errors?.description || null}
          />
        </View>

        <View style={{}}>
          <CustomInput
            label="Code"
            value={data.code}
            onChangeText={value => {
              onChange({name: 'code', value});
            }}
            error={errors?.code || false}
            message={errors?.code || null}
          />
        </View>

        <SizedBox height={4} />

        <View style={{}}>
          <Button
            content="Done"
            backgroundColor={colors.mako}
            color={colors.white}
            loading={isLoading}
            disabled={isLoading}
            onPress={handleSubmit}
          />
        </View>
      </View>
    </Screen>
  );
};

export default AddCategory;
