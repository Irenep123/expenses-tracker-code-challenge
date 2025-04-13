import React, { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';


function App() {
  const [expenses, setExpenses] = useState([
    {
      name: "Chapo Beans",
      description: "Friday's Supper",
      category: "Food",
      amount: 200,
      date: "2025-04-11",
    },
  ]);

  const [search, setSearch] = useState("");

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.name.toLowerCase().includes(search.toLowerCase()) ||
      expense.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Expense Tracker</h1>
      <p className="subheader">
        Start taking control of your finances and life. Record, categorize and
        analyze your spending.
      </p>
      <div className="app-container">
        <div className="left-panel">
          <ExpenseForm onAddExpense={handleAddExpense} />
        </div>
        <div className="right-panel">
          <SearchBar search={search} onSearchChange={setSearch} />
          <ExpenseTable expenses={filteredExpenses} />
        </div>
      </div>
    </div>
  );
}

export default App;
