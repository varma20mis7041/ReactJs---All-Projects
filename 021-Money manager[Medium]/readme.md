Initially, Balance Amount, Income Amount, and Expenses Amount should be 0
Balance Amount should be calculated by removing the Expenses Amount from the Income Amount in the list of transactions
Income Amount should be calculated by removing the Expenses Amount in the list of transactions
Expenses Amount should be calculated by adding only Expenses Amount in the list of transactions
The MoneyManager component is provided with transactionTypeOptions. It consists of a list of transaction type objects with the following properties in each object

Key	Data Type
optionId	String
displayText	String
Initially, the value of the titleInput should be empty
Initially, the value of the amountInput should be empty
Initially, the first option in the list should be selected
When a transaction is added, by providing the values in the titleInput, amountInput and optionId and Add button is clicked,

A new transaction should be added to the transaction history list
totalBalance, totalIncome and totalExpenses should be updated accordingly

After updating, the values in the titleInput,amountInput and optionId will be updated to their initial values

When the delete button in the transaction history is clicked,
The respective transaction should be deleted from the transaction history list
totalBalance, totalIncome and totalExpenses should be updated accordingly

