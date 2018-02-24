import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import FIREBASE_API_KEY from './secrets';
// import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: FIREBASE_API_KEY,
      authDomain: 'manager-f5fad.firebaseapp.com',
      databaseURL: 'https://manager-f5fad.firebaseio.com',
      projectId: 'manager-f5fad',
      storageBucket: '',
      messagingSenderId: '175690471406'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
