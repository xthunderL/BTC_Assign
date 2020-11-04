bodyParser was added back to Express in release 4.16.0, because people wanted it bundled with Express like before. That means you don't have to use bodyParser.json() anymore if you are on the latest release. You can use express.json() instead.
doesn't have use the middle ware now ,Cool! 

for every post request ,the data may get erased and server are not made to store the information actually file indeed.


    function delFun() {
        if (confirm("Are you sure ,you want to delet Calendar")) {
           console.log("ALl deleted ");

           const options ={
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(freeday)
        };
        fetch('http://localhost:3000/fday',options).then(response=>{
            console.log("deleted from server");
            alert("ALl deleted");
        });
        } else {
           console.log("ok fine,not deleted");
           alert("NO chnages were made");
          }


    }