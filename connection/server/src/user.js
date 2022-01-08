const mysql = require('mysql');
const Promise = require('bluebird');

Promise.promisifyAll(require("mysql/lib/Connection").prototype);


const dbinfo = {
    host: "localhost", // location of the database.
    user: "pgdac1",
    password: "cdac",
    database: "wpt"
};


const addUser = async (user) => {
    const connection = mysql.createConnection(dbinfo);

    await connection.connectAsync();
    let insert = `insert into logindetails (username, password) values (?,?)`;
    await connection.queryAsync(insert, [user.username, user.password]);
    await connection.endAsync();
};

const selectuser = async () => {
    const connection = mysql.createConnection(dbinfo);

    await connection.connectAsync();
    let select = `select * from logindetails`;
    const list = await connection.queryAsync(select);
    // console.log(list);
    await connection.endAsync();
    return list;
}

const user = {
    username: "deafguy",
    password: "1233"
};

//addUser(user);
//selectuser();

module.exports = { addUser, selectuser };