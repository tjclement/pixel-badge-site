---
title: "Buttons"
nodateline: true
weight: 10
layout: docs
---

The *buttons* API allows you to read the state of the buttons on the badge.

## Reference

| Command            | Parameters                 | Description                                                                      |
| ------------------ | -------------------------- | -------------------------------------------------------------------------------- |
| attach             | button, callback function  | Attach a callback to a button                                                    |
| detach             | button                     | Detach a callback from a button                                                  |
| value              | button                     | Get the current value of a button                                                |
| getCallback        | button                     | Get the current callback of a button                                             |
| pushMapping        | [mapping]                  | Switch to a new button mapping                                                   |
| popMapping         | -                          | Switch back to the previous button mapping                                       |
| rotate             | degrees                    | Adapt the button layout to an orientation. Accepts 0, 90, 180 and 270 as values. |

## Available buttons

| Name   | Default action |
| --- | --- |
| BTN_A      |               |
| BTN_B      | Exit app      |
| BTN_UP     |               |
| BTN_DOWN   |               |
| BTN_LEFT   |               |
| BTN_RIGHT  |               |

## Example

```python
import buttons, defines

def my_callback(button_is_down):
    if button_is_down:
        # Do stuff
        pass

buttons.register(defines.BTN_A, my_callback)
```