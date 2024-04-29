import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

describe("Header", () => {
  it("render without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("should render a h1", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists("img")).toEqual(true);
    expect(wrapper.containsMatchingElement(<h1>School dashboard</h1>)).toEqual(true);
  });
  it("renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("does not render logoutSection with default context value", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("#logoutSection").exists()).toEqual(false);
  });

  it("renders logoutSection with user context value isLoggedIn true", () => {
    const contextValue = {
      user: {
        email: "test@example.com",
        isLoggedIn: true
      }
    };
    const wrapper = shallow(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find("#logoutSection").exists()).toEqual(true);
  });

  it("calls logOut when logout link is clicked", () => {
    const logOutMock = jest.fn();
    const contextValue = {
      user: {
        email: "test@example.com",
        isLoggedIn: true
      },
      logOut: logOutMock
    };
    const wrapper = shallow(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );

    wrapper.find("a").simulate("click");
    expect(logOutMock).toHaveBeenCalled();
  });
});