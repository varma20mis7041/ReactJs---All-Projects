Note : this site was builted only for large and small divices only.

The default timer limit value should be 25 minutes


When the Start button is clicked:
    - The Start text should change to Pause text
    - A pause icon should replace the play icon
    - The Timer status should change to Running
    - The Timer should start running backwards from the timer limit value set
    - If the Timer has been paused after starting, it should resume from where it was paused
    - Both the Plus and Minus buttons should be disabled

When the Pause button is clicked:
    - The Pause text should change to Start text
    - The pause icon should be replaced by a play icon
    - The Timer should stop running backwards
    - The Timer status should change to Paused
    - Both the Plus and Minus buttons should be disabled

When the button with the Plus symbol is clicked:
    - The timer limit value should be incremented by one minute
    - The Timer should display time with the increased timer limit value

When the button with the Minus symbol is clicked:
    - The timer limit value should be decremented by one minute
    - The Timer should display time with the decreased timer limit value

When the timer limit value is modified by clicking the Plus or Minus button and the Start button is clicked:
    - The Timer should start with the modified timer value
    - The Start text should change to Pause text
    - The play icon should be replaced by a pause icon
    - The Timer status should change to Running

When the Timer ends (displays 00:00):
    - The Pause text should change to Start text
    - The pause icon should be replaced by a play icon
    - The Timer should stop running backwards
    - The Timer status should change to Paused

After completion of the Timer, when the Start button is clicked:
    - The Start text should change to Pause text
    - The play icon should be replaced by a pause icon
    - The Timer should start running backwards from the current timer limit value
    - The Timer status should change to Running

When the Reset button is clicked:
    - The Pause text should change to Start text
    - The pause icon should be replaced by a play icon
    - The Timer should stop running backwards
    - The Timer status should change to Paused
    - Initial Timer limit value should be displayed
    - Both the Plus and Minus buttons should be enabled
