---
title: "Appconfig"
nodateline: true
weight: 49
layout: docs
---

The *appconfig* API allows apps to register their user-configurable settings. By using this API, app settings are shown in the Settings page of the webserial.curious.supplies.

## Reference

| Function | Parameters | Description |
| --- | --- | --- |
| get | app_slug, default_config  | Loads app settings object from filesystem and returns it. If it doesn't exist, saves default config to filesystem and returns that instead. |

## Example

### Save and load data
```python
import appconfig

settings = appconfig.get('myapp', {'level': 9001, 'awesome': True})
print(settings['awesome'])
```