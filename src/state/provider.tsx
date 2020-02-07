import * as React from 'react';
import { Provider as ReactReduxProvider } from 'react-redux';
import store from './store';

const Provider = ({ element }) => {
  return (
    <ReactReduxProvider store={store}>
      {element}
    </ReactReduxProvider>
  );
};

export default Provider;

