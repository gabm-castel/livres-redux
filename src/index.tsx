import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { Store, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './redux/reducer/reducer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store :Store<BookState, BookAction> & { dispatch: DispatchType } = createStore(
  reducer,
  applyMiddleware(thunk)
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

