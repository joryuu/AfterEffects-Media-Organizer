## Overview

If your template includes multiple media placeholders (e.g., "Media [number]" compositions), it can be challenging to track which image or video appears where in the final output.

The script automatically adds a text layer to each selected composition, displaying the composition’s name (e.g., "Media 1", "Media 2"). It also applies two instances of the **CC Repetile** effect to ensure that the comp name is visible across the entire composition, aiding in easy identification.

## Features

- Works on **selected compositions** or all compositions in a **selected folder**.
- Adds a text layer to each selected composition.
- Sets the text to the name of the composition (e.g., "Media 5").
- Adjusts the text settings for optimal readability:
  - Font: "Arial Regular"
  - Size: 150px
  - Kerning: 0
  - Line Spacing: Auto
- Applies two **CC Repetile** effects:
  - **First Instance**:
    - The first **CC Repetile** effect repeats the comp name with specific expand values (right: 200px, down: 100px) to provide padding and visibility around the text.
  - **Second Instance**:
    - The second **CC Repetile** effect, applied on top of the first, tiles the text using "Brick" tiling to ensure it remains visible regardless of cropping or placement within the main composition.
- Names the text layer after the comp for easy identification.

## How to Use

1. **Select the compositions** you want to apply the script to, or select a folder containing the compositions.
2. **Run the script** in AfterEffects by navigating to `File > Scripts > Run Script File...`.
3. The script will process the selected compositions or all comps within the selected folder, adding a text layer and applying the **CC Repetile** effects.

### Adding to AfterEffects Script UI Panel

To make the script more accessible in AfterEffects' Script UI Panel:

1. Save the .jsx file to your computer.
2. In AfterEffects, navigate to `File > Scripts > Install Script UI Panel`
3. Double-click the script.
4. Restart AfterEffects.
5. The script will now appear under the `Window` menu in AfterEffects, where you can run it directly from the Script UI Panel.

## Requirements

- Adobe AfterEffects (tested on version 24.6.1 Build 2).
- A project with compositions that you want to label with their comp names.

## Why This Script?

This script helps streamline the process of organizing media in templates, especially when it's crucial to have specific media appear in a designated order. By automatically labeling and organizing compositions, this script prevents mistakes and confusion, while ensuring text readability through optimized font settings and padding with the **CC Repetile** effect.
