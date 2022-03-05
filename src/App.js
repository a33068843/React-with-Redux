import logo from './logo.svg';
import './App.css';
import store from 'store/index';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import { Home } from 'pages';

function App() {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      {/* <PersistGate loading={<Home />} persistor={persistor}> */}
      <Home />
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
