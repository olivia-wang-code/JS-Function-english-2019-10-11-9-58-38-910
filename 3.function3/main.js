function alphabetSort(message){
    var a=message.split('').sort().join('');
    console.log(a);
  }
  alphabetSort('hello'); // should return 'ehllo'
