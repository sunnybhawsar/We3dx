let quillEditor = new Quill('#editor', {
  theme: 'snow'
});

quillEditor.on('text-change', function(){
  console.clear();
  console.log(quillEditor.root.innerHTML);
});


//Retrieve your json from MongoDB
let myDocument = [{
    "insert": "Hello "
  },
  {
    "attributes": {
      "bold": true
    },
    "insert": "World!"
  },
  {
    "insert": "\n"
  }
];

quillEditor.setContents(myDocument);