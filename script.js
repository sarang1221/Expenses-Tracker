let expenses = [];

function addExpense() {
  const expenseName = document.getElementById('expenseName').value.trim();
  const expenseAmount = parseFloat(document.getElementById('expenseAmount').value.trim());

  if (expenseName && expenseAmount) {
    const expense = { name: expenseName, amount: expenseAmount };
    expenses.push(expense);
    displayExpenses();
    calculateTotal();
    document.getElementById('expenseName').value = '';
    document.getElementById('expenseAmount').value = '';
  } else {
    alert('Please enter both expense name and amount.');
  }
}

function displayExpenses() {
  const expenseList = document.getElementById('expenseList');
  expenseList.innerHTML = '';
  expenses.forEach((expense, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${expense.name}</strong>: $${expense.amount.toFixed(2)} <button onclick="deleteExpense(${index})">Delete</button>`;
    expenseList.appendChild(listItem);
  });
}

function deleteExpense(index) {
  expenses.splice(index, 1);
  displayExpenses();
  calculateTotal();
}

function calculateTotal() {
  const totalExpense = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  document.getElementById('totalExpense').textContent = `$${totalExpense.toFixed(2)}`;
}
