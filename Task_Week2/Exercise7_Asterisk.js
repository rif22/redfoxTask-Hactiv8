// 1.Barisan Bintang 

  var rows1=4;
  var i=0;

    while (i < rows1) {
      console.log ('*')
      i++
    }
 
 console.log('\n') 
 // 2.Barisan Bintang dengan Nested Looping

  var rows2 = 5;
  var i=0;

    while (i<rows2) {
      var asterisks = '*';
      var a = 1;
        while (a<rows2) {
          asterisks = asterisks + '*';
          a++;
        }
        console.log(asterisks);
    i++;
    }
      
console.log('\n') 
 // 3.Barisan Bintang dengan Nested Looping

  var rows3=5;
  var i=0;

    while (i < rows3) {
      var asterisks = '*';
      var a = 0;
        while (a < i) {
          asterisks = asterisks + '*';
          a++
        }
      console.log(asterisks);
      i++
    }
