import {Login}  from './Login.js'
import { shallow, mount } from 'enzyme';
import React from 'react';

window.alert = jest.fn();
let wrapper;
let mockFunction = jest.fn()
let fetchUserData = jest.fn()

describe('Login', () => {

  beforeEach(() => {
    wrapper = shallow(<Login />)
    fetch = fetchUserData.mockImplementation(() => Promise.resolve({ok: true, status: 200,
      json: () => Promise.resolve(mockData),
    }));
  })

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should have a defualt state', () => {
    let expectedState = {email: '', password: '', status: ''}
    expect(wrapper.state()).toEqual(expectedState)
  })

  it('should update state when typing', () => {
    expect(wrapper.state().email).toEqual('');
    let mockEvent = {target:{value:'123@email.com', type: 'email'}}
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state().email).toEqual('123@email.com');
  })

  it('Should fetch post user data to server when logging in', () => {
    let url ="http://localhost:3000/api/users";
    let mockEvent = {preventDefault: jest.fn()}
    wrapper.instance().handleSubmit(mockEvent);
    expect(fetch).toBeCalledWith(url,{"body": "{\"email\":\"\",\"password\":\"\",\"status\":\"\"}", "headers": {"Content-Type": "application/json"}, "method": "POST"})
  })

  it.skip('Should fetch users favorites', () => {
    let id = 1
    let url = 'http://localhost:3000/api/users/1/favorites';
    wrapper.instance().getFavoriteMovies(id)
    expect(fetch).toHaveBeenCalledWith(url) 
  })
})