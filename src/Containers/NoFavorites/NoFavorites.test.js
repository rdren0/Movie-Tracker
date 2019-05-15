import React from "react";
import { shallow, configure } from "enzyme";
import {NoFavorites, mapStateToProps, mapDispatchToProps } from "./NoFavorites";
import Adapter from "enzyme-adapter-react-16";


const mockFunc = jest.fn()
describe('NoFavorites', () => {
  beforeEach(() => {
    wrapper = shallow(<NoFavorites showPopup={mockFunc}/>)
  })

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
})