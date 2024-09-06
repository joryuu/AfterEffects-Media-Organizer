## Overview

This script was designed to help visually organize media compositions in After Effects, particularly for templates like the Photography Portfolio by millionframes on Envato. If your template includes multiple media placeholders (e.g., "Media [number]" compositions), it can be challenging to track which image or video appears where in the final output.

The script automatically adds a text layer to each "Media [number]" composition, displaying the composition’s name (e.g., "Media 1", "Media 2"). It also applies two instances of the **CC Repetile** effect to ensure that the comp name is visible across the entire composition, aiding in easy identification of each media slot.

## Features

- Adds a text layer to each "Media [number]" composition.
- Sets the text to the name of the composition (e.g., "Media 5").
- Adjusts the text settings for optimal readability:
  - Font: "Verdana"
  - Size: 150px
  - Kerning: 0
  - Line Spacing: Auto

- Applies two **CC Repetile** effects:
  - **First Instance:**
    - The first **CC Repetile** effect repeats the comp name with specific expand values to ensure it covers a larger area around the text. This provides a basic level of visibility and padding.
  - **Second Instance:**
    - The second **CC Repetile** effect, which is applied on top of the first instance, uses different settings to tile the text and ensure it remains visible regardless of cropping or placement within the main composition. This provides additional coverage and ensures that the text is always visible in any part of the comp.

## How to Use

1. Select the folder in your After Effects project that contains all the "Media [number]" compositions.
    - You can swap Media with other naming conventions in the script itself - check the comments therein to see how.
3. Run the script in After Effects by navigating to `File > Scripts > Run Script File...`.
4. The script will process all compositions in the selected folder, adding a text layer and applying the **CC Repetile** effects.

## Requirements

- Adobe After Effects (tested on version 24.6.1 Build 2).
- A template or project file with compositions named in the format "Media [number]" (e.g., "Media 1", "Media 2").

## Why This Script?

When working with templates, ensuring that media files appear in a specific order can be crucial. This script streamlines the process by labeling and organizing media compositions automatically. It also ensures readability and visibility of the text across various compositions by adjusting text settings and applying effective padding and tiling strategies.
