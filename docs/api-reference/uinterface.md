---
title: "uInterface"
nodateline: true
weight: 20
layout: docs
---

The *uinterface* API allows you to perform different visuals that help the user understand certain processes.

## Reference

| Command | Parameters | Description |
| --- | --- | --- |
| menu | items, [active], [selected], [callback_left], [callback_right]  | Show a menu with textual items (list of strings). Allows the user to select (right button) multiple entries. User confirms with A or cancels with B. Returns selected index if selected=None, or a list of selected indices otherwise.|
| text_input | [charset]  | Ask the user for a string input, by cycling through a set of characters. The charset param is a string of allowed characters (default: a-Z + 0-9 + common special characters) |
| confirmation_dialog | text | Show a scrolling message to the user, with icons, with the option to accept with A or deny with B. |
| connect_wifi | [duration] | Connect to wifi whilst showing a connection icon. Timeout after [duration]. |
| loading_text | text | Show a scrolling message with a loading icon on the left. |
| skippabletext | text | Show a scrolling message that can be skipped with A or B. |

## Examples

### Register a button handler function
```python
import buttons, defines

def my_callback(button_is_down):
    if button_is_down:
        # Do stuff
        pass

buttons.register(defines.BTN_A, my_callback)
```