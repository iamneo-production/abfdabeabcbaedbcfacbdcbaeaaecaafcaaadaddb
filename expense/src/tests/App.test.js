import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom';


import { sum } from './src/utils';
import { TransactionItem } from './src/components/transaction-list/transaction-item/transaction-item';
import { TransactionList } from './src/components/transaction-list/transaction-list';
import { Form } from './src/components/form/form';



const incomeList = [
  { id: 'a', type: 'income', description: 'Salary', value: 999 },
  { id: 'b', type: 'income', description: 'Lottery', value: 10000 },
];

describe('<List>', () => {
  it('renders correctly', () => {
    render(<TransactionList list={incomeList} onDeleteClick={() => {}} />);

    expect(screen.getByText(/salary/i)).toBeInTheDocument();
    expect(screen.getByText(/lottery/i)).toBeInTheDocument();
  });
});

describe('sum', () => {
  it('correctly sums elements of array', () => {
    expect(sum([1, 2, 3])).toBe(6);
    expect(sum([])).toBe(0);
    expect(sum([-2, 3])).toBe(1);
  });
});


describe('<TransactionItem>', () => {
  test('calls onDeleteClick with transaction id', () => {
    const onDeleteClick = jest.fn();
    render(
      <TransactionItem
        id="test-id"
        description="Apple"
        value={10}
        type="expense"
        onDeleteClick={onDeleteClick}
      />
    );

    userEvent.click(screen.getByRole('button'));

    expect(onDeleteClick).toBeCalledWith('test-id');
  });
});

//form
jest.mock('nanoid', () => ({
  nanoid: () => {
    let value = 0;
    return ++value;
  },
}));

describe('<Form>', () => {

  it('calls the onSubmit function with the form values', () => {
    const onSubmit = jest.fn();

    render(<Form onSubmit={onSubmit} />);

    const typeInput = screen.getByRole('combobox');
    const descIpnut = screen.getByRole('textbox');
    const valueInput = screen.getByRole('spinbutton');
    const submitBtn = screen.getByRole('button');

    // form is initialized correctly
    expect(typeInput.value).toBe('income');
    expect(descIpnut.value).toBe('');
    expect(valueInput.value).toBe('');
    expect(submitBtn).toHaveAttribute('disabled');

    // user fills out the form and submits it
    fireEvent.change(typeInput, { target: { value: 'expense' } });
    fireEvent.change(descIpnut, { target: { value: 'Ticket to the Moon' } });
    fireEvent.change(valueInput, { target: { value: '9.99' } });
    fireEvent.click(submitBtn);

    // `onSubmit` should be called with the values from the form
    expect(onSubmit).toBeCalledWith({
      id: 1,
      type: 'expense',
      description: 'Ticket to the Moon',
      value: 9.99,
    });

    // form should be reset after submitting
    expect(typeInput.value).toBe('expense');
    expect(descIpnut.value).toBe('');
    expect(valueInput.value).toBe('');
    expect(submitBtn).toHaveAttribute('disabled');

    // description input should have focus
    expect(descIpnut).toHaveFocus();
  });

  it(`doesn't call onSubmit when ref.current is null`, () => {
    jest.spyOn(React, 'useRef').mockReturnValue({
      get current() {
        return null;
      },
      set current(_) {},
    });
    const onSubmit = jest.fn();

    render(<Form onSubmit={onSubmit} />);

    fireEvent.submit(screen.getByTestId('form'));

    expect(onSubmit).toBeCalled();
  });
});