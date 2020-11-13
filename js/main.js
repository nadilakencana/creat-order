function Validasi(){
  var detail = document.getElementById("detail").value;
  var fromproduct = document.getElementById("formproduct").value;
  

  if (detail !="" && fromproduct !=""){
    return true;
    
  }else{
    alert("Form belum lengkap" );
  }
  document.getElementById("creat").value=true;
}


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
  document.getElementById("net").value = total;
} 

(function() {
  $('form > input#form').keyup(function() {
      var empty = false;
      $('form > input').each(function() {
          if ($(this).val() == '') {
              empty = true;
          }
      });

      if (empty) {
          $('creat').attr('disabled', 'true');
      } else {
          $('creat').removeAttr('disabled');
      }
  });
})()