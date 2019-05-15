import React from "react";
import { App, mapStateToProps, mapDispatchToProps } from "./App";
import { shallow } from "enzyme";
import { fetchCall } from "../../APICalls/APICalls";

describe("App", () => {
  let wrapper;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    wrapper = shallow(<App addMovies={mockFn} fetchCall={mockFn} />);

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve("success")
      })
    );
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call fetchCallFun on mount", () => {
    jest.spyOn(wrapper.instance(), "fetchCallFun");
    wrapper.instance().componentDidMount();
    expect(wrapper.instance().fetchCallFun).toHaveBeenCalled();
  });

  it.skip("should call fetchCall in fetchCallFun", () => {
    wrapper.instance().fetchCallFun();
    expect(fetchCall).toHaveBeenCalled();
  });

  describe("mapStateToProps", () => {
    it("should return an object with movies, page,user,isLoggedIn, and category", () => {
      const movies = [];
      const page = 0;
      const user = undefined;
      const isLoggedIn = false;
      const category = "";
      const mockGlobalState = {
        movies,
        page,
        user,
        isLoggedIn,
        category
      };

      const mapProps = mapStateToProps(mockGlobalState);
      expect(mapProps).toEqual({
        category: "",
        isLoggedIn: false,
        movies: [],
        page: 0,
        user: undefined
      });
    });
  });

  describe("mapDispatchToProps", () => {
    it("should pass correct type when addMovies is called", () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).addMovies();
      expect(dispatch.mock.calls[0][0]).toEqual({
        favorited: false,
        movies: undefined,
        type: "ADD_MOVIES"
      });
    });

    it("should pass correct type when changeCategory is called", () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).changeCategory();
      expect(dispatch.mock.calls[0][0]).toEqual({
        category: undefined,
        type: "CHANGE_CATEGORY"
      });
    });
  });
});
