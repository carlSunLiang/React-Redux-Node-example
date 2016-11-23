import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';
import { fromJS } from 'immutable';
import routes from '../common/routes';
import configureStore from '../common/store/configureStore';
import { checkAuth } from '../common/actions';

//将server side传过来的initialState
const initialState = window.__PRELOADED_STATE__;
//通过configureStore把initialState生产store并传给Provider

const store = configureStore(fromJS(initialState));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}>
    </Router>
  </Provider>,
  document.getElementById('app')
) 