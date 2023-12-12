# Meme Generator App

This is a simple web app that allows users to generate memes with custom top and bottom text, image URL, and font size. The app is designed with the following functionalities:

## Features

1. **Empty Initial State:**
   - Upon loading, the input elements for Image URL, Top Text, Bottom Text, and Font Size are initially empty.
   - The selected value in the Font Size dropdown is set to the first item in the given `fontSizesOptionsList`.

2. **Generate Meme:**
   - Users can input values for Image URL, Top Text, Bottom Text, and Font Size.
   - When the "Generate" button is clicked:
     - The provided Image URL is applied as a background-image for the generated meme.
     - The Top Text and Bottom Text values are displayed at the top and bottom of the meme, respectively.
     - The selected Font Size is applied to both the top and bottom text.
