const dotenv = require('/usr/local/lib/node_modules/dotenv')
    .config({
        //symlink git = /Users/macos_highsierra_ss/git
        path: 'git/.env'
    });

if (dotenv.error) {
    throw dotenv.error;
}

const mysql = require('/usr/local/lib/node_modules/mysql');
const connection = mysql.createConnection({
    //
    port: 3306,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: "ice_creamDB"
});

// single connection.connect()
// run multiple connection.query()
// until connection.end()
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    runSelectQuery();
    // don't connection.end() until all connection.query() completed
});

function runSelectQuery() {
    var query = connection.query(
        "SELECT * FROM products WHERE ? OR ?",
        [
            // first ? in SELECT
            {
                flavor: 'vanilla'
            },
            // second ? in SELECT
            {
                flavor: 'chocolate'
            }
        ],
        function (err, queryResponse) {
            if (err) throw err;
            console.log(queryResponse);
        }
    );
    // logs actual query syntax
    console.log(query.sql);

    // to enforce syncronous queries
    // call next query at end of current query
    runSingleInsertQuery();
}

function runSingleInsertQuery() {
    var query = connection.query(
        "INSERT INTO products SET ?",
        [
            // first ? in SELECT
            {
                flavor: "neopolitan",
                price: 2.40,
                quantity: 180
            }
        ],
        function (err, queryResponse) {
            if (err) throw err;
            console.log(queryResponse.affectedRows + " product inserted!\n");
            console.log(queryResponse);
        }
    );
    // logs actual query syntax
    console.log(query.sql);

    // to enforce syncronous queries
    // call next query at end of current query
    runMultiInsertQuery();
    // don't connection.end() until all connection.query() completed
}

function runMultiInsertQuery() {
    const sql = "INSERT INTO products (flavor, price, quantity) VALUES ?";
    const values = [
        ['dog shit', 3.90, 260],
        ['Rocky Road', 3.10, 220]
    ];
    const query = connection.query(
        sql,
        [values],
        function (err, queryResponse) {
            if (err) throw err;
            console.log(queryResponse.affectedRows + " product inserted!\n");
            console.log(queryResponse);
        }
    );
    // logs actual query syntax
    console.log(query.sql);

    // to enforce syncronous queries
    // call next query at end of current query
    runUpdateQuery();
    // don't connection.end() until all connection.query() completed
}

function runUpdateQuery() {
    var query = connection.query(
        "UPDATE products SET ? WHERE ?",
        [
            // first ? in SELECT
            {
                flavor: 'rocky road',
                price: 3.50
            },
            // second ? in SELECT
            {
                flavor: 'Rocky Road'
            }
        ],
        function (err, queryResponse) {
            if (err) throw err;
            console.log(queryResponse);
        }
    );
    // logs actual query syntax
    console.log(query.sql);

    // to enforce syncronous queries
    // call next query at end of current query
    runDeleteQuery();
    // don't connection.end() until all connection.query() completed
}

// todo
function runDeleteQuery() {
    var query = connection.query(
        "DELETE FROM products WHERE ?",
        [
            // first ? in SELECT
            {
                flavor: 'dog shit'
            }
        ],
        function (err, queryResponse) {
            if (err) throw err;
            console.log(queryResponse);
        }
    );
    // logs actual query syntax
    console.log(query.sql);

    // don't connection.end() until all connection.query() completed
}

connection.query("SELECT * FROM products", function (err, queryResponse) {
    if (err) throw err;
    console.log(queryResponse);
    connection.end();
});