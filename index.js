const express = require('express');
const app = express();
const cors = require('cors');
var fs = require("fs");

//cross origin reference sharing
app.use(cors());

//body parser 
app.use(express.json({limit:'1mb'}));

//app.use(express.static('calendar'))
app.listen(3000,()=>console.log("listening at 3000 "));

//variables to store names 
var n1=0,n2=0,n3=0;
//variables arrays to store days  
var d1=[],d2=[],d3=[];

app.get('/', function (req, res) {
	
//Reading of the file started 
//Kumar file  Read started
var data=fs.readFileSync('Kumar.json');
const user = JSON.parse(data);
console.log("From file sysnc ")
console.log(user);

//Mahesh file  Read started
fs.readFile('Mahesh.json', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }

	if(data){
		// parse JSON object
		const user = JSON.parse(data);

		// print JSON object
		console.log("reading Mahesh's Data")
		console.log(user.name);
		n2=1;
		d2=user.Day;
		console.log(d2);

	}
	else{
		console.log("Mahesh File is empty no data");
	}
    
});

//Parvesh file  Read started
fs.readFile('Parvesh.json', 'utf-8', (err, data) => {
    if (err) {
        throw err;
	}
	
	
	if(data){
		// parse JSON object
		const user = JSON.parse(data);

		// print JSON object
		console.log("reading Parvesh's Data")
		console.log(user.name);
		n3=1;
		d3=user.Day;
		console.log(d3);

		
	}
	else{
		console.log("Parvesh File is empty no data");
	}
});
let one="";
if(n1 && n2 && n3){
	if(d1==d2 && d1==d3){
		res.send("Solution  found");
	} 
   
}else{
	   res.send("Solution not found");
   }
  });

 
	

//calendar data post request handle
app.post("/fday",(req,res)=>{
	console.log(req.body);
	let output=req.body;


	console.log(output.name);
	console.log(output.fdays);

	//file write started 
	//kumar file  write 
	if(output.name=="Kumar"){
	fs.open('Kumar.json', 'a+', function(err, fd) {
	if (err) {
	   return console.error(err);
	}
	console.log("File opened successfully!");
	//opened now write the data 
	const data = JSON.stringify(output, null, 4);
		fs.writeFile('Kumar.json', data, (err) => {
			if (err) {
				throw err;
			}
			console.log("JSON data is saved.");
			
		});
		//
		// Close the opened file.
		/*
		fs.close(fd, function(err) {
			if (err) {
			   console.log(err);
			} 
			console.log("File closed successfully.");
		 });
	    */ 
	 });
	}

	//Parvesh file  file  write
	if(output.name=="Parvesh"){
 	fs.open('Parvesh.json', 'a+', function(err, fd) {
	if (err) {
	   return console.error(err);
	}
	console.log("File opened successfully!");

	
	const data = JSON.stringify(output, null, 4);
	fs.writeFile('Parvesh.json', data, (err) => {
		if (err) {
			throw err;
		}
		console.log("JSON data is saved.");
	
	});

 	});
	}

	 //Mahesh file  file  write
	if(output.name=="Mahesh"){
 	fs.open('Mahesh.json', 'a+', function(err, fd) {
	if (err) {
	   return console.error(err);
	}
	console.log("File opened successfully!");

	const data = JSON.stringify(output, null, 4);
		fs.writeFile('Mahesh.json', data, (err) => {
			if (err) {
				throw err;
			}
			console.log("JSON data is saved.");
		});
 	});
	}
	
   
   /*
   fs.stat('input.txt', function (err, stats) {
	if (err) {
	   return console.error(err);
	}
	*/

	
	

	res.json({
	status:"success",	
	});

});



