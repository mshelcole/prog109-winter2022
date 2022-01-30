//var table = 3;             // Unit of table
var table = parseInt(prompt('Enter an integer: '));
//operator = GetValueFromUser("operator");
//table = GetValueFromUser("table")

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = GetTableContent(table);


//function GetValueFromUser(valueType) {
//var table = parseInt(prompt('Enter an integer: '));
//}

//function GetValueFromUser(valueType) {
 // var table = parseInt(prompt('Enter an integer: '));

  // return prompt(valueType);
//}


function GetTableContent(table) {
  var i = 1;                 // Set counter to 1
  var msg = '<h2>Multiplication Table</h2>';   // Message  


  {// Do multiplication
    while (i < 11) {
      msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
      i++;
    }
  }
  return msg;
}
