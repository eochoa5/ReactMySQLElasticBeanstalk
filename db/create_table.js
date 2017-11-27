const con = require('./db_connection.js').con;

con.connect(function(err) {
    if (err){
        throw err;
    } else{
        console.log("Connected!");

        //create table

        const sql = "CREATE TABLE IF NOT EXISTS events (id INT(11) NOT NULL AUTO_INCREMENT, organizer_name VARCHAR(255)," +
            " event_name VARCHAR(255), start_date DATETIME NOT NULL, PRIMARY KEY (id))";

        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Result: " + result);
        });

    }

});

