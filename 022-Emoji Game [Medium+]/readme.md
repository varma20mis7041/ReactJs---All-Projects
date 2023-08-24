The app must have the following functionalities

1)Initially, the Score and Total Score for the current game should be 0

2)When an Emoji is clicked,

 2a)If it is not the same as any of the previously clicked emojis, then the Score should be incremented by one
 
 2b)If all the emojis are clicked exactly once
 
       2a1)Won Game view should be displayed
       
 2c)If it is the same as any of the previously clicked emojis
 
    2c1)Lose Game view should be displayed
    
 2d)If the score achieved in the current game is higher than the previous scores then the Top Score should be updated accordingly
 
3)When the Play Again button is clicked, then we should be able to play the game again

  3a)The Score value should be reset but not the Top Score value
4)The EmojiGame component receives the emojisList as a prop. It consists of a list of emoji objects with the following properties in each emoji object

Key	Data Type
id	Number
emojiName	String
emojiUrl	String
