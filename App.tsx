import React from 'react';
import {SafeAreaView} from 'react-native';
import AddConfirmationScreen from './src/screens/addConfirmationScreen';

const App = () => {
  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: '#ffffff'}} />
      <SafeAreaView style={{flex: 1, backgroundColor: '#fbfbfb'}}>
        <AddConfirmationScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
