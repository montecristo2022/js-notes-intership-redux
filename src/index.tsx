import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Добавляем импорт Provider
import { store } from './redux/store'; // Предполагается, что ваше хранилище находится в файле store.js
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Оборачиваем App с помощью Provider и передаем ему ваше хранилище */}
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
