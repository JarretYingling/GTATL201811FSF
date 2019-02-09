const dotenv = require('/usr/local/lib/node_modules/dotenv')
  .config({
    //symlink git = /Users/macos_highsierra_ss/git
    path: 'git/.env'
  });

if (dotenv.error) {
  throw dotenv.error;
}

const mysql = require('/usr/local/lib/node_modules/mysql');
const con = mysql.createConnection({
  // port: 3306,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: "ice_creamDB"
});

/*
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
*/

/*
const mysqlQuery = con.query(sql, function (err, result) {
  if (err) throw err;
  console.log('Result: ' + result);
});
*/

con.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + con.threadId);
  afterConnection();
});

function afterConnection() {
  con.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
    con.end();
  });
}
