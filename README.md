# Json-Tree Flat
  Use this libarary to flatten your tree Json. Provided the key for  branching node in json  we can obtain a flatten  object with path to object as a key hash

## Usage

```json
 const  flatTree = require('flat-json');

 const data = [
    {
      "title": "folder_1",
      "type": "folder",
      "permission": true,
      "children": [
          {
            "title": "file_1",
            "type": "sketch"
          },
          {
            "title": "file_2",
            "type": "pdf"
          }
      ]

    } 
]

const output = flatTree(data, 'children');

```

