---
title: "Valuestore"
nodateline: true
weight: 50
layout: docs
---

The *valuestore* API allows you to easily save and load python dicts to flash memory. This is handy for app settings or cached data.

## Reference

| Function | Parameters | Description |
| --- | --- | --- |
| load | [namespace], keyname  | Loads data with given key name from flash, optionally in a given namespace. Returns None if data doesn't exist. |
| save | [namespace], keyname, data | Save data (a Python dict) to flash under the given key name and optional namespace. |

## Example

### Save and load data
```python
import valuestore

valuestore.save('myapp', 'settings', {level: 9001, awesome: True})

settings = valuestore.load('myapp', 'settings')
print(settings['awesome'])
```