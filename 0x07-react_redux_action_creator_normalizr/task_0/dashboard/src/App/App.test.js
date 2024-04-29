import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { shallow } from "enzyme";

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });

  it("should render Notifications component", () => {
    const component = shallow(<App />);

    expect(component.containsMatchingElement(<Notifications />)).toEqual(true);
  });

  it("should render Header component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Header />)).toBe(true);
  });

  it("should render Login Component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Login />)).toBe(true); // Changed to true to match the expected behavior
  });

  it("should render Footer component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Footer />)).toBe(true);
  });

  it("does not render courselist if logged out", () => {
    const component = shallow(<App />);

    component.setProps({ isLoggedIn: false }); // Changed 'isLogedIn' to 'isLoggedIn'

    expect(component.contains(<CourseList />)).toBe(false);
  });

  it("renders courselist if logged in", () => {
    const component = shallow(<App isLoggedIn={true} />);

    expect(component.containsMatchingElement(<CourseList />)).toEqual(true); // Changed to true to match the expected behavior
    expect(component.contains(<Login />)).toBe(false);
  });

  // New test for keydown event
  it("calls logOut function and displays alert when Ctrl + h keys are pressed", () => {
    const logOutMock = jest.fn();
    const component = shallow(<App logOut={logOutMock} />);
    const instance = component.instance(); // Accessing the instance of the component

    // Simulating keydown event with Ctrl and h keys
    instance.handleKeyDown({ key: "h", ctrlKey: true });

    expect(window.alert).toHaveBeenCalledWith("Logging you out");
    expect(logOutMock).toHaveBeenCalled();
  });

  // Add a test to verify that after calling handleDisplayDrawer, the state should now be true
  it("handleDisplayDrawer changes displayDrawer state to true", () => {
    const component = shallow(<App />);
    const instance = component.instance();

    instance.handleDisplayDrawer();

    expect(instance.state.displayDrawer).toBe(true);
  });

  // Add a test to verify that after calling handleHideDrawer, the state is updated to be false
  it("handleHideDrawer changes displayDrawer state to false", () => {
    const component = shallow(<App />);
    const instance = component.instance();

    // First, set the state to true
    instance.setState({ displayDrawer: true });
    // Then, call handleHideDrawer
    instance.handleHideDrawer();

    expect(instance.state.displayDrawer).toBe(false);
  });
  it("logIn function updates isLoggedIn state correctly", () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    instance.logIn();

    expect(wrapper.state().isLoggedIn).toBe(true);
  });
  it("logOut function updates isLoggedIn state correctly", () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    instance.logOut();

    expect(wrapper.state().isLoggedIn).toBe(false);
  });
  it(`verify that markNotificationAsRead works as intended, deletes the notification with the passed id from the listNotifications array`, () => {
    const context = {
      user: {
        ...user,
      },
      logOut: jest.fn(),
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, html: { __html: jest.fn() }, type: "urgent" },
      ],
    };

    const wrapper = mount(
      <AppContext.Provider value={context}>
        <App />
      </AppContext.Provider>
    );

    const instance = wrapper.instance();

    instance.markNotificationAsRead(3);

    expect(wrapper.state().listNotifications).toEqual([
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ]);

    expect(wrapper.state().listNotifications.length).toBe(2);
    expect(wrapper.state().listNotifications[3]).toBe(undefined);

    wrapper.unmount();
  });
});
