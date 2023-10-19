import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Routeur from './routerWrapper';
import store from './redux/setup/store';
import 'moment/locale/fr';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Routeur />
      </Provider>
    </div>
  );
}

export default App;
