import React from 'react'
import { shallow, configure } from 'enzyme';
import  Filter  from './Filter'
import Adapter from 'enzyme-adapter-react-16';

describe('Filter', () => {
  let wrapper;
  let mockFunction = jest.fn()
  beforeEach(() =>{
     wrapper = shallow(<Filter
      browseAll={mockFunction}
      searchMovies={mockFunction}
      />)
  })

  it('should match the snapshot', () =>{
    expect(wrapper).toMatchSnapshot()
  })

  it('should have the proper default state', () =>{
    expect(wrapper.state()).toEqual({ searchWord: '' })
  })

  it('should update state when typing', () => {
    expect(wrapper.state().searchWord).toEqual('');
    let mockEvent = {target:{value:'test'}}
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state().searchWord).toEqual('test');
  })

  it('should clear inputs', () => {
    expect(wrapper.state().searchWord).toEqual('');
    let mockEvent = {target:{value:'test'}}
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state().searchWord).toEqual('test');
    wrapper.instance().handleClear();
    expect(wrapper.state().searchWord).toEqual('');
  })

  it.skip('should call searchMovies when search is submitted', () => {
    let mockEvent = 
      {target:{innerText:'value'},
       preventDefault: jest.fn()}
    wrapper.find('form').simulate('submit', mockEvent)
    expect(wrapper.searchMovies).toHaveBeenCalledWith((wrapper.state()))
  })


})



