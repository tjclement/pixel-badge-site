---
title: Writing your own apps
weight: 10
layout: docs
---

Let's build your first app! In this section we will run code directly in the Python shell. In the next section, we'll explain how to publish your code as a proper app on the app store.

For now, [connect via USB](/docs/getting-started/connecting) and select _Python shell_ in the terminal menu. You'll land in a shell prompt where you can type Python code. We'll use this shell to build a hello world app.

<div class="info">
Tip: In the Python shell, press <strong>CTRL+E</strong> to paste multiple lines of code at once. Press <strong>CTRL+D</strong> when you're done pasting. This allows you to quickly test an entire script you're writing on your computer.
</div>

## Modules
Your badge comes with a set of Python modules that contain functions allowing you to access its hardware. See the [API reference](/docs/api-reference) for an overview of what's available to you. Just like any other Python program, in the first lines of your app you should import the modules you want to use.

The [rgb](/docs/api-reference/rgb) module contains functions for interacting with the LED matrix display. Type the following into your shell and press enter:

```python
import rgb
```

## Clearing the screen

Before writing to the screen, whatever is still in place from any previous code must be erased. The rgb module has a _clear()_ function to perform this task:

```python
rgb.clear()
```

## Saying Hello World!
Having now set everything up, we can now make our app perform its purpose in life and display the string "Hello World!". In the first line we're assigning the string to a variable called _displaytext_ though this is not essential and we could pass it directly. Then we are using rgb's _text()_ function to write the text to the display.
So, enter the following lines:

```python
displaytext = "Hello World!"
rgb.text(displaytext)
```

## The completed app
Your entire Hello World app should now consist of the following code:

```python
import rgb
rgb.clear()
displaytext = "Hello World!"
rgb.text(displaytext)
```

In the next section, you'll learn how to publish your app so others (and you) can install it on their badge via the app store app.