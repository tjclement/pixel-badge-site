---
title: "DumbstreamJSON"
nodateline: true
weight: 80
layout: docs
---

The *dumbstreamjson* module is a (very) naive implementation of a streaming JSON parser. It allows you to ingest large JSON web responses or files in an environment with limited memory. It works as a generator, so you can process items as they are parsed.

It was designed to be fast and consume little memory, and works for one type of data: big arrays of items of which you want to know only a few properties. For example, if you only want a list of IDs, but your data contains other things you don't care about:

```json
[
  {"id":"item1", "notinterestingbutreallylong": "stuffstuffstuffstuffstuff"},
  {"id":"item2", "notinterestingbutreallylong": "stuffstuffstuffstuffstuff"},
  {"id":"item3", "notinterestingbutreallylong": "stuffstuffstuffstuffstuff"}
]
```

## Reference

| Function | Parameters | Description |
| --- | --- | --- |
| from_url    | url, [keys], [blocksize] | Reads items from a JSON array hosted at `url`, and yields the values of their `keys` as they are being parsed. Optionally you can specify with `blocksize` how many bytes you want to read from the stream at once. |
| from_file    | stream, [keys], [blocksize] | Same as `from_url()`, but using a filestream (as return by e.g. `open('filename.json')`). |

## Examples

```python
import dumbstreamjson

# Assuming we have a file data.json containing the data at the top of this page
with open('data.json') as file:
    for item in dumbstreamjson.from_file(file, keys=['id']):
        # This prints each ID as items are being parsed.
        print(item['id'])

# Note that you can also wait for everything to be parsed,
# by calling list() aroung the json parser:
with open('data.json') as file:
    all_ids = list(dumbstreamjson.from_file(file, keys=['id']))
```