# Gradient Generator App

The Gradient Generator app allows users to create linear gradients with custom directions and colors. The app is designed with the following functionalities:

## Features

1. **Initial State:**
   - Upon loading, the selected gradient direction is set to the first value in the given `gradientDirectionsList`.
   - The initial values for the HTML input elements with type color are set to `#8ae323` and `#014f7b`, respectively.

2. **Color Input Handling:**
   - Users can input values for both color input elements.
   - When values are provided for both input elements with type color, the provided values become the text content for the respective paragraph elements.

3. **Generate Gradient:**
   - After selecting the direction and picking colors, clicking the "Generate" button creates a linear gradient background.
   - The background has the selected direction and colors provided.

## Gradient Directions List

The `gradientDirectionsList` is a list of gradient directions objects with the following properties in each object:

- **directionId:** String
- **value:** String
- **displayText:** String
