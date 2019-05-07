const express = require('express');

const app = express();
const port = 1337;

app.use(express.static(__dirname+'/../client/'));

app.listen(port, () => console.log(`listening on port ${port}!`));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
