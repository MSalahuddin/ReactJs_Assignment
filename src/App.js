import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyRoutes from './routes';
import { Provider } from 'react-redux';
import Store from './redux/store';
 
const store = Store();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MyRoutes />
      </Provider>
    );
  }
}
