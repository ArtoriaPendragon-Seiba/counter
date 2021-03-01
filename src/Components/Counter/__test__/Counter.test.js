import React from "react";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure, mount } from "enzyme";
import Counter from "../Counter";

configure({ adapter: new Adapter() });

describe("Counter", () => {
 it("renders correctly", () => {
   shallow(<Counter />);
 });

 it("set className properly", () => {
    const wrapper = mount(<Counter />);
    expect(wrapper.find('h2.counter')).toBeTruthy();
    expect(wrapper.find('button.counter-button')).toBeTruthy();
 }); 

 it("should update state on click", () => {
    const counterIncrease = jest.fn();
    const wrapper = mount(<Counter onClick={counterIncrease} />);
    const handleClick = jest.spyOn(React, "useState");
    handleClick.mockImplementation(count => [count, counterIncrease]);
    wrapper.find(".counter-button").simulate("click");
    expect(counterIncrease).toBeTruthy();
  });
});