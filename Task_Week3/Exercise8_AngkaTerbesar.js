function pasanganTerbesar (num) {
  
  var numString = String (num);
  var length = numString.length;
  
    var terbesar = Number ( numString [0] + numString [1] );
    
      for (var i = 1; i < length-1; i++) {
        if (terbesar < Number ( numString [i] + numString [i+1])) {
        terbesar = Number(numString [i] + numString [i+1]);
        }
      }
      
    return terbesar;
}

// TEST CASES
console.log(pasanganTerbesar(641575)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99