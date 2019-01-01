var assert = require('assert');
var flat = require('./../index');
var input = data = [
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

var output  = {
  '0': { 
    title: 'folder_1', 
    type: 'folder', 
    permission: true 
  },
  '0.children.0': { 
    title: 'file_1', 
    type: 'sketch' 
  },
  '0.children.1': { 
    title: 'file_2', 
    type: 'pdf'
  }
};

describe('Test Basic fuction', function() {
  it('If output is equal', function() {
    assert.deepEqual(flat(input, "children"), output);
  });
});
