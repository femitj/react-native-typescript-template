import {Pressable, View} from 'react-native';
import React, {useState} from 'react';
import {Screen} from '../../../components/Screens';
import {authHomeBg} from '../../../assets/images';
import {Container, ImageWrap} from '../../../components/Wrappers';
import {Text} from 'react-native-paper';
import Icon from '../../../components/Icon';
import styles from './style';
import CustomText from '../../../components/Text';
import CustomInput from '../../../components/Input';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FORGOT_PASSWORD} from '../../../constants/routeNames';
import FingerPrint from '../../../assets/svgs/fingerPrint';
import Capture from '../../../assets/svgs/capture';
import {useAppDispatch} from '../../../hooks';
import {setAuthData, setFirstLogin, setToken} from '../AuthSlicer/authSlice';
import {colors} from '../../../assets/theme/color';
import {SizedBox} from '../../../components/SizedBox';
import CustomButton from '../../../components/Button';
import {useSignInUserMutation} from '../AuthSlicer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Index = ({navigation}: any) => {
  const [signInUser, {isLoading}] = useSignInUserMutation();
  const dispatch = useAppDispatch();
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const onChange = ({name, value}: any) => {
    setData({...data, [name]: value});
  };

  const canSubmit = [data.email, data.password].every((e: any) => Boolean(e));

  const handleSubmit = async () => {
    try {
      const res = await signInUser(data).unwrap();
      // console.log('>>>>>>', res);
      if (res.status) {
        // setData({email: '', password: ''});
        AsyncStorage.setItem('token', res?.data?.token);
        dispatch(setToken(res?.data?.token));
        dispatch(
          setFirstLogin(res?.data?.lastLoggedIn === null ? true : false),
        );
        dispatch(
          setAuthData({
            ...res?.data?.user,
            ...res?.data?.companies,
            ...res?.data?.privileges,
          }),
        );
      }
    } catch (err) {}
  };

  return (
    <Screen isFixed={true} background={colors.white} style={styles.container}>
      <ImageWrap source={authHomeBg} height={100} overlayColor={colors.overlay}>
        <View style={styles.wrapper}>
          {/* <Image source={logo} style={styles.image} /> */}

          <Container horizontalAlignment="center" dir="row">
            <View
              style={{
                borderColor: colors.chardonnay,
                borderWidth: 2,
                // width: WP(40),
                padding: 10,
                borderRadius: 20,
                justifyContent: 'center',
              }}>
              {/* <Image
                source={avatar}
                style={{
                  width: 65,
                  height: 65,
                  borderRadius: 20,
                  borderColor: colors.white,
                  borderWidth: 2,
                }}
                resizeMode="cover"
              /> */}
            </View>
          </Container>

          <SizedBox height={5} />

          <CustomText
            textAlign="center"
            fontSize={30}
            children="Welcome Back"
            lineHeight={30}
          />

          <SizedBox height={5} />

          <CustomText textAlign="center" variant="titleMedium">
            Login with
          </CustomText>

          <SizedBox height={5} />

          <CustomInput
            placeholder="Email Address"
            inputStyle={{
              backgroundColor: colors.white,
              borderWidth: 1,
              borderColor: '#EB9481',
            }}
            onChangeText={(value: any) =>
              onChange({name: 'email', value: value.toLowerCase()})
            }
          />

          <View>
            <CustomInput
              placeholder="Password"
              secureTextEntry={!showPassword}
              icon={
                <Pressable onPress={() => setShowPassword(!showPassword)}>
                  <Icon
                    name={showPassword ? 'eye-with-line' : 'eye'}
                    type="entypo"
                    size={20}
                    color={colors.grey}
                  />
                </Pressable>
              }
              inputStyle={{
                backgroundColor: colors.white,
              }}
              iconPosition="right"
              onChangeText={(value: any) => onChange({name: 'password', value})}
            />
          </View>

          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate(FORGOT_PASSWORD)}>
              <Text style={styles.forget}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <CustomButton
            mode="contained"
            buttonColor="rgba(235, 148, 129, 0.25)"
            style={{width: '100%', paddingVertical: 8}}
            onPress={handleSubmit}
            // disabled={!canSubmit}
            loading={isLoading}>
            Log In
          </CustomButton>

          <SizedBox height={5} />

          <CustomText textAlign="center" fontSize={15}>
            Or
          </CustomText>

          <SizedBox height={4} />

          <Container dir="row" horizontalAlignment="center">
            <FingerPrint />
            <Capture style={{marginLeft: 20}} />
          </Container>
        </View>
      </ImageWrap>
    </Screen>
  );
};

export default Index;
