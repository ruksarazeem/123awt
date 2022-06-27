var http=require('http')
var fs=require('fs')
var server=http.createServer(function(req,res){
    if(req.url=='/'){
        file.readFile('sample.txt',function(err,data){
            console.log(data.toString())
        })
        res.write("<h1>  i am ruksar from IT B </h1>");
        res.end();
    }
    if(req.url=='/itb'){
        file.writeFile('sample.txt',"Hello CVR",function(err,data)
        {
            console.data("Writing File")
        })
        res.write("<h1>This is an example of writing file")
        res.end();
    }
})
server.listen(1200,function(err,data){
    console.log("Server Started")
})