---
title: Tips for making great apps
weight: 30
layout: docs
---

Here are some neat tricks to improve the usability of your apps:

## Use `virtualtimers` instead of sleeping

An easy way to get started with writing Python apps is to just have a busy while loop that executes something and then sleep for a little while:
```python
import time

def do_something():
    print('stuff')

while True:
    do_something()
    time.sleep(500)
```

However, `time.sleep()` blocks everything else whilst it's sleeping. This means that for example button press handlers are not called during this sleep. That degrades the feel of your app, because e.g. pressing B to exit it now requires you to hold it for half a second. Not cool, eh?

Instead, we can do the exact same thing with [virtualtimers](/docs/api-reference/virtualtimers):

```python
import virtualtimers

def do_something():
    print('stuff')
    run_again_in = 500  # time until this function should run again, in ms
    return run_again_in

# Initialise the virtualtimers task, and register our function
virtualtimers.begin(100)
virtualtimers.new(0, do_something)  # run now, with 0 delay
```

In above snippet we ask `virtualtimers` to run `do_something()` once, and `do_something()` itself returns after how long it wants `virtualtimers` to call it again. By returning 500 every time, `do_something()` gets called every 500 ms (until `virtualtimers.stop()` is called, or the app is exited).

---

## Use `uinterface`

The [uinterface](/docs/api-reference/uinterface) module has a lot of nifty functions to make it easy to do things in a pretty way for the user of your app. For example, to connect to wifi whilst showing a helpful animation, use:
```python
import uinterface

# Connect to WiFi, or timeout after 10s of trying
uinterface.connect_wifi(10000)
```

To show text to the user without them having to wait for the entire message to scroll by if they already know what it will be:

```python
import uinterface

uinterface.skippable_text('Super long message that you can skip by pressing either A or B')
```