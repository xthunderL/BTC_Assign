var fs = require("fs");


//Kumar file  Read started
fs.readFile('Kumar.json', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }
	if(data){
		// parse JSON object
		user = JSON.parse(data);

		// print JSON object
		console.log("reading Kumars's Data")
		console.log(user.name);
		//console.log(user);
		n1=1;
		d1=user.Day;
		console.log(d1);
	
	}
	else{
		console.log("Kumars File is empty no data");
	}
    
});

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