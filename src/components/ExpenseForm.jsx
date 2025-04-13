import React, { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !form.name ||
      !form.description ||
      !form.category ||
      !form.amount ||
      !form.date
    ) {
      alert("Please fill out all fields.");
      return;
    }

    onAddExpense({
      name: form.name,
      description: form.description,
      category: form.category,
      amount: parseFloat(form.amount),
      date: form.date,
    });

    setForm({ name: "", description: "", category: "", amount: "", date: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Expense</h3>
      <input
        name="name"
        placeholder="Enter expense name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="description"
        placeholder="Enter expense description"
        value={form.description}
        onChange={handleChange}
      />
      <input
        name="category"
        placeholder="Enter expense category"
        value={form.category}
        onChange={handleChange}
      />
      <input
        name="amount"
        type="number"
        placeholder="Enter amount"
        value={form.amount}
        onChange={handleChange}
      />
      <input
        name="date"
        type="date"
        value={form.date}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ExpenseForm;
