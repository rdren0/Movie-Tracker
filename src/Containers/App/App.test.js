import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { shallow, configure } from 'enzyme';
import configureStore from 'redux-mock-store'
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const middlewares = []
const mockStore = configureStore(middlewares)
let wrapper;

describe('App', () =>{

  it('renders without crashing', () => {

    const initialState = { 
    movies: [],
    page: 1,
    user: {},
    isLoggedIn: false,
    category: '', }
    const store = mockStore(initialState)

    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>, div);
  });

  it('should call a fetchCall on componentDidMount', () => {
    wrapper.instance().componentDidMount(mockEvent);

  })


})
