var React = require("react");

function createElement(content, tag='div', props={}) {
  // create a react element here
   return React.createElement(
     tag,
     props ,
    'Hello World'
  );
}

function createUnorderedList(list) {
  // create a react unordered list with children list items created form the list argument
   const mylist = list.map(item => React.createElement(
     'li',
     { key: item },
     item = "Hello World"
   )
  );
  return React.createElement(
    'ul',
    null,
    ...mylist);
}