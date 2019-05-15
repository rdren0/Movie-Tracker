import React, { Component } from "react";
import { Header, mapStateToProps, mapDispatchToProps } from "./Header.js";
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("Header", () => {
  let mockStore = {};
  let wrapper;
  let mockFn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Header addCurrentUser={mockFn} />);
  });
  it("should match snapshot with all correct data passed through", () => {
    wrapper = shallow(<Header isLoggedIn={false} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot with all correct data passed through", () => {
    wrapper = shallow(<Header isLoggedIn={true} />);
    expect(wrapper).toMatchSnapshot();
  });

  it.skip("should call handleLogout when log out button is clicked", () => {
    wrapper.instance().handleLogout();
    expect(wrapper.isLoggedIn).toHaveBeenCalledWith(false);
    expect(wrapper.addCurrentUser).toHaveBeenCalledWith({});
  });

  describe("mapStateToProps", () => {
    it("should return an object with movies, shows, user, and message", () => {
      let mockStateResult = { isLoggedIn: false };
      let mockState = {
        isLoggedIn: false
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(mockStateResult);
    });
  });

  describe("mapDispatchToProps", () => {
    it("should pass correct type when addCurrentUser is called", () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).addCurrentUser();
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
