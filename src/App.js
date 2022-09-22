import React, { useState } from 'react';

import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';

const test_expenses = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 105.16,
    date: new Date(2022, 9, 11),
  },
  {
    id: 'e2',
    title: 'Mortgage',
    amount: 1800.0,
    date: new Date(2022, 9, 15),
  },
  {
    id: 'e3',
    title: 'Cell Phone',
    amount: 215.5,
    date: new Date(2022, 9, 8),
  },
  { id: 'e4', title: 'Storage', amount: 220.0, date: new Date(2022, 9, 10) },
];

const App = () => {
  const [expenses, setExpenses] = useState(test_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
