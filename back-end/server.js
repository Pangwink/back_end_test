const express = require('express')
const app = express()
var create = function(req,res){
      res.send('Hello Pang')
};
app.get('/', create);
app.listen(9000, () => {
  console.log('Application is running on port 9000')
})
