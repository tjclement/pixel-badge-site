---
title: Publishing your new app
weight: 20
layout: docs
---

The Pixel Badge's _app store_ app is hooked up to [badge.team's _Hatchery_](https://hatchery.badge.team). The Hatchery is a completely free platform that hosts apps for all badges running badge.team firmware (of which we're fervent contributors).

<div class="info">
On the Hatchery, apps are called <i>eggs</i>, following terminology from Python.
</div>

Check it out in your browser, and make an account to make your apps available to everyone else!

## Creating a new app
Log in to your account, and then go to the [Eggs](https://hatchery.badge.team/projects). Now, click on the _add_ button in the top right.

Here, choose a category for app and select the Pixel in the compatibility list. Give your app a cool name, and tell people what it does in the description field.

When you've created your new app, you'll be taken to the app's edit screen. Here, edit the file _\_\_init\_\_.py_ and paste in the code of your app. This file will be executed anytime someone starts your app.

## Making a pretty icon
Most cool apps have an icon, either static or animated. This is shown in the launcher screen of the badge when your app is selected.

You can make an icon by clicking on the _Add icon_ button in your app's edit page. Here, you can either point-and-click an icon in the live editor, or copy an image of your own. The format of the icon follows the data that the [rgb module](/docs/api-reference/rgb) needs.

<div class="info">
Want to use an animated gif image? Check out our <a href="https://github.com/hackzone/cz19-badge/blob/master/tools/convert.py">Python script</a> for generating the icon data from a .gif file. 
</div>