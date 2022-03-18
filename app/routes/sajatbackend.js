const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
//sajatbackend végpontok
app.get('/gyakorlatok', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  connection.query('SELECT * from gyakorlatok ', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)

    res.send(rows)
  })
  
  
  connection.end()    

})
app.get('/gyakorlatok_mell', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  connection.query('SELECT * from gyakorlatok WHERE izom_gyakorlat_id=1', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)

    res.send(rows)
  })
  
  
  connection.end()    

})
app.get('/izomcsoport', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  connection.query('SELECT * from izomcsoport', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)

    res.send(rows)
  })
  
  
  connection.end()    

})
 
app.post('/torles', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  connection.query('Delete from gyakorlatok where id_gyakorlatok= '+req.body.bevitel1, function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)

    res.send("Sikeres törlés")
  })
  
  
  connection.end()    

})
app.post('/torles2', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  connection.query('Delete from izomcsoport where izom_id= '+req.body.bevitel1, function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)

    res.send("Sikeres törlés")
  })
  
  
  connection.end()    

})
app.post('/kommentfelvitel', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  let dt=new Date();
  let teljesdat=dt.getFullYear()+"-"+  (dt.getMonth()+1)   +"-"+dt.getDate();
  connection.query("INSERT INTO forum VALUES (NULL, '"+req.body.bevitel1+"', '"+req.body.bevitel2+"', '"+teljesdat+"') ", function (err, rows, fields) {
    if (err) throw err
  
    console.log("Sikeres felvitel!")

    res.send("Sikeres felvitel!")
  })
  
  connection.end()    

})  
app.get('/tema', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  connection.query('SELECT * from forum ORDER BY k_id DESC ', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)

    res.send(rows)
  })
  
  connection.end()    

})


};
