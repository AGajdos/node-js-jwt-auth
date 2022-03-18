const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");
const fileupload = require("express-fileupload");

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
app.get('/video', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  connection.query('SELECT * from video ', function (err, rows, fields) {
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
app.get('/izom', (req, res) => {
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
app.post('/torles3', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  connection.query('Delete from forum where k_id= '+req.body.bevitel1, function (err, rows, fields) {
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


app.post('/adatfelvitel', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  
  connection.query("INSERT INTO gyakorlatok VALUES (NULL,'"+req.body.bevitel1+"', '"+req.body.bevitel2+"','"+req.body.bevitel3+"','"+req.body.bevitel4+"' ) ", function (err, rows, fields) {
    if (err) throw err
  
    console.log("Sikeres felvitel!")

    res.send("Sikeres felvitel!")
  })
  
  connection.end()    

})  


app.post('/adatfelvitel2', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  
  connection.query("INSERT INTO gyakorlatok VALUES (NULL,'"+req.body.bevitel1+"', '"+req.body.bevitel2+"','"+req.body.bevitel3+"','"+req.body.bevitel4+"' ) ", function (err, rows, fields) {
    if (err) throw err
  
    console.log("Sikeres felvitel!")

    res.send("Sikeres felvitel!")
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

app.get('/gyakorlatok_hat', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  connection.query('SELECT * from gyakorlatok WHERE izom_gyakorlat_id=2', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)

    res.send(rows)
  })
  
  
  connection.end()    

})
app.get('/gyakorlatok_vall', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  connection.query('SELECT * from gyakorlatok WHERE izom_gyakorlat_id=3', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)

    res.send(rows)
  })
  
  
  connection.end()    

})

app.get('/gyakorlatok_tricepsz', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  connection.query('SELECT * from gyakorlatok WHERE izom_gyakorlat_id=5', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)

    res.send(rows)
  })
  
  
  connection.end()    

})

app.get('/gyakorlatok_bicepsz', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  connection.query('SELECT * from gyakorlatok WHERE izom_gyakorlat_id=4', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)

    res.send(rows)
  })
  
  
  connection.end()    

})

app.get('/gyakorlatok_comb', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  connection.query('SELECT * from gyakorlatok WHERE izom_gyakorlat_id=6', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)

    res.send(rows)
  })
  
  
  connection.end()    

})
app.get('/gyakorlatok_vadli', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  connection.query('SELECT * from gyakorlatok WHERE izom_gyakorlat_id=7', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)

    res.send(rows)
  })
  
  
  connection.end()    

})
app.post('/kereses', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  var feltetel2='gyakorlat_nev LIKE "%'+req.body.bevitel1+'%"';
  
  connection.query('SELECT gyakorlat_nev,gyakorlat_leiras,gyakorlat_kep FROM gyakorlatok WHERE '+feltetel2, function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)

    res.send(rows)
  })
  
  
  connection.end()    

})

app.use(fileupload());
  app.post("/upload", (req, res) => {
    const newpath = "./kepek/";
    const file = req.files.file;
    const filename = file.name;
  
    file.mv(`${newpath}${filename}`, (err) => {
      if (err) {
        return res.status(500).send({ message: "File upload failed", code: 200 });
      }
        return res.status(200).send({ message: "File Uploaded", code: 200 });
    });
  });

};
