import React from 'react'
import { shallow, configure } from 'enzyme';
import  Filter  from './Filter'
import Adapter from 'enzyme-adapter-react-16';


describe('Filter', () => {
  it('should match the snapshot', () =>{
    const wrapper = shallow(<Filter/>)
    expect(wrapper).toMatchSnapshot()
  })
 
})



