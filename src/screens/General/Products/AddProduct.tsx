import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Button from '../../../components/CustomButton';
import CustomInput from '../../../components/Input';
import {SizedBox} from '../../../components/SizedBox';
import TopNav from '../../../components/TopNav';
import {colors} from '../../../assets/theme/color';
import {Screen} from '../../../components/Screens';
import genStyles from '../genStyles';
import useToast from '../../../hooks/useToast';
import {usePostProductsMutation} from '../GeneralSlicer';
import {PRODUCT_SCREEN} from '../../../constants/routeNames';
import Dropdown from '../../../components/Dropdown';
import {useAppSelector} from '../../../hooks';
import HandleError from '../../../utils/errorMsg';

interface AddProductProps {
  navigation: any;
}

const AddProduct = ({navigation}: AddProductProps) => {
  const toast = useToast();
  const [postProducts, {isLoading}] = usePostProductsMutation();
  const {categories} = useAppSelector(state => state.general);
  const [errors, setErrors] = useState({});
  const [data, setData] = useState<any>({
    categoryId: undefined,
    name: undefined,
    description: undefined,
    image: undefined,
    costPrice: undefined,
    quantityInStock: undefined,
    sellingPrice: undefined,
    genId: undefined,
  });

  const handleSubmit = async () => {
    try {
      const res = await postProducts(data).unwrap();
      if (res?.status) {
        toast.show(res.message, {
          placement: 'top',
          duration: 4000,
          animationType: 'slide-in',
          type: 'success',
        });
        resetState();
        navigation.navigate(PRODUCT_SCREEN);
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
      categoryId: undefined,
      name: undefined,
      description: undefined,
      image: undefined,
      costPrice: undefined,
      quantityInStock: undefined,
      sellingPrice: undefined,
      genId: undefined,
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
        <Text style={genStyles.title}>Add Products</Text>

        <SizedBox height={2} />

        <View style={{}}>
          <Dropdown
            label="Select category"
            data={categories}
            dropdownOverlayColor="transparent"
            rowTextForSelection={(item: any) => item?.title}
            buttonTextAfterSelection={(x: any) => x?.title}
            defaultValue={data.categoryId}
            onSelect={(val: any) => {
              setData({
                ...data,
                categoryId: val.id,
              });
            }}
          />
        </View>

        <View style={{}}>
          <CustomInput
            label="Name"
            placeholder="Enter name"
            value={data.name}
            onChangeText={value => {
              onChange({name: 'name', value});
            }}
            error={errors?.name || false}
            message={errors?.name || null}
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
            keyboadType="numeric"
            label="Cost Price"
            placeholder="₦ 0.00"
            value={data.costPrice}
            onChangeText={value => {
              onChange({name: 'costPrice', value});
            }}
            error={errors?.costPrice || false}
            message={errors?.costPrice || null}
          />
        </View>

        <View style={{}}>
          <CustomInput
            keyboadType="numeric"
            label="Selling Price"
            placeholder="₦ 0.00"
            value={data.sellingPrice}
            onChangeText={value => {
              onChange({name: 'sellingPrice', value});
            }}
            error={errors?.sellingPrice || false}
            message={errors?.sellingPrice || null}
          />
        </View>

        <View style={{}}>
          <CustomInput
            keyboadType="numeric"
            label="Quantity in stock"
            placeholder="Enter quantity in stock"
            value={data.quantityInStock}
            onChangeText={value => {
              onChange({name: 'quantityInStock', value});
            }}
            error={errors?.quantityInStock || false}
            message={errors?.quantityInStock || null}
          />
        </View>

        <View style={{}}>
          <CustomInput
            label="Product Code"
            placeholder="Enter product code (leave blank will auto generate)"
            value={data.genId}
            onChangeText={value => {
              onChange({name: 'genId', value});
            }}
            error={errors?.genId || false}
            message={errors?.genId || null}
          />
        </View>

        <View style={{}}>
          <CustomInput
            label="Image"
            placeholder="Enter link to your image"
            value={data.image}
            onChangeText={value => {
              onChange({name: 'image', value});
            }}
            error={errors?.image || false}
            message={errors?.image || null}
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

export default AddProduct;
