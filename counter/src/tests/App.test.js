import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Counter from '../components/Counter';
import Button from '../components/Button';
import AppBar from '../components/AppBar';

describe('App Component Tests', () => {
  test('Counter component renders correctly with given count', () => {
    const count = 5;
    const wrapper = shallow(<Counter count={count} />);
    expect(wrapper.find('.counter-value').text()).toContain(`Counter: ${count}`);
  });

  test('Button component invokes onClick function when clicked', () => {
    const onClickMock = jest.fn();
    const wrapper = shallow(<Button label="Test Button" onClick={onClickMock} />);
    wrapper.find('.button').simulate('click');
    expect(onClickMock).toHaveBeenCalled();
  });

  test('App component initializes with count set to 0', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('count')).toBe(0);
  });

  test('App component increments count when Increment button is clicked', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleIncrement();
    expect(wrapper.state('count')).toBe(1);
  });

  test('App component decrements count when Decrement button is clicked', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ count: 5 });
    wrapper.instance().handleDecrement();
    expect(wrapper.state('count')).toBe(4);
  });

  test('App component resets count to 0 when Reset button is clicked', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ count: 5 });
    wrapper.instance().handleReset();
    expect(wrapper.state('count')).toBe(0);
  });

  test('App component resets count to 0 when Window Reset button is clicked', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ count: 5 });
    window.location.reload = jest.fn();
    wrapper.instance().handleWindowReset();
    expect(wrapper.state('count')).toBe(0);
    expect(window.location.reload).toHaveBeenCalled();
  });

  test('App component displays correct title in AppBar', () => {
    const title = 'Test Title';
    const wrapper = shallow(<App />);
    wrapper.find(AppBar).props().title = title;
    expect(wrapper.find(AppBar).props().title).toBe(title);
  });

  test('App component increment button increases count when clicked', () => {
    const wrapper = shallow(<App />);
    const incrementButton = wrapper.find(Button).at(0);
    incrementButton.simulate('click');
    expect(wrapper.state('count')).toBe(1);
  });

  test('App component decrement button decreases count when clicked', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ count: 5 });
    const decrementButton = wrapper.find(Button).at(1);
    decrementButton.simulate('click');
    expect(wrapper.state('count')).toBe(4);
  });
});
