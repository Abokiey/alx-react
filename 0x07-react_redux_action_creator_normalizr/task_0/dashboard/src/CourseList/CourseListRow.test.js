import React from "react";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";

describe("Course List Row component test", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" />);

    expect(wrapper.exists()).toBe(true);
  });

  it("should render one cell with colspan = 2 when textSecondCell is null", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell={null} />);

    expect(wrapper.find("tr").children()).toHaveLength(1);
    expect(wrapper.find("tr").childAt(0).props().colSpan).toEqual(2);
    expect(wrapper.find("th").prop("children")).toEqual("test");
  });

  it("should render two cells when textSecondCell is not null", () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test1" textSecondCell="test2" />);

    expect(wrapper.find("tr").children()).toHaveLength(2);
    expect(wrapper.find("tr").childAt(0).html()).toEqual("<td>test1</td>");
    expect(wrapper.find("tr").childAt(1).html()).toEqual("<td>test2</td>");
  });

  it("should apply the correct styling for header rows", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header1" textSecondCell="Header2" />);

    expect(wrapper.find("tr").prop("className")).toContain("headerRow");
    expect(wrapper.find("th").everyWhere((node) => node.prop("className").includes("headerCell"))).toBe(true);
  });

  it("should apply the correct styling for default rows", () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Data1" textSecondCell="Data2" />);

    expect(wrapper.find("tr").prop("className")).toContain("row");
    expect(wrapper.find("td").everyWhere((node) => !node.hasClass("headerCell"))).toBe(true);
  });
});
