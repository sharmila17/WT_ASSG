function Register() {

    let reg = document.getElementById("form");   
      
      reg.style.display = "block";
      
  }
      
  function Registerends() {
    var tableItem = document.getElementById("table-item");
    var form = document.getElementById("form");
    // var i=document.getElementById("imk");
         
    
     tableItem.style.display = "block";
  
     form.style.display = "none";
    //  i.style.display = "none";
   } 
   
  
   
  
  
   var today = new Date();
   var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
   var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();   
   var dateTime = date+' '+time;
  
  
  
  
  
  function tables() {                                  
  
  
   
      alert("Form Submitted :)")
      var newRow = table.insertRow(table-list.length),          
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        cell4 = newRow.insertCell(3),
        cell5 = newRow.insertCell(4);
        cell6 = newRow.insertCell(5);
        cell7 = newRow.insertCell(6);
        cell8 = newRow.insertCell(7);
        cell9 = newRow.insertCell(8);
        cell10 = newRow.insertCell(9);
        cell11 = newRow.insertCell(10);
       
       
  
        fname = document.getElementById("fname").value,
        lname= document.getElementById("lname").value,
        age= document.getElementById("age").value
        pnumber= document.getElementById("p-number").value
        DOB= document.getElementById("DOB").value
        email= document.getElementById("email").value
        state= document.getElementById("state").value
        city= document.getElementById("city").value
        paddress= document.getElementById("p-address").value
        gender= document.getElementById("gender").value
  
     
  
  
     
  
      cell1.innerHTML = dateTime;                                 
      cell2.innerHTML = fname;
      cell3.innerHTML = lname;
      cell4.innerHTML = age;
      cell5.innerHTML =  pnumber;
      cell6.innerHTML = DOB;
      cell7.innerHTML =  email;
      cell8.innerHTML = state;
      cell9.innerHTML =  city;
      cell10.innerHTML =  paddress;
      cell11.innerHTML =  gender;
     
      
      document.getElementById("form").reset();
                                             
                     
    
  
  };
   
  
