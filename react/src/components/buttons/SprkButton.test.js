/* global it expect */
import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkButton from './SprkButton';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkButton:', () => {
  it('should display a button element with the correct base class', () => {
    const wrapper = shallow(<SprkButton />);
    expect(wrapper.find('button.sprk-c-Button').length).toBe(1);
  });

  it('should render the element as an anchor when the element prop is a', () => {
    const wrapper = shallow(<SprkButton element="a" href="#nogo" />);
    expect(wrapper.find('a[href].sprk-c-Button').length).toBe(1);
  });

  it('should display a button element with correct classes when variant is secondary', () => {
    const wrapper = shallow(<SprkButton variant="secondary" />);
    expect(wrapper.find('button').hasClass('sprk-c-Button--secondary')).toBe(
      true,
    );
  });

  it('should display a button element with correct classes when variant is tertiary', () => {
    const wrapper = shallow(<SprkButton variant="tertiary" />);
    expect(wrapper.find('button').hasClass('sprk-c-Button--tertiary')).toBe(true);
  });

  it('if loading is not set, should not render the spinner', () => {
    const wrapper = mount(<SprkButton />);
    expect(wrapper.find('.sprk-c-Spinner').length).toBe(0);
  });

  it('if loading is set, should render the spinner', () => {
    const wrapper = mount(<SprkButton loading />);
    expect(wrapper.find('.sprk-c-Spinner').length).toBe(1);
  });

  it('if loading is set, should render the spinner and add aria-label to element', () => {
    const wrapper = mount(<SprkButton loading />);
    expect(wrapper.find('button[aria-label="Loading"]').length).toBe(1);
  });

  it('if loading is set with spinningAriaLabel it should add custom aria-label', () => {
    const wrapper = mount(<SprkButton loading spinningAriaLabel="custom" />);
    expect(wrapper.find('button[aria-label="custom"]').length).toBe(1);
  });

  it('if loading is not set but spinningAriaLabel is, it should not add aria-label', () => {
    const wrapper = mount(<SprkButton spinningAriaLabel="custom" />);
    expect(wrapper.find('button[aria-label="custom"]').length).toBe(0);
  });

  it('it should not overwrite aria-label if loading=false', () => {
    const wrapper = mount(<SprkButton aria-label="initial" loading={false} />);
    expect(wrapper.find('button[aria-label="initial"]').length).toBe(1);
  });

  it('it should overwrite aria-label if loading=true', () => {
    const wrapper = mount(<SprkButton aria-label="initial" loading={true} />);
    expect(wrapper.find('button[aria-label="Loading"]').length).toBe(1);
  });

  it('if loading is not set it should not add aria-label', () => {
    const wrapper = mount(<SprkButton />);
    expect(wrapper.find('button[aria-label]').length).toBe(0);
  });

  it('if loading is set and variant is secondary, should render the secondary spinner', () => {
    const wrapper = mount(<SprkButton loading variant="secondary"/>);
    expect(wrapper.find('.sprk-c-Spinner--dark').length).toBe(1);
  });

  it('should add role=button if an anchor is rendered', () => {
    const wrapper = mount(<SprkButton element="a" href="#nogo" />);
    expect(wrapper.find('[role="button"]').length).toBe(1);
  });

  it('should add data-id if idString is supplied', () => {
    const wrapper = mount(<SprkButton idString="button-1" />);
    expect(wrapper.find('[data-id="button-1"]').length).toBe(1);
  });

  it('should add data-analytics if analyticsString is supplied', () => {
    const wrapper = mount(<SprkButton analyticsString="button-1" />);
    expect(wrapper.find('[data-analytics="button-1"]').length).toBe(1);
  });

  it('should apply any unknown props as attributes on the element', () => {
    const wrapper = shallow(<SprkButton aria-labelledby="label-1" />);
    expect(wrapper.find('button[aria-labelledby="label-1"]').length).toBe(1);
  });

  it('should render an anchor tag if an href is provided and no element is', () => {
    const wrapper = shallow(<SprkButton href="#" />);
    expect(wrapper.find('a[href="#"]').length).toBe(1);
  });

  it('should not render an href if one is provided and element is set to "button"', () => {
    const wrapper = shallow(<SprkButton href="#" element="button" />);
    expect(wrapper.find('button[href="#"]').length).toBe(0);
    expect(wrapper.find('button').length).toBe(1);
  });
});
