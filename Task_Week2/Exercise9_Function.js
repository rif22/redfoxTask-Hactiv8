// 1.
console.log('\n')

  function ShoutOut() {
    return "Halo Function!"
  }

  console.log(ShoutOut())



// 2.
console.log('\n')

  function calculateMultiply() {
    return num1 * num2
  }

  var num1 = 5;
  var num2 = 6;

  var hasilPerkalian = calculateMultiply(num1,num2);
  console.log(hasilPerkalian);


// 3.
console.log('\n')

  function processSentence() {
      return 'Nama saya ' + name +', umur saya ' + age +' tahun, alamat saya di ' + address +', dan saya punya hobby yaitu '+ hobby +'!'
  }
  
  var name = "Agus";
  var age = 30;
  var address = "Jln. Malioboro, Yogjakarta";
  var hobby = "gaming";

  var fullSentence = processSentence(name,age,address,hobby);