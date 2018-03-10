var input = ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'];

function dataHandling2 (input) {

// penggunaan splice
    input.splice (1, 2,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    input.splice (-1, 2, "Pria", "SMA International Metro");
  console.log (input);
  }

dataHandling2 (input);


 // penggunaan split
    var tanggal = input[3].split ("/");
      
      // penggunaan switch-case
      var bulan = tanggal [1];
        switch (bulan) {
          case "01" :
            bulan = "Januari";
            break

          case "02" :
            bulan = "Februari";
            break

          case "03" :
            bulan = "Maret";
            break

          case "04" :
            bulan = "April";
            break

          case "05" :
            bulan = "Mei";
            break

          case "06" :
            bulan = "Juni";
            break

          case "07" :
            bulan = "Juli";
            break

          case "08" :
            bulan = "Agustus";
            break

          case "09" :
            bulan = "September";
            break

          case "10" :
            bulan = "Oktober";
            break

          case "11" :
            bulan = "November";
            break

          case "12" :
            bulan = "Desember";
            break

          default :
            console.log ("Periksa Angka Bulan !")
        }
        console.log (bulan)
        
    // penggunaan sort 
    var descend = tanggal.sort(function(a,b) 
                  {return b-a;});
        console.log (descend);
    //penggunaan join 
    var strip = descend.join ('-');
        console.log (strip);
    //penggunaan slice 
    var batas = input[1].slice (0, 15);
        console.log (batas)
    