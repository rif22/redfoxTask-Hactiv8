var tanggal = '1'; 
var bulan = '1';    
var tahun = '2018';

  if (tanggal >=1 && tanggal<=31) {
    if (bulan >=1 && bulan<=12) {
      
        if (tahun >=1900 && tahun<=2200) {
          switch (bulan) { 
            case '1':  
              bulan = ' Januari '
              break;
          
            case '2':  
              bulan = ' Februari '
              break;
              
            case '3':  
              bulan = ' Maret '
              break;
             
            case '4':  
              bulan = ' April '
              break;
            
            case '5':  
              bulan = ' Mei '
              break;
            
            case '6':  
              bulan = ' Juni '
              break;
              
            case '7':  
              bulan = ' Juli '
              break;
            
            case '8':  
              bulan = ' Agustus '
              break;
              
            case '9':  
              bulan = ' September '
              break;
              
            case '10':  
              bulan = ' Oktober '
              break;
              
             case '11':  
              bulan = ' November '
              break;
              
             case '12':  
              bulan = ' Desember '
              break;
              
            default:
              console.log('Bulan harus diinput!'); 
              break;
            }
        }else{
          console.log ("Nilai Inputan tahun Salah!")
        }
      
    }else{
      console.log ("Nilai Inputan bulan Salah!")
    }
    
    
  }else{
    console.log ("Nilai Inputan tanggal Salah!")
  }

  console.log (tanggal + bulan + tahun)