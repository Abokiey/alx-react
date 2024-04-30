import { shallow } from "enzyme";
import React from "react";
import Footer from "./Footer";
import { getFullYear, getFooterCopy } from "../utils/utils";

describe("Footer test", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("should render the text Copyright", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toEqual(`Copyright ${getFullYear()} - ${getFooterCopy()}`);
  });
  it('logged out within the context', () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user, logOut }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('footer a')).toHaveLength(0);
  });
});