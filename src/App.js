import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import AppLayout from './AppLayout';
// Utils
import {store, persistor} from './store';

//Components
import Loading from './components/sections/Loading';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <AppLayout store={store} />
      </PersistGate>
    </Provider>
  );
};

export default App;
