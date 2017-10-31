const app = require('./server/server');

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server Has Started!");
});
