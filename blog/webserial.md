---
title: WebSerial - The next big thing for badges and devboards?
excerpt: >-
  New API lets you talk to serial devices from your browser, making electronics much more approachable for beginners. 
date: '2021-03-08'
image: images/pixel_nyan.png
layout: post
---

Post by Tom Clement

![Full colour art on the Pixel Badge](/images/pixel_nyan.png) 

On March 2nd, the Chrome browser dev team made WebSerial available to the large public in Chrome release 89. In this post, we'll talk about how this new API opens up a whole new dimension for interfacing with not only [#badgelife](https://twitter.com/search?q=badgelife){:target="_blank"} event badges like the [Pixel Badge](/){:target="_blank"}, and also many other devices that use serial over USB.

***

## The legacy way of using badges / devboards

For the past years, most badges have been accessible via serial. You connected them to your computer via USB, and fired up a serial program like screen, minicom, or PuTTY. Many would present e.g. a micropython shell over this serial connection. In 2017, [badge.team](https://bodge.team/team/){:target="_blank"} upped the game with a neat visual serial menu. Initially made for the SHA2017 hacker event badge, their firmware platform now runs on many badges, including the Pixel Badge.

The visual menu helped make things like configuring WiFi easier for users, but required know-how of how to set up the serial connection:

![Previously, one would connect to badges via a serial terminal](/images/webserial/serial.png) 
 

## How WebUSB broke new ground
In early 2020, Matthew Wilkes of [EMF](https://www.emfcamp.org/){:target="_blank"}'s badge team [made an IDE](https://github.com/MatthewWilkes/tide){:target="_blank"} that runs completely in your browser, and connects to badges via the recent [WebUSB](https://web.dev/usb/){:target="_blank"} API. This was huge, as it made it much easier for people to get started with electronics. In the [CampZone 2020 event badge](https://hackaday.com/2020/07/31/campzone-2020-badge-literally-speaks-to-us/){:target="_blank"}, we added to this idea with screens for installing and configuring apps and things like setting up WiFi:

![CampZone 2020 added app installation and config from your browser](/images/webserial/cz20_apps.png)

WebUSB is amazing, but it has one big downside: it can't be used to communicate with USB serial devices, as it [only allows talking to unclaimed devices](https://stackoverflow.com/a/54449381){:target="_blank"} and most operating systems automatically load drivers for the USB serial adapters that you find on all badges and other devboards.

Some recent badges like CampZone2020 get around this issue by swapping out a normal USB serial chip for a general purpose microcontroller like the STM32F103, and have it act like a USB device that works like a serial adapter but does not get recognised as one. This prevents the OS from loading a generic driver for it, thus allowing you to use it in WebUSB. That's fine for new devices that can afford the more expensive STM32, but doesn't help for older devices.

<br>

## WebSerial changes the game for all existing devices
Enter [WebSerial](https://web.dev/serial/){:target="_blank"}: a brand new API meant specifically for communicating with USB uart adapters. 

WebSerial can be used much like the WebUSB for rich badge interfaces in your browser. However, as it does not need special-purpose hardware, and rather works with any USB serial adapter, it gives us a wonderful gift: retroactive backwards compatibility with _any badge ever made_. Whoa.

It works much like WebUSB - a webpage can request access to a device, and you have to expressly grant permission:

![WebSerial requires manual permission to access devices](/images/webserial/webserial_permission.png)

Some groups have already started to use WebSerial in their projects. [Espruino IDE](https://www.espruino.com/ide/){:target="_blank"} can now use the new API to run code on their microcontrollers, for example.

For our part, we ported the WebUSB-based web app we made for CampZone2020 to WebSerial, bringing easy visual installation of apps, drag & drop file management, web IDE for programming, and a web python terminal to all badges that run badge.team firmware. That's support for SHA2017, CampZone2019, Disobey2019, HackerHotel2019, CampZone2020, Disobey2020, and the Pixel Badge. How cool is that!

If you have one of these devices, you can check out our WebSerial demo at [webserial.curious.supplies](https://webserial.curious.supplies){:target="_blank"}. Or check out this demo video below:

<iframe src="https://player.vimeo.com/video/520706554" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<br>

## What's next?

We hope that more people will start to incorporate WebSerial into their projects; we'd be absolutely thrilled to see it become easier for new people to get introduced to electronics. For new and existing badges out there, it no doubt makes a lot of sense to build web interfaces, but perhaps we should dream even bigger and get all other micropython and circuitpython devices on board too!

Next up for us is flashing badges through the browser, too. Luckily, [makermelissa](https://github.com/makermelissa){:target="_blank"} and Adafruit have already made [an initial port of esptool in JS](https://github.com/adafruit/Adafruit_WebSerial_ESPTool){:target="_blank"}, paving the way for the easiest flashing procedure for badge-owners thus far.


Do you want to know more, or would you like our help bringing WebSerial into your project? Feel free to reach out [on our Discord](/docs/community){:target="_blank"} or via info@curious.supplies.

<br>

***

<br>

Psst, if you're still looking for something to do during these crazy times and like WiFi-enabled LEDs you can program in Python: you can still get one of the few remaining [Pixel Badge Founder's Edition here](/){:target="_blank"}.
<iframe src="https://player.vimeo.com/video/489924539" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
