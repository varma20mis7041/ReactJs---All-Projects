Initially, the Score and Total Score for the current game should be 0.

When an Emoji is clicked:
- If it is not the same as any of the previously clicked emojis, then the Score should be incremented by one.
- If all the emojis are clicked exactly once, the Won Game view should be displayed.
- If it is the same as any of the previously clicked emojis, the Lose Game view should be displayed.

If the score achieved in the current game is higher than the previous scores, then the Top Score should be updated accordingly.

When the Play Again button is clicked:
- The Score value should be reset, but not the Top Score value.

The `EmojiGame` component receives the `emojisList` as a prop. It consists of a list of emoji objects with the following properties in each emoji object:
- `id`: Number
- `emojiName`: String
- `emojiUrl`: String
