function countWords(message){
    var array=message.split(' ');
    var num=array.length();
    console.log(num);
  }
countWords('Good morning, I love JavaScript.'); // should return 5
