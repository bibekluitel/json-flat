# Json-Tree Flat
  Use this library to flatten your tree Json. Provided the key for  branching node in json  we can obtain a flatten  object with path to object as a key hash

## Usage

```js
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

// Output:

// { 
//   '0': { 
//     title: 'folder_1', 
//     type: 'folder', 
//     permission: true 
//   },
//   '0.children.0': { 
//     title: 'file_1', 
//     type: 'sketch' 
//   },
//   '0.children.1': { 
//     title: 'file_2', 
//     type: 'pdf'
//   }
// }

```

