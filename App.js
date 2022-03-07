import React from 'react';
import { Provider } from 'react-redux'

import store from './src/redux/store';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Settings } from './src/Run';


const queryClient = new QueryClient()
const App = () => {



  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Settings />
      </QueryClientProvider>
    </Provider>
  );
};


export default App;
