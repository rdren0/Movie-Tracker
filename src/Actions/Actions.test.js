import * as actions from "./index.js";

describe("Actions", () => {
  it("Should create the action addMovies", () => {
    const movies = { id: 12345, title: "Shawshank Redemption" };
    const expectedAction = {
      type: "ADD_MOVIES",
      favorited: false,
      movies
    };
    expect(actions.addMovies(movies)).toEqual(expectedAction);
  });

  it("Should create the action userLogin", () => {
    const user = { id: 1, name: "bob" };
    const expectedAction = {
      type: "USER_LOGIN",
      user
    };
    expect(actions.userLogin(user)).toEqual(expectedAction);
  });

  it("Should create the action addUser", () => {
    const user = { id: 3, name: "bob" };
    const expectedAction = {
      type: "ADD_USER",
      user
    };
    expect(actions.addUser(user)).toEqual(expectedAction);
  });

  it("Should create the action nextPage", () => {
    const value = 3;
    const expectedAction = {
      type: "NEXT_PAGE",
      value
    };
    expect(actions.nextPage(value)).toEqual(expectedAction);
  });

  it("Should create the action previousPage", () => {
    const value = 3;
    const expectedAction = {
      type: "PREVIOUS_PAGE",
      value
    };
    expect(actions.previousPage(value)).toEqual(expectedAction);
  });

  it("Should create the action setFavorites", () => {
    const favorites = ["movie", "another movie"];
    const expectedAction = {
      type: "SET_FAVORITES",
      favorited: false,
      favorites
    };
    expect(actions.setFavorites(favorites)).toEqual(expectedAction);
  });

  it("Should create the action isLoggedIn", () => {
    const bool = true;
    const expectedAction = {
      type: "IS_LOGGED_IN",
      isLoggedIn: true
    };
    expect(actions.isLoggedIn(bool)).toEqual(expectedAction);
  });

  it("Should create the action changeCategory", () => {
    const category = "action";
    const expectedAction = {
      type: "CHANGE_CATEGORY",
      category
    };
    expect(actions.changeCategory(category)).toEqual(expectedAction);
  });
});
