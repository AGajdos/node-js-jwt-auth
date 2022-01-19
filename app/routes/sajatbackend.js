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
};
