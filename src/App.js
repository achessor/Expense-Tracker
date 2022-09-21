import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';

const App = () => {
  const expenses = [
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

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
