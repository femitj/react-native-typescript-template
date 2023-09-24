import {useToast as uT} from 'react-native-toast-notifications';

const useToast = () => {
  const toast = uT();

  return toast;
};

export default useToast;
