When the plus icon is clicked in a FAQ:
- The answer to the FAQ should be visible to the user.
- The plus icon should change to a minus icon.

When the minus icon is clicked in a FAQ:
- The answer to the FAQ should be hidden from the user.
- The minus icon should change to a plus icon.

The `Faqs` component receives the `faqsList` as a prop. It consists of a list of FAQ objects with the following properties in each FAQ object:
- `id`: Number
- `questionText`: String
- `answerText`: String
