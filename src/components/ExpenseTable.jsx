import React from 'react';

function ExpenseTable({ expenses }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Expense</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {expenses.length === 0 ? (
          <tr>
            <td colSpan="5">No expenses found.</td>
          </tr>
        ) : (
          expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.name}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>${expense.amount.toFixed(2)}</td>
              <td>{expense.date}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
