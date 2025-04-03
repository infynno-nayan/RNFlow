import React from 'react';
import Routes from './src/routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SafeAreaView, StatusBar} from 'react-native';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView />
      <StatusBar barStyle={'dark-content'} />
      <Routes />
    </SafeAreaProvider>
  );
};

export default App;
