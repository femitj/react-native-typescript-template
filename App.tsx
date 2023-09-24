import 'react-native-gesture-handler';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import store, {persistor} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import RootNavigation from './src/navigations';
import {ToastProvider} from 'react-native-toast-notifications';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <ToastProvider offsetTop={60}>
            <RootNavigation />
          </ToastProvider>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
