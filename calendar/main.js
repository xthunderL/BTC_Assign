
$(function(){
    var pickerOpts1 = {
        dateFormat: "yy-mm-dd",
        onSelect: function(dateText, inst) {
          var date = $(this).datepicker('getDate');
          $('#datepicker2').val($.datepicker.formatDate('DD', date));
        }
    };
    $("#datepicker1").datepicker(pickerOpts1);
    
  });
   

    function SaveFun() {
        const person=document.getElementById("person").innerHTML;
        const date=document.getElementById("datepicker1").value;
        const day=document.getElementById("datepicker2").value;
        freeday = { "name":person,"fdays":day,"date":date};
        console.log(freeday);
        const options ={
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(freeday)
        };
        fetch('http://localhost:3000/fday',options).then(response=>{
            console.log("Uploaded to server");
            alert("Data Uploaded");
        });
        
        }
    




/*
const Day=document.getElementById("day").value;
    const Date=document.getElementById("myDate").value;

    
    
    freeday = { "name":person,"fdays":Day,"date":Date};
    console.log(freeday);
    
    const d1=document.getElementById("d1");

 const d2=document.getElementById("d2");
    const d3=document.getElementById("d3");
    const  days=[];
//selecting only the checked it 
    if(d1.checked || d2.checked || d3.checked){
        console.log("it's working");
        if(d1.checked == true){
            days.push(document.getElementById("d1").value)
           } 
     
         if (d2.checked == true){
            days.push(document.getElementById("d2").value)
           } 
     
         if (d3.checked == true){
            days.push(document.getElementById("d3").value)
           }

    }
    else{
        //console.log("it's not working");
        alert("PLEASE SELECT THE DAYS");
    }
  
    console.log("THE DAYS ARRAY:");
    console.log(days);

*/
    
    