---
title: Connecting via USB
weight: 20
layout: docs
---

Connecting to your computer via USB allows you to tinker with your Pixel's internals, and lets you test Python code. Connect your badge to a computer using a USB C cable, and connect over serial, 115200 baud (detailed instructions per OS below). You should see a menu appear with various options.

## Mac
* Check the address of your usb device by typing `ls /dev/` in your terminal, you'll get a list, one of the entries being your badge. It is probably something like `cu.wchusbserial1410`. To check which address belongs to your device, try disconnecting the badge and see which address is missing from the list after you run `ls /dev/` again.
* Open a serial connection with from Terminal like this: `screen /dev/cu.wchusbserial1410 115200`, replacing the address with the address of your device.
(You can exit with ctrl+a followed by k)

## Linux
* Make sure your user is in the *dialout* group (if not, run `adduser <your_username> dialout` and reboot or log out and back in).
* Open a serial connection with from Terminal like this: `screen /dev/ttyUSB0 115200`.
(You can exit with ctrl+a followed by k)

## Windows
You should be able to connect to the badge by using Putty:
* Install [the CH340 USB UART driver](http://www.wch.cn/downloads/CH341SER_ZIP.html) if the Pixel shows up as unknown device in Window's Device Manager.
* Download a terminal emulator, for example PuTTY.
* Look up the badge's COM-port number in Device Manager after connecting the badge over USB.
* In PuTTY connect to the serial port you found (i.e. COMx) and set baud-rate to 115200.
* Specifically in Windows, you might need to press space a few times before anything shows in your terminal screen.