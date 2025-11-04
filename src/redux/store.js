import { createStore } from 'redux';
import taskReducer from './reducer';

export const store = createStore(
  taskReducer,
  // Habilita Redux DevTools si está disponible
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
