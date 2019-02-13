const mysql = require('/usr/local/lib/node_modules/mysql');

const dotenv = require('/usr/local/lib/node_modules/dotenv')
    .config({
        //symlink git = /Users/macos_highsierra_ss/git
        path: 'git/.env'
    });

if (dotenv.error) {
    throw dotenv.error;
}

const fs = require('fs');

const connection = mysql.createConnection({
    //
    port: 3306,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: "popquiz_db"
});

// single connection.connect()
// run multiple connection.query()
// until connection.end()
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    // don't connection.end() until all connection.query() completed
    // connection.end();
});


let sql = '';
let readStream = fs.createReadStream('test.sql', 'utf8');
readStream.on('data', function (chunk) {
    sql += chunk;
}).on('end', function () {
    console.log(sql);
    querySchema();
});

function querySchema() {
    connection.query(
        sql,
        function (err, queryResponse) {
            if (err) throw err;
            console.log(queryResponse);
        }
    );
    // logs actual query syntax
    //console.log(query.sql);

    // to enforce syncronous queries
    // call next query at end of current query

    // don't connection.end() until all connection.query() completed
    connection.end();
}