import React, { Component } from 'react';
import { Header } from './Header.js';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


let mockStore = {}
describe('Header', () => {
  it('should match snapshot with all correct data passed through', () => {
    const wrapper = shallow(
      <Header/>)
    expect(wrapper).toMatchSnapshot();
  })
})