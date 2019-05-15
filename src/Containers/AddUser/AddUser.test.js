import React from "react";
import { shallow } from "enzyme";
import { AddUser } from "./AddUser";

describe("AddUser", () => {
  let wrapper;
  let mockData = [1, 2, 3];
  let mockFunction = jest.fn();
  let fetchUserData = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<AddUser />);

    fetch = jest
      .fn()
      .mockImplementation(() =>
        Promise.resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve(mockData)
        })
      );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have default states", () => {
    expect(wrapper.state()).toEqual({
      email: "",
      password: "",
      name: "",
      status: ""
    });
  });

  it("should update state when typing", () => {
    expect(wrapper.state().email).toEqual("");
    let mockEvent = { target: { value: "123@email.com", name: "email" } };
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state().email).toEqual("123@email.com");
  });

  it("fetch post new user data to server", () => {
    let url = "http://localhost:3000/api/users/new";
    let mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().handleAddUser(mockEvent);
    expect(fetch).toBeCalledWith(url, {
      body: '{"email":"","password":"","name":"","status":""}',
      headers: { "Content-Type": "application/json" },
      method: "POST"
    });
  });
});
