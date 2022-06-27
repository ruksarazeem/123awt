var http=require('http')
var server=http.createServer(function(req,res)
{
    if(ref.url=='/'){
    res.write("<h1> Hi this is Ruksar from IT </h1>");
    res.end();
    }
    if(ref.url=='/itb')
    {
        res.write("<h1> I'm cvr student");
        res.end();
    }
})
server.listen(1200,function(err,data)
{
    console.log ("Server Started")
})