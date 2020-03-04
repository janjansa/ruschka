const express = require('express')

const app = express()
app.use(express.static(__dirname + '/assets'))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
})

app.listen(process.env.PORT || 3000, function(){
  console.log(`Server is up and listening on port 3000!`);
});
