import React from 'react'
import { shallow, configure } from 'enzyme';
import  Filter  from './Filter'
import Adapter from 'enzyme-adapter-react-16';

describe('Filter', () => {
  let wrapper;
  const mockFunction = jest.fn()
  beforeEach(() =>{
     wrapper = shallow(<Filter
      browseAll={mockFunction}
      searchMovies={mockFunction}
      />)
  })

  it('should match the snapshot', () =>{
    expect(wrapper).toMatchSnapshot()
  })

  it('should call searchMovies when search is submitted', () => {
    let mockEvent = {target:{innerText:'people'},
                      preventDefault: jest.fn()}
    wrapper.instance().handleSubmit(mockEvent);
    expect(searchMovies).toHaveBeenCalled()
  })
  
 
})



