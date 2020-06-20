function palindrome(message){
  var array1=message.split('');
  var array2=message.split('').reverse();
  if(array1[0]==array2[0]){
      console.log('true');
  }else{
      console.log('false');
  }
}
palindrome('hello'); 
palindrome('abcba');