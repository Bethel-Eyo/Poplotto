import React from 'react';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/store';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
        animated
      />
      <Navigation />
    </Provider>
  );
};

export default App;
