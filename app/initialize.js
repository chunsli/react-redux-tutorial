import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import reducers from './reducers/';
import TodoApp from './components/';

const store = createStore(reducers, module.hot && module.hot.data && module.hot.data.counter);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    store.replaceReducer(require('./reducers/').default);
  });
  module.hot.accept();

  module.hot.dispose((data) => {
    data.counter = store.getState();
    [].slice.apply(document.querySelector('#app').children).forEach(function(c) { c.remove() });
  });
}

const load = () => {
  ReactDOM.render(
    <TodoApp
      store={store}
      {...store.getState()}
    />,
    document.getElementById('root')
  );
};

if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load);
  store.subscribe(load)
} else {
  load();
  store.subscribe(load)
}