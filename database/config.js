// let config = {
//     host: "localhost",
//     user: "root",
//     password: "",
//   };
  
//   module.exports = config;

  var mysql = require('mysql');
 
 let con = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
  database: "mydb"
});
con.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
        con.query("CREATE DATABASE IF NOT EXISTS mydb", function (err, result) {
            if (err) throw err;
            console.log("Database created");
          });
	}
  // con = mysql.createConnection({
  //   host:'localhost',
  //   user:'root',
  //   password:'',
  //   database: "mydb"
  // });
  // console.log('Database Connected Successfully..!!');
});


module.exports = con;