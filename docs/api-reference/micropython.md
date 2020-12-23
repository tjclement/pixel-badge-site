---
title: "Micropython modules"
nodateline: true
weight: 10000
layout: docs
---

The Pixel runs MicroPython, a version of Python built specifically for embedded devices. Aside from the modules we provide, you can of course also use the [built-in modules of MicroPython](https://docs.micropython.org/en/latest/esp32/quickref.html#networking).

For example, you can use the `time` module to sleep for a specific amount of time, `urequests` for doing HTTP(S) requests, and `socket` for raw networking.

Note that we're using a specific port of ESP32 MicroPython, that has a [slightly different API](https://github.com/loboris/MicroPython_ESP32_psRAM_LoBo/wiki) for low-level functions like pin control and RTC compared to normal MicroPython.