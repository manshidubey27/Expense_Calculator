let totalAmount = 0;

        function addExpense() {
            const expenseNameInput = document.getElementById('expenseName');
            const expenseAmountInput = document.getElementById('expenseAmount');

            const expenseName = expenseNameInput.value.trim();
            const expenseAmount = parseFloat(expenseAmountInput.value);

            if(expenseName === '' || isNaN(expenseAmount) || expenseAmount <= 0) {
                alert('Please enter a valid expense name and amount.');
                return;
            }

            const expenseTable = document.getElementById('expenseTable');
            const newRow = expenseTable.insertRow();
            const nameCell = newRow.insertCell(0);
            const amountCell = newRow.insertCell(1);
            nameCell.textContent = expenseName;
            amountCell.textContent = `$${expenseAmount.toFixed(2)}`;

            totalAmount += expenseAmount;
            document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);

            // Clear the input fields
            expenseNameInput.value = '';
            expenseAmountInput.value = '';
        }