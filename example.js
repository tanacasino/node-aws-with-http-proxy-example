var AWS = require('aws-sdk')
   ,tunnel = require('tunnel');

AWS.config.loadFromPath('./config.json');

var tunAgent = tunnel.httpsOverHttp({
  proxy: {  // your proxy server infomation
    host: "localhost",
    port: 8888,
    proxyAuth: "user:password"
  }
})

AWS.config.update({httpOptions: { agent: tunAgent }})

var s3 = new AWS.S3();

s3.listBuckets(function(err, data) {
    if (err) {
      console.log(err, err.stack);
    } else {
      console.log(data);
    }
});

