1)Initially, Balance Amount, Income Amount, and Expenses Amount should be 0

2)Balance Amount should be calculated by removing the Expenses Amount from the Income Amount in the list of transactions

3)Income Amount should be calculated by removing the Expenses Amount in the list of transactions

4)Expenses Amount should be calculated by adding only Expenses Amount in the list of transactions

5)The MoneyManager component is provided with transactionTypeOptions. It consists of a list of transaction type objects with the following properties in each object

Key	Data Type

optionId	String

displayText	String

6)Initially, the value of the titleInput should be empty

7)Initially, the value of the amountInput should be empty

8)Initially, the first option in the list should be selected

9)When a transaction is added, by providing the values in the titleInput, amountInput and optionId and Add button is clicked,

9A)A new transaction should be added to the transaction history list

9B)totalBalance, totalIncome and totalExpenses should be updated accordingly

9c)After updating, the values in the titleInput,amountInput and optionId will be updated to their initial values

10)When the delete button in the transaction history is clicked,

10A)The respective transaction should be deleted from the transaction history list
10B)totalBalance, totalIncome and totalExpenses should be updated accordingly

