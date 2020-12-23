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

### Ask the user to confirm or cancel, with visuals
```python
import uinterface

if uinterface.confirmation_dialog('Do it?'):
    print('Doing it')
else:
    print('Not doing it')
```

### Show a scrolling text message that blocks until fully shown or until user skips
```python
import uinterface

print('showing message')
uinterface.skippabletext('You can cancel this, or wait until it has been shown')

# This is executed only after the message has been shown (or user cancels with A or B) 
rgb.clear()
print('done')
```

### Show a menu with multiple selectable items
```python
import uinterface

options = ['option1', 'option 2', 'option 3']
selected = ['option 2']
uinterface.skippabletext('Select something')  # Allows a user to skip the message with A or B
selected = uinterface.menu(options, selected=selected)
uinterface.skippabletext('Your choices: ' + str(selected))
```