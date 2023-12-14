
let con = require("./config");

var sql =
  "CREATE TABLE if not exists customers (name VARCHAR(255), address VARCHAR(255))";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table created");
});

/* create another table */
let createTodos = `create table if not exists todos(
    title varchar(255)not null,
    completed tinyint(1) not null default 0
)`;

con.query(createTodos, function (err, results, fields) {
  if (err) {
    console.log(err.message);
  }
});
