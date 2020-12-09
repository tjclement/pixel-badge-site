---
title: Installing apps
weight: 40
layout: docs
---

The Pixel contains an ESP32 that can do 2.4GHz WiFi. The app store and a few of the preinstalled apps need WiFi to work, so let's set it up.

A fresh Pixel will try to connect to a network called "PixelBadge" with also "PixelBadge" as password. You can use your phone as a hotspot to give your badge internet access, but it's nicer to connect it to a real WiFi network.

There are two ways of connecting to your own WiFi, which are explained below.

## Setup via USB
The easiest way to configure WiFi is via the neat USB serial menu:

* Open a serial connection to your badge as in [the previous step](/docs/getting-started/connecting). A menu will show.
* Using the arrow keys on your computer, navigate to _Settings_ > _Configure WiFi_.
* Here, you can either scan for active networks, or manually type an SSID. Type in your password, and the badge will save the credentials.

## Setup via the Pixel itself
It's also possible to configure WiFi directly on the badge. It's a bit more time consuming, but handy if you don't have a device near to access the USB menu.

* In the launcher app (the one that the badge boots into), scroll down into the _Set up wifi_ app and start it.
* The app will scan for access points, and show them to you. Select the right one with **up**/**down**, and confirm with **A**.
* Now, you need to input your password. This is done by cycling through a big character set with **up**/**down** for each character. Switch character with **left**/**right**, and confirm with **A** once you're done.