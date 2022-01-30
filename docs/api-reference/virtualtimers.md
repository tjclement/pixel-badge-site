---
title: "Virtualtimers"
nodateline: true
weight: 60
layout: docs
---

The *virtualtimers* module lets you regularly fire a function without holding up other Python logic. It is useful to update the screen for example, whilst keeping button presses low-latency. If you replace `time.sleep()` with functions called by virtualtimers, your app will feel much more snappy. 

## Reference

<div class="info">
Note: for historic reasons the parameter names mentioned here are not identical to the parameter names used in the code. This is to make them more understandable here. When calling these functions, it's therefore best to use positional arguments instead of named arguments. For example: virtualtimers.begin(100) instead of virtualtimers.begin(period=100) (the latter won't work).
</div>


| Function | Parameters | Description |
| --- | --- | --- |
| begin    | period | Calling this function starts the virtualtimers task. It needs to be called only once in your app. The `period` parameter is the interval in ms in which functions can be called by virtualtimers. Setting it to 100ms for example, will allow functions to be called at any multiple of 100ms, but not quicker than that. |
| stop    | - | Stops the virtualtimers task. After calling this, you need to call `begin()` again when you want to use virtualtimers. |
| new    | delay, callback | Adds a new function callback to be executed after `delay` ms. `callback` should return after how many ms it want to be called again after executing. Note that `delay` can't be smaller than the `period` with which you called `begin()`. |
| update    | period, callback | Updates the function callback to be executed every `period` ms. |


## Example

### Updating the screen every X ms
```python
import virtualtimers, rgb

pixel_x = 0

# This is the function we want to call regularly
def update_screen():
    # Show a black bar that cycles through the screen on every run
    global pixel_x
    rgb.clear()
    for y in range(8):
        rgb.pixel(pos=(pixel_x, y), color=(0,0,0))
    pixel_x = (pixel_x + 1) % 32
    
    # Let virtualtimers know that we want to run this function
    # again after 500 ms
    next_execution = 500  # in ms
    return next_execution


# We set the default background colour to green
rgb.background((0,255,0))
# The timer is started with a minimum interval of 100ms
virtualtimers.begin(100)
# and we tell it to execute update_screen immediately (no delay).
# Note that update_screen returns the number of ms until the next time
# it should run again.
virtualtimers.new(0, update_screen)
```