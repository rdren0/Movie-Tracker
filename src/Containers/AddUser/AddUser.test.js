import React from 'react'
import { shallow } from 'enzyme';
import { AddUser } from './AddUser'


describe('AddUser', () => {

  it.skip('should match the snapshot', () =>{
    const wrapper = shallow(<AddUser/>)
    expect(wrapper).toMatchSnapshot()
  })

})

