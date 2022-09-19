import Expenses from './components/Expenses';

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 105.16, date: new Date(2022, 9, 11) },
    { title: 'Mortgage', amount: 1800.0, date: new Date(2022, 9, 15) },
    { title: 'Cell Phone', amount: 215.5, date: new Date(2022, 9, 8) },
    { title: 'Storage', amount: 220.0, date: new Date(2022, 9, 10) },
  ];

  return (
    <div>
      <h2>My Expenses!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
