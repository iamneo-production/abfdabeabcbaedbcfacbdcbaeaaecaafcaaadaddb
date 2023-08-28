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

  test('App component displays correct title in AppBar', () => {
    const title = 'Counter App';
    const wrapper = shallow(<App />);
    const appBarTitle = wrapper.find(AppBar).prop('title');
    expect(appBarTitle).toBe(title);
  });
});

describe('CSS Style Tests', () => {
  test('App component has correct styles', () => {
    const wrapper = shallow(<App />);
    const appStyle = wrapper.find('.App').prop('style');
    expect(wrapper.hasClass('App')).toBe(true);
    expect(appStyle.textAlign).toBe('center');
    expect(appStyle.margin).toBe('2rem');
  });

  test('AppBar component has correct styles', () => {
    const wrapper = shallow(<AppBar title="Test Title" />);
    const appBarStyle = wrapper.find('.app-bar').prop('style');
    expect(wrapper.hasClass('app-bar')).toBe(true);
    expect(appBarStyle.backgroundColor).toBe('#333');
    expect(appBarStyle.color).toBe('white');
  });

  test('Counter component has correct styles', () => {
    const count = 5;
    const wrapper = shallow(<Counter count={count} />);
    const counterContainerStyle = wrapper.find('.counter-container').prop('style');
    const counterValueStyle = wrapper.find('.counter-value').prop('style');
    expect(counterContainerStyle.backgroundColor).toBe('#f0f0f0');
    expect(counterValueStyle.backgroundColor).toBe('#333');
  });

  test('Button component has correct styles', () => {
    const onClickMock = jest.fn();
    const wrapper = shallow(<Button label="Test Button" onClick={onClickMock} />);
    const buttonStyle = wrapper.find('.button').prop('style');
    expect(wrapper.hasClass('button')).toBe(true);
    expect(buttonStyle.backgroundColor).toBe('#007bff');
    expect(buttonStyle.color).toBe('white');
  });

  test('Reset button in AppBar has correct styles', () => {
    const wrapper = shallow(<AppBar title="Test Title" />);
    const resetButton = wrapper.find('.app-bar button');
    const resetButtonStyle = resetButton.prop('style');
    expect(resetButtonStyle.backgroundColor).toBe('#ff5722');
    expect(resetButtonStyle.color).toBe('white');
  });
});