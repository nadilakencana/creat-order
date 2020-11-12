function Price()
  {
  var unit = document.getElementById("unit");
  document.getElementById("price").value=unit;
    if (unit.value == "dus"){
      document.getElementById("price").value= 200000;
    }
    else if (unit.value == "karton"){
      document.getElementById("price").value= 300000;
    }
    else if (unit.value == "peak"){
      document.getElementById("price").value= 100000;
    }
     
  }  

function TotalPrice (){
  var jumlah = document.getElementById("jumlah");
  
  document.getElementById("total").value = (jumlah) * (document.getElementById("price").value) ;
} 