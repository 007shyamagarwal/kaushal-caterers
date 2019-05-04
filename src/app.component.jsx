import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from './components/Layout';
import store from './utils/store';

export default () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <BrowserRouter>
          <React.Fragment>
            <Switch>
              <Layout />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </React.Fragment>
    </Provider>
  );
};
